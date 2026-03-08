import { Component, ChangeDetectionStrategy, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../sections/footer/footer.component';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [RouterLink, FooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article class="legal-page pt-28 sm:pt-32 pb-16 px-5 sm:px-8 lg:px-12">
      <div class="max-w-[800px] mx-auto">
        <a routerLink="/" class="inline-flex items-center gap-1.5 text-verde-bio text-[0.8rem] font-medium no-underline mb-6 hover:underline">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
          {{ i18n.t().legal.backHome }}
        </a>

        <h1 class="text-[clamp(1.8rem,4vw,2.8rem)] font-black leading-tight mb-2">{{ i18n.t().privacy.title }}</h1>
        <p class="text-text-muted text-[0.85rem] mb-10">{{ i18n.t().legal.lastUpdated }}</p>

        <div class="legal-content">
          @for (section of i18n.t().privacy.sections; track section.title) {
            <section>
              <h2>{{ section.title }}</h2>
              @for (p of section.paragraphs; track p) {
                <p>{{ p }}</p>
              }
              @if (section.list) {
                <ul>
                  @for (item of section.list; track item) {
                    <li>{{ item }}</li>
                  }
                </ul>
              }
              @if (section.paragraphsAfterList) {
                @for (p of section.paragraphsAfterList; track p) {
                  <p>{{ p }}</p>
                }
              }
              @if (section.contactEmail) {
                <p><a [href]="'mailto:' + section.contactEmail" class="text-verde-bio">{{ section.contactEmail }}</a></p>
              }
              @if (section.contactNote) {
                <p>{{ section.contactNote }}</p>
              }
            </section>
          }
        </div>

        <div class="mt-12 pt-8 border-t border-border-subtle">
          <p class="text-text-dim text-[0.8rem]">{{ i18n.t().legal.seeAlsoTerms }} <a routerLink="/termos-de-uso" class="text-verde-bio no-underline hover:underline">{{ i18n.t().legal.termsLink }}</a>.</p>
        </div>
      </div>
    </article>
    <app-footer />
  `,
  styles: [`
    .legal-content section { margin-bottom: 2rem; }
    .legal-content h2 { font-size: 1.15rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--color-branco-nuvem); }
    .legal-content p { font-size: 0.9rem; line-height: 1.75; color: var(--color-text-sub); margin-bottom: 0.75rem; }
    .legal-content ul { list-style: disc; padding-left: 1.5rem; margin-bottom: 0.75rem; }
    .legal-content li { font-size: 0.9rem; line-height: 1.75; color: var(--color-text-sub); margin-bottom: 0.35rem; }
    .legal-content em { font-style: italic; color: var(--color-text-muted); }
    .legal-content strong { font-weight: 600; color: var(--color-branco-nuvem); }
  `]
})
export class PrivacyComponent implements OnInit {
  readonly i18n = inject(I18nService);
  private platformId = inject(PLATFORM_ID);
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) window.scrollTo(0, 0);
  }
}
