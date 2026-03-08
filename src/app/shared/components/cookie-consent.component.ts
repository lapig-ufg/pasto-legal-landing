import { Component, ChangeDetectionStrategy, signal, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-cookie-consent',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (visible()) {
      <div class="cookie-banner" role="dialog" aria-label="Consentimento de cookies">
        <div class="cookie-inner">
          <div class="cookie-text">
            <p>
              {{ i18n.t().cookie.message }}
              <a routerLink="/politica-de-privacidade" class="text-verde-bio no-underline hover:underline">{{ i18n.t().cookie.privacyLink }}</a>
              {{ i18n.t().cookie.messageEnd }}
            </p>
          </div>
          <div class="cookie-actions">
            <button class="btn-reject" (click)="reject()">{{ i18n.t().cookie.reject }}</button>
            <button class="btn-accept" (click)="accept()">{{ i18n.t().cookie.accept }}</button>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    .cookie-banner {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 9999;
      padding: 1rem 1.25rem;
      background: var(--color-glass-bg);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-top: 1px solid var(--color-glass-border);
      animation: slide-up 0.4s ease-out;
    }

    .cookie-inner {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      gap: 1.5rem;
      flex-wrap: wrap;
    }

    .cookie-text {
      flex: 1;
      min-width: 280px;
    }

    .cookie-text p {
      font-size: 0.82rem;
      line-height: 1.6;
      color: var(--color-text-sub);
      margin: 0;
    }

    .cookie-actions {
      display: flex;
      gap: 0.75rem;
      flex-shrink: 0;
    }

    .btn-reject {
      padding: 0.5rem 1.25rem;
      border-radius: 8px;
      font-size: 0.8rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
      background: transparent;
      border: 1px solid var(--color-glass-border);
      color: var(--color-text-muted);
    }

    .btn-reject:hover {
      border-color: var(--color-text-dim);
      color: var(--color-branco-nuvem);
    }

    .btn-accept {
      padding: 0.5rem 1.25rem;
      border-radius: 8px;
      font-size: 0.8rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      background: var(--color-verde-bio);
      border: none;
      color: #fff;
    }

    .btn-accept:hover {
      filter: brightness(1.1);
    }

    @keyframes slide-up {
      from {
        transform: translateY(100%);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @media (max-width: 640px) {
      .cookie-inner {
        flex-direction: column;
        align-items: stretch;
        gap: 1rem;
      }

      .cookie-actions {
        justify-content: stretch;
      }

      .cookie-actions button {
        flex: 1;
      }
    }
  `]
})
export class CookieConsentComponent implements OnInit {
  readonly i18n = inject(I18nService);
  private readonly STORAGE_KEY = 'pl-cookie-consent';
  private platformId = inject(PLATFORM_ID);

  visible = signal(false);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (!stored) {
        this.visible.set(true);
      }
    }
  }

  accept(): void {
    this.saveConsent('all');
  }

  reject(): void {
    this.saveConsent('essential');
  }

  private saveConsent(level: 'all' | 'essential'): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify({
        level,
        timestamp: new Date().toISOString()
      }));
    }
    this.visible.set(false);
  }
}
