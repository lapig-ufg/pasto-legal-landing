import { Injectable, signal, computed, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ptBr, type Translations } from './pt-br';
import { en } from './en';

export type Locale = 'pt-BR' | 'en';

const STORAGE_KEY = 'pl-locale';
const LOCALES: Record<Locale, Translations> = { 'pt-BR': ptBr, 'en': en };

@Injectable({ providedIn: 'root' })
export class I18nService {
  private platformId = inject(PLATFORM_ID);

  readonly locale = signal<Locale>(this.detectLocale());
  readonly t = computed<Translations>(() => LOCALES[this.locale()]);

  setLocale(locale: Locale): void {
    this.locale.set(locale);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(STORAGE_KEY, locale);
      document.documentElement.setAttribute('lang', locale === 'pt-BR' ? 'pt-BR' : 'en');
    }
  }

  toggle(): void {
    this.setLocale(this.locale() === 'pt-BR' ? 'en' : 'pt-BR');
  }

  private detectLocale(): Locale {
    if (isPlatformBrowser(this.platformId)) {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'en' || stored === 'pt-BR') return stored;
    }
    return 'pt-BR';
  }
}
