import { Component, ChangeDetectionStrategy, OnInit, PLATFORM_ID, inject, computed } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../sections/footer/footer.component';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, FooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article class="about-page pt-28 sm:pt-32 pb-16 px-5 sm:px-8 lg:px-12">
      <div class="max-w-[900px] mx-auto">

        <a routerLink="/" class="inline-flex items-center gap-1.5 text-verde-bio text-[0.8rem] font-medium no-underline mb-6 hover:underline">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
          {{ i18n.t().legal.backHome }}
        </a>

        <!-- Hero -->
        <header class="mb-14 sm:mb-20">
          <h1 class="text-[clamp(1.8rem,4vw,2.8rem)] font-black leading-tight mb-4">{{ i18n.t().about.title }}</h1>
          <p class="text-text-sub text-[0.95rem] leading-relaxed max-w-[680px]">{{ i18n.t().about.subtitle }}</p>
        </header>

        <!-- Mission -->
        <section class="about-section">
          <div class="section-tag"><span class="tag-line"></span>{{ i18n.t().about.mission.tag }}</div>
          <h2 class="about-h2">{{ i18n.t().about.mission.title }}</h2>
          <p class="about-p">{{ i18n.t().about.mission.p1 }}</p>
          <p class="about-p">{{ i18n.t().about.mission.p2 }}</p>
        </section>

        <!-- How it works -->
        <section class="about-section">
          <div class="section-tag"><span class="tag-line"></span>{{ i18n.t().about.howItWorks.tag }}</div>
          <h2 class="about-h2">{{ i18n.t().about.howItWorks.title }}</h2>
          <div class="flow-grid">
            @for (step of i18n.t().about.howItWorks.steps; track step.number) {
              <div class="flow-card">
                <div class="flow-number">{{ step.number }}</div>
                <h3 class="flow-title">{{ step.title }}</h3>
                <p class="flow-desc">{{ step.desc }}</p>
              </div>
            }
          </div>
        </section>

        <!-- Team -->
        <section class="about-section">
          <div class="section-tag"><span class="tag-line"></span>{{ i18n.t().about.team.tag }}</div>
          <h2 class="about-h2">{{ i18n.t().about.team.title }}</h2>
          <p class="about-p">{{ i18n.t().about.team.p1 }}</p>
          <p class="about-p">{{ i18n.t().about.team.p2 }}</p>
          <div class="team-grid">
            @for (member of team; track member.name) {
              <div class="team-card">
                <div class="team-avatar">{{ member.initials }}</div>
                <div>
                  <div class="team-name">{{ member.name }}</div>
                  <div class="team-role">{{ member.role }}</div>
                </div>
              </div>
            }
          </div>
        </section>

        <!-- Partners -->
        <section class="about-section">
          <div class="section-tag"><span class="tag-line"></span>{{ i18n.t().about.partners.tag }}</div>
          <h2 class="about-h2">{{ i18n.t().about.partners.title }}</h2>
          <p class="about-p">{{ i18n.t().about.partners.desc }}</p>
          <div class="partner-list">
            @for (partner of i18n.t().about.partners.items; track partner.name) {
              <div class="partner-item">
                <div class="partner-name">{{ partner.name }}</div>
                <div class="partner-desc">{{ partner.desc }}</div>
              </div>
            }
          </div>
        </section>

        <!-- Tech -->
        <section class="about-section">
          <div class="section-tag"><span class="tag-line"></span>{{ i18n.t().about.tech.tag }}</div>
          <h2 class="about-h2">{{ i18n.t().about.tech.title }}</h2>
          <p class="about-p">{{ i18n.t().about.tech.desc }}</p>
          <div class="tech-grid">
            @for (tech of stack; track tech.name) {
              <div class="tech-chip">
                <span class="tech-name">{{ tech.name }}</span>
                <span class="tech-desc">{{ tech.desc }}</span>
              </div>
            }
          </div>
        </section>

        <!-- Contact -->
        <section class="about-section">
          <div class="section-tag"><span class="tag-line"></span>{{ i18n.t().about.contact.tag }}</div>
          <h2 class="about-h2">{{ i18n.t().about.contact.title }}</h2>
          <p class="about-p">
            {{ i18n.t().about.contact.desc }}
            <a href="mailto:lapig.ufg&#64;gmail.com" class="text-verde-bio no-underline hover:underline">lapig.ufg&#64;gmail.com</a>.
          </p>
          <div class="contact-grid">
            <div class="contact-card">
              <div class="contact-label">{{ i18n.t().about.contact.addressLabel }}</div>
              <div class="contact-value" style="white-space: pre-line">{{ i18n.t().about.contact.address }}</div>
            </div>
            <div class="contact-card">
              <div class="contact-label">{{ i18n.t().about.contact.linksLabel }}</div>
              <div class="contact-value">
                <a routerLink="/publicacoes" class="contact-link">{{ i18n.t().nav.publications }}</a>
                <a routerLink="/termos-de-uso" class="contact-link">{{ i18n.t().legal.termsLink }}</a>
                <a routerLink="/politica-de-privacidade" class="contact-link">{{ i18n.t().legal.privacyLink }}</a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </article>
    <app-footer />
  `,
  styles: [`
    .about-section { margin-bottom: 3rem; }
    .section-tag { display: inline-flex; align-items: center; gap: 0.5rem; font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; color: var(--color-verde-bio); text-transform: uppercase; letter-spacing: 2px; margin-bottom: 0.75rem; }
    .tag-line { display: inline-block; width: 1.25rem; height: 1px; background: var(--color-verde-bio); }
    .about-h2 { font-size: clamp(1.3rem, 3vw, 1.8rem); font-weight: 800; line-height: 1.2; margin-bottom: 1rem; color: var(--color-branco-nuvem); }
    .about-p { font-size: 0.9rem; line-height: 1.8; color: var(--color-text-sub); margin-bottom: 0.85rem; max-width: 680px; }
    .about-p strong { font-weight: 600; color: var(--color-branco-nuvem); }
    .flow-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 1.25rem; }
    .flow-card { padding: 1.25rem; background: var(--color-glass-bg); border: 1px solid var(--color-glass-border); border-radius: 14px; transition: border-color 0.3s; }
    .flow-card:hover { border-color: rgba(45,204,112,0.3); }
    .flow-number { font-family: 'JetBrains Mono', monospace; font-size: 0.65rem; font-weight: 700; color: var(--color-verde-bio); opacity: 0.7; margin-bottom: 0.5rem; }
    .flow-title { font-size: 0.9rem; font-weight: 700; color: var(--color-branco-nuvem); margin-bottom: 0.4rem; }
    .flow-desc { font-size: 0.78rem; line-height: 1.6; color: var(--color-text-dim); }
    .team-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 0.75rem; margin-top: 1.25rem; }
    .team-card { display: flex; align-items: center; gap: 0.85rem; padding: 0.85rem 1rem; background: var(--color-glass-bg); border: 1px solid var(--color-glass-border); border-radius: 12px; }
    .team-avatar { width: 2.4rem; height: 2.4rem; border-radius: 50%; background: rgba(45,204,112,0.12); color: var(--color-verde-bio); font-weight: 700; font-size: 0.72rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .team-name { font-size: 0.82rem; font-weight: 600; color: var(--color-branco-nuvem); }
    .team-role { font-size: 0.72rem; color: var(--color-text-dim); margin-top: 0.1rem; }
    .partner-list { display: grid; gap: 0.75rem; margin-top: 1.25rem; }
    .partner-item { padding: 1rem 1.25rem; background: var(--color-glass-bg); border: 1px solid var(--color-glass-border); border-radius: 12px; }
    .partner-name { font-size: 0.85rem; font-weight: 700; color: var(--color-branco-nuvem); margin-bottom: 0.25rem; }
    .partner-desc { font-size: 0.78rem; line-height: 1.6; color: var(--color-text-dim); }
    .tech-grid { display: flex; flex-wrap: wrap; gap: 0.6rem; margin-top: 1rem; }
    .tech-chip { padding: 0.5rem 0.9rem; background: var(--color-glass-bg); border: 1px solid var(--color-glass-border); border-radius: 100px; display: inline-flex; align-items: center; gap: 0.5rem; }
    .tech-name { font-size: 0.78rem; font-weight: 600; color: var(--color-branco-nuvem); }
    .tech-desc { font-size: 0.68rem; color: var(--color-text-dim); }
    .contact-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; margin-top: 1.25rem; }
    .contact-card { padding: 1.25rem; background: var(--color-glass-bg); border: 1px solid var(--color-glass-border); border-radius: 14px; }
    .contact-label { font-size: 0.68rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-text-faint); margin-bottom: 0.5rem; }
    .contact-value { font-size: 0.82rem; line-height: 1.7; color: var(--color-text-sub); }
    .contact-link { display: block; color: var(--color-verde-bio); text-decoration: none; font-size: 0.82rem; margin-bottom: 0.3rem; }
    .contact-link:hover { text-decoration: underline; }
  `]
})
export class AboutComponent implements OnInit {
  readonly i18n = inject(I18nService);
  private platformId = inject(PLATFORM_ID);

  team = [
    { name: 'Prof. Dr. Laerte G. Ferreira', initials: 'LF', role: 'Coordenador — LAPIG/UFG' },
    { name: 'Dr. Leandro Parente', initials: 'LP', role: 'Pesquisador — Sensoriamento Remoto' },
  ];

  stack = [
    { name: 'Sentinel-2', desc: 'Images' },
    { name: 'Google Earth Engine', desc: 'Processing' },
    { name: 'Python', desc: 'Backend' },
    { name: 'Google Gemini', desc: 'LLM' },
    { name: 'WhatsApp API', desc: 'Channel' },
    { name: 'Angular', desc: 'Portal' },
    { name: 'PostGIS', desc: 'Geodata' },
    { name: 'Docker', desc: 'Deploy' }
  ];

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) window.scrollTo(0, 0);
  }
}
