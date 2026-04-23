import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="logo-wrapper">
      <img
        class="logo-img logo-dark"
        [attr.height]="size()"
        src="pasto_legal_logo_dark.svg"
        alt="Pasto Legal"
      />
      <img
        class="logo-img logo-light"
        [attr.height]="size()"
        src="pasto_legal_logo_light.svg"
        alt="Pasto Legal"
      />
    </span>
  `,
  styles: [`
    :host { display: inline-flex; align-items: center; }
    .logo-wrapper { display: inline-flex; align-items: center; }
    .logo-img { display: block; width: auto; }

    /* Modo escuro (padrão): mostra versão dark, esconde light */
    .logo-dark  { display: block; }
    .logo-light { display: none; }

    /* Modo claro: inverte */
    :host-context(html[data-theme="light"]) .logo-dark  { display: none; }
    :host-context(html[data-theme="light"]) .logo-light { display: block; }
  `]
})
export class LogoComponent {
  size = input(32);
  variant = input<'full' | 'icon'>('icon');
}
