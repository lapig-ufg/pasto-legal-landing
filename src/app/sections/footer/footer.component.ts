import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../../shared/components/logo.component';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoComponent, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="pt-12 sm:pt-16 pb-8 px-5 sm:px-8 lg:px-12 border-t border-glass-border">
      <div class="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 sm:gap-12">
        <!-- Brand -->
        <div class="col-span-2 lg:col-span-1">
          <a routerLink="/" class="no-underline inline-flex items-center gap-2">
            <app-logo [size]="44" variant="full" />
          </a>
          <p class="text-[0.8rem] text-text-dim leading-relaxed mt-3 max-w-[300px]">
            {{ i18n.t().footer.tagline }}
          </p>
        </div>

        @for (col of columns(); track col.title) {
          <div>
            <h4 class="text-[0.75rem] uppercase tracking-[1.5px] text-text-muted mb-4">{{ col.title }}</h4>
            @for (link of col.links; track link.label) {
              @if (link.route) {
                <a [routerLink]="link.route" class="block text-text-dim no-underline text-[0.85rem] mb-2.5 transition-colors duration-300 hover:text-verde-bio">{{ link.label }}</a>
              } @else {
                <a [href]="link.href || '#'" class="block text-text-dim no-underline text-[0.85rem] mb-2.5 transition-colors duration-300 hover:text-verde-bio">{{ link.label }}</a>
              }
            }
          </div>
        }
      </div>

      <!-- Bottom Bar -->
      <div class="max-w-[1200px] mx-auto mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center text-[0.65rem] sm:text-[0.75rem] text-text-faint gap-3 sm:gap-4 text-center md:text-left">
        <span>{{ i18n.t().footer.copyright }} <a href="#" class="text-verde-bio no-underline">{{ i18n.t().footer.license }}</a></span>
        <div class="flex gap-6 items-center text-[0.7rem] text-text-faint font-mono">
          <span>UFG</span>
          <span>•</span>
          <span>SENTINEL-2</span>
          <span>•</span>
          <span>GOOGLE GEMINI</span>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  readonly i18n = inject(I18nService);

  readonly columns = computed(() => {
    const f = this.i18n.t().footer.columns;
    return [
      {
        title: f.platform.title,
        links: [
          { label: f.platform.whatsapp, href: '#' },
          { label: f.platform.docs, href: '#' },
          { label: f.platform.api, href: '#' },
          { label: f.platform.status, href: '#' }
        ]
      },
      {
        title: f.community.title,
        links: [
          { label: f.community.github, href: '#' },
          { label: f.community.discord, href: '#' },
          { label: f.community.blog, href: '#' },
          { label: f.community.publications, route: '/publicacoes' }
        ]
      },
      {
        title: f.institutional.title,
        links: [
          { label: f.institutional.ufg, href: '#' },
          { label: f.institutional.about, route: '/sobre' },
          { label: f.institutional.terms, route: '/termos-de-uso' },
          { label: f.institutional.privacy, route: '/politica-de-privacidade' }
        ]
      }
    ];
  });
}
