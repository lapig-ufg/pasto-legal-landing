import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-lang-toggle',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      class="lang-toggle"
      (click)="i18n.toggle()"
      [attr.aria-label]="i18n.locale() === 'pt-BR' ? 'Switch to English' : 'Mudar para Português'">
      <span class="lang-option" [class.active]="i18n.locale() === 'pt-BR'">PT</span>
      <span class="lang-separator">|</span>
      <span class="lang-option" [class.active]="i18n.locale() === 'en'">EN</span>
    </button>
  `,
  styles: [`
    .lang-toggle {
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      background: var(--color-glass-bg);
      border: 1px solid var(--color-glass-border);
      border-radius: 100px;
      padding: 0.3rem 0.65rem;
      cursor: pointer;
      transition: all 0.2s;
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
    }
    .lang-toggle:hover { border-color: var(--color-verde-bio); }
    .lang-option {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.62rem;
      font-weight: 600;
      letter-spacing: 0.5px;
      color: var(--color-text-faint);
      transition: color 0.2s;
    }
    .lang-option.active { color: var(--color-verde-bio); }
    .lang-separator {
      font-size: 0.55rem;
      color: var(--color-text-faint);
      opacity: 0.4;
    }
  `]
})
export class LangToggleComponent {
  readonly i18n = inject(I18nService);
}
