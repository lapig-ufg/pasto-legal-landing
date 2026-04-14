import { Component, ChangeDetectionStrategy, signal, OnInit, OnDestroy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoComponent } from './logo.component';
import { ThemeToggleComponent } from './theme-toggle.component';
import { LangToggleComponent } from './lang-toggle.component';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LogoComponent, ThemeToggleComponent, LangToggleComponent, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav
      class="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between transition-all duration-400 ease-out"
      [class]="scrolled() ? 'py-2 sm:py-3 px-4 sm:px-8 bg-nav-bg backdrop-blur-[20px] border-b border-glass-border' : 'py-3 sm:py-5 px-4 sm:px-8'">
      <a routerLink="/" class="no-underline flex items-center gap-2">
        <app-logo [size]="logoSize" variant="full" />
      </a>

      <div class="flex items-center gap-4 sm:gap-6">
        <ul class="nav-links hidden lg:flex gap-10 list-none" [class.mobile-open]="menuOpen()">
          <li><a routerLink="/publicacoes" class="nav-link" (click)="closeMenu()">{{ i18n.t().nav.publications }}</a></li>
          <li><a routerLink="/sobre" class="nav-link" (click)="closeMenu()">{{ i18n.t().nav.about }}</a></li>
          <li>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSepSZGScWS5PsN0fkqEu6-qigmNq194eTgSIFB0ey5VNg3oUg/viewform" target="_blank" rel="noopener noreferrer" class="nav-cta bg-[var(--color-cta-bg)] text-[var(--color-cta-text)]! px-6 py-2.5 rounded-full font-bold text-[0.8rem] shadow-[0_0_20px_var(--color-cta-glow)] hover:bg-white hover:-translate-y-0.5 transition-all duration-300" (click)="closeMenu()">
              {{ i18n.t().nav.cta }}
            </a>
          </li>
        </ul>

        <app-lang-toggle />
        <app-theme-toggle />

        <button class="lg:hidden bg-transparent border-none cursor-pointer p-2" (click)="toggleMenu()" aria-label="Menu">
          <span class="block w-6 h-0.5 bg-branco-nuvem my-[5px] transition-all duration-300"></span>
          <span class="block w-6 h-0.5 bg-branco-nuvem my-[5px] transition-all duration-300"></span>
          <span class="block w-6 h-0.5 bg-branco-nuvem my-[5px] transition-all duration-300"></span>
        </button>
      </div>
    </nav>
  `,
  styles: [`
    .nav-link {
      color: var(--color-text-sub);
      text-decoration: none;
      font-size: 0.85rem;
      font-weight: 500;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      transition: color 0.3s ease;
      position: relative;
    }
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--color-verde-bio);
      transition: width 0.3s ease;
    }
    .nav-link:hover { color: var(--color-verde-bio); }
    .nav-link:hover::after { width: 100%; }
    .nav-cta::after { display: none !important; }

    .mobile-open {
      display: flex !important;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: var(--color-nav-mobile);
      backdrop-filter: blur(20px);
      padding: 1.5rem;
      border-bottom: 1px solid var(--color-border-subtle);
    }
  `]
})
export class NavbarComponent implements OnInit, OnDestroy {
  readonly i18n = inject(I18nService);
  scrolled = signal(false);
  menuOpen = signal(false);
  logoSize = 48;

  private onScroll = () => {
    this.scrolled.set(window.scrollY > 50);
  };

  private onResize = () => {
    this.logoSize = window.innerWidth < 640 ? 32 : 48;
  };

  ngOnInit(): void {
    this.onResize();
    window.addEventListener('scroll', this.onScroll, { passive: true });
    window.addEventListener('resize', this.onResize, { passive: true });
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onResize);
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
