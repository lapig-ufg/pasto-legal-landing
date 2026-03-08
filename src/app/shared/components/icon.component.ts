import { Component, ChangeDetectionStrategy, input } from '@angular/core';

export type IconName = 'satellite' | 'dna' | 'leaf' | 'whatsapp' | 'university' | 'brain' | 'sparkle';

@Component({
  selector: 'app-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      [attr.width]="size()"
      [attr.height]="size()"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true">
      @switch (name()) {
        @case ('satellite') {
          <!-- Satellite body (diamond rotated) -->
          <rect x="8.5" y="8.5" width="7" height="7" rx="1.5" transform="rotate(45 12 12)" />
          <!-- Left solar panel -->
          <line x1="7.8" y1="7.8" x2="3.5" y2="3.5" />
          <rect x="1" y="1" width="5" height="5" rx="0.5" transform="rotate(45 3.5 3.5)" />
          <!-- Right solar panel -->
          <line x1="16.2" y1="16.2" x2="20.5" y2="20.5" />
          <rect x="18" y="18" width="5" height="5" rx="0.5" transform="rotate(45 20.5 20.5)" />
          <!-- Signal arcs -->
          <path d="M2 17a7 7 0 0 0 5 5" stroke-width="1" opacity="0.5" />
          <path d="M5 17a4 4 0 0 0 2.5 3" stroke-width="1" opacity="0.7" />
        }
        @case ('dna') {
          <!-- Left strand -->
          <path d="M6 2c0 3 6 5 6 8s-6 5-6 8c0 2 0 4 0 4" />
          <!-- Right strand -->
          <path d="M18 2c0 3-6 5-6 8s6 5 6 8c0 2 0 4 0 4" />
          <!-- Connecting bars -->
          <line x1="8" y1="6" x2="16" y2="6" stroke-width="1.2" />
          <line x1="6" y1="12" x2="18" y2="12" stroke-width="1.2" />
          <line x1="8" y1="18" x2="16" y2="18" stroke-width="1.2" />
        }
        @case ('leaf') {
          <!-- Leaf outline -->
          <path d="M12 22V12" />
          <path d="M12 12C12 7 7 2 2 2c0 10 5 15 10 15" />
          <path d="M12 12c0-5 5-10 10-10 0 10-5 15-10 15" />
          <!-- Central vein detail -->
          <path d="M7 8c2 1 3.5 2.5 5 4" stroke-width="1" opacity="0.6" />
          <path d="M17 8c-2 1-3.5 2.5-5 4" stroke-width="1" opacity="0.6" />
        }
        @case ('whatsapp') {
          <!-- Speech bubble -->
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
          <!-- Phone handset inside -->
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" fill="currentColor" />
          <path d="M9.7 13.3c1 1.3 2.3 2.2 3.6 2.7.3.1.7 0 .9-.3l.5-.7c.2-.3.1-.7-.2-.9l-1.2-.7c-.3-.2-.6-.1-.8.1l-.3.3a.2.2 0 0 1-.3 0 8 8 0 0 1-2-2 .2.2 0 0 1 0-.3l.3-.3c.2-.2.3-.5.1-.8l-.7-1.2c-.2-.3-.6-.4-.9-.2l-.7.5c-.3.2-.4.6-.3.9.5 1.3 1.4 2.6 2.7 3.6Z" />
        }
        @case ('university') {
          <!-- Pediment triangle -->
          <path d="M3 10.5L12 4l9 6.5" />
          <!-- Top entablature -->
          <line x1="2" y1="11" x2="22" y2="11" stroke-width="1.8" />
          <!-- Columns -->
          <line x1="6" y1="11.5" x2="6" y2="19" />
          <line x1="10" y1="11.5" x2="10" y2="19" />
          <line x1="14" y1="11.5" x2="14" y2="19" />
          <line x1="18" y1="11.5" x2="18" y2="19" />
          <!-- Base platform -->
          <rect x="2" y="19" width="20" height="2" rx="0.5" stroke-width="1.2" />
        }
        @case ('brain') {
          <!-- Left hemisphere -->
          <path d="M12 2.5a5 5 0 0 0-4.5 3A4 4 0 0 0 4 9.5c0 1.5.5 2.8 1.2 3.8A4 4 0 0 0 7 18h2" />
          <!-- Right hemisphere -->
          <path d="M12 2.5a5 5 0 0 1 4.5 3A4 4 0 0 1 20 9.5c0 1.5-.5 2.8-1.2 3.8A4 4 0 0 1 17 18h-2" />
          <!-- Center line -->
          <line x1="12" y1="2.5" x2="12" y2="22" stroke-width="1" />
          <!-- Circuit nodes -->
          <circle cx="8.5" cy="10" r="1" fill="currentColor" stroke="none" />
          <circle cx="15.5" cy="10" r="1" fill="currentColor" stroke="none" />
          <circle cx="10" cy="16" r="1" fill="currentColor" stroke="none" />
          <circle cx="14" cy="16" r="1" fill="currentColor" stroke="none" />
          <!-- Connections -->
          <line x1="9.5" y1="10" x2="14.5" y2="10" stroke-width="0.8" opacity="0.5" />
          <line x1="11" y1="16" x2="13" y2="16" stroke-width="0.8" opacity="0.5" />
        }
        @case ('sparkle') {
          <!-- Main 4-point star -->
          <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2Z" stroke-width="1.5" />
          <!-- Small accent sparkles -->
          <line x1="19" y1="3" x2="19" y2="7" stroke-width="1" opacity="0.6" />
          <line x1="17" y1="5" x2="21" y2="5" stroke-width="1" opacity="0.6" />
          <line x1="4" y1="18" x2="4" y2="21" stroke-width="1" opacity="0.5" />
          <line x1="2.5" y1="19.5" x2="5.5" y2="19.5" stroke-width="1" opacity="0.5" />
        }
      }
    </svg>
  `,
  styles: [`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  `]
})
export class IconComponent {
  name = input.required<IconName>();
  size = input(24);
}
