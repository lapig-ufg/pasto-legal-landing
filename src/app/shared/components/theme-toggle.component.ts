import { Component, ChangeDetectionStrategy, signal, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      (click)="toggle()"
      class="relative w-9 h-9 flex items-center justify-center rounded-full border border-glass-border bg-glass-bg backdrop-blur-[10px] cursor-pointer transition-all duration-300 hover:border-verde-bio"
      [attr.aria-label]="isLight() ? 'Ativar tema escuro' : 'Ativar tema claro'">
      <!-- Sun icon -->
      <svg
        class="w-[18px] h-[18px] absolute transition-all duration-300"
        [class.opacity-0]="isLight()"
        [class.scale-50]="isLight()"
        [class.opacity-100]="!isLight()"
        [class.scale-100]="!isLight()"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
      <!-- Moon icon -->
      <svg
        class="w-[18px] h-[18px] absolute transition-all duration-300"
        [class.opacity-100]="isLight()"
        [class.scale-100]="isLight()"
        [class.opacity-0]="!isLight()"
        [class.scale-50]="!isLight()"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  `
})
export class ThemeToggleComponent implements OnInit {
  isLight = signal(false);
  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.isLight.set(document.documentElement.getAttribute('data-theme') === 'light');
  }

  toggle(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const next = !this.isLight();
    this.isLight.set(next);
    const meta = document.getElementById('theme-color-meta') as HTMLMetaElement | null;
    if (next) {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('pl-theme', 'light');
      if (meta) meta.content = '#E8ECF2';
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('pl-theme', 'dark');
      if (meta) meta.content = '#1a252f';
    }
  }
}
