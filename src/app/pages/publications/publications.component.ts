import { Component, ChangeDetectionStrategy, OnInit, PLATFORM_ID, inject, signal, computed } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../sections/footer/footer.component';
import { I18nService } from '../../i18n/i18n.service';

type PubType = 'article' | 'chapter' | 'thesis' | 'conference';

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: PubType;
  doi?: string;
  url?: string;
  abstract?: string;
  highlight?: boolean;
}

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [RouterLink, FooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article class="pub-page pt-28 sm:pt-32 pb-16 px-5 sm:px-8 lg:px-12">
      <div class="max-w-[1000px] mx-auto">

        <!-- Back link -->
        <a routerLink="/" class="inline-flex items-center gap-1.5 text-verde-bio text-[0.8rem] font-medium no-underline mb-6 hover:underline">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
          {{ i18n.t().legal.backHome }}
        </a>

        <!-- Header -->
        <header class="mb-10 sm:mb-14">
          <h1 class="text-[clamp(1.8rem,4vw,2.8rem)] font-black leading-tight mb-3">{{ i18n.t().publications.title }}</h1>
          <p class="text-text-sub text-[0.92rem] leading-relaxed max-w-[640px]">
            {{ i18n.t().publications.subtitle }}
          </p>
        </header>

        <!-- Stats pills -->
        <div class="flex flex-wrap gap-3 mb-8">
          <div class="stat-pill">
            <span class="stat-number">{{ publications.length }}</span>
            <span class="stat-label">{{ i18n.t().publications.statsLabel }}</span>
          </div>
          @for (t of typeStats(); track t.type) {
            <div class="stat-pill">
              <span class="stat-number">{{ t.count }}</span>
              <span class="stat-label">{{ t.label }}</span>
            </div>
          }
        </div>

        <!-- Filters -->
        <div class="filter-bar">
          <div class="filter-group">
            <span class="filter-label">{{ i18n.t().publications.filterType }}</span>
            <div class="flex flex-wrap gap-1.5">
              <button
                class="chip"
                [class.chip-active]="activeType() === null"
                (click)="activeType.set(null)">
                {{ i18n.t().publications.filterAll }}
              </button>
              @for (t of typesTranslated(); track t.value) {
                <button
                  class="chip"
                  [class.chip-active]="activeType() === t.value"
                  (click)="activeType.set(t.value)">
                  {{ t.label }}
                </button>
              }
            </div>
          </div>

          <div class="filter-group">
            <span class="filter-label">{{ i18n.t().publications.filterYear }}</span>
            <div class="flex flex-wrap gap-1.5">
              <button
                class="chip"
                [class.chip-active]="activeYear() === null"
                (click)="activeYear.set(null)">
                {{ i18n.t().publications.filterAll }}
              </button>
              @for (y of years; track y) {
                <button
                  class="chip"
                  [class.chip-active]="activeYear() === y"
                  (click)="activeYear.set(y)">
                  {{ y }}
                </button>
              }
            </div>
          </div>
        </div>

        <!-- Results count -->
        <p class="text-text-dim text-[0.78rem] mb-6 mt-6">
          {{ i18n.t().publications.showing }} {{ filtered().length }} {{ i18n.t().publications.of }} {{ publications.length }} {{ i18n.t().publications.statsLabel }}
        </p>

        <!-- Timeline -->
        <div class="pub-timeline">
          @for (pub of filtered(); track pub.title; let i = $index) {
            <div
              class="pub-card"
              [style.animation-delay]="(i * 60) + 'ms'"
              [class.pub-highlight]="pub.highlight">

              <!-- Timeline connector -->
              <div class="timeline-dot">
                <svg class="type-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  @switch (pub.type) {
                    @case ('article') {
                      <path d="M4 4h16v16H4z" rx="2" />
                      <path d="M8 8h8M8 12h8M8 16h4" />
                    }
                    @case ('chapter') {
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15z" />
                    }
                    @case ('thesis') {
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
                    }
                    @case ('conference') {
                      <rect x="2" y="7" width="20" height="14" rx="2" />
                      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                      <line x1="12" y1="12" x2="12" y2="12.01" stroke-width="3" />
                    }
                  }
                </svg>
              </div>

              <!-- Content -->
              <div class="pub-content">
                <div class="pub-meta">
                  <span class="pub-year">{{ pub.year }}</span>
                  <span class="pub-type-badge" [attr.data-type]="pub.type">{{ typeLabel(pub.type) }}</span>
                </div>

                <h3 class="pub-title">{{ pub.title }}</h3>
                <p class="pub-authors">{{ pub.authors }}</p>
                <p class="pub-venue">{{ pub.venue }}</p>

                @if (pub.abstract) {
                  <details class="pub-abstract-toggle">
                    <summary>{{ i18n.t().publications.abstract }}</summary>
                    <p class="pub-abstract">{{ pub.abstract }}</p>
                  </details>
                }

                <div class="pub-actions">
                  @if (pub.doi) {
                    <a [href]="'https://doi.org/' + pub.doi" target="_blank" rel="noopener noreferrer" class="pub-link pub-link-doi">
                      <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      DOI
                    </a>
                  }
                  @if (pub.url) {
                    <a [href]="pub.url" target="_blank" rel="noopener noreferrer" class="pub-link">
                      <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      {{ i18n.t().publications.access }}
                    </a>
                  }
                </div>
              </div>
            </div>
          }

          @if (filtered().length === 0) {
            <div class="empty-state">
              <svg class="w-12 h-12 text-text-faint mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
              <p class="text-text-dim text-[0.85rem]">{{ i18n.t().publications.noResults }}</p>
              <button class="mt-3 text-verde-bio text-[0.82rem] underline cursor-pointer bg-transparent border-none" (click)="clearFilters()">{{ i18n.t().publications.clearFilters }}</button>
            </div>
          }
        </div>

      </div>
    </article>
    <app-footer />
  `,
  styles: [`
    .stat-pill { display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.35rem 0.85rem; border-radius: 100px; background: var(--color-glass-bg); border: 1px solid var(--color-glass-border); font-size: 0.75rem; }
    .stat-number { font-family: 'JetBrains Mono', monospace; font-weight: 700; color: var(--color-verde-bio); }
    .stat-label { color: var(--color-text-dim); }
    .filter-bar { display: flex; flex-wrap: wrap; gap: 1.5rem; padding: 1rem 1.25rem; background: var(--color-glass-bg); border: 1px solid var(--color-glass-border); border-radius: 14px; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
    .filter-group { display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; }
    .filter-label { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1.2px; color: var(--color-text-faint); font-weight: 600; white-space: nowrap; }
    .chip { padding: 0.3rem 0.75rem; border-radius: 100px; font-size: 0.75rem; font-weight: 500; cursor: pointer; transition: all 0.2s; background: transparent; border: 1px solid var(--color-border-subtle); color: var(--color-text-dim); }
    .chip:hover { border-color: var(--color-verde-bio); color: var(--color-verde-bio); }
    .chip-active { background: var(--color-verde-bio); border-color: var(--color-verde-bio); color: #fff; }
    .chip-active:hover { color: #fff; filter: brightness(1.1); }
    .pub-timeline { position: relative; padding-left: 2.5rem; }
    .pub-timeline::before { content: ''; position: absolute; left: 0.85rem; top: 0; bottom: 0; width: 1px; background: linear-gradient(to bottom, transparent, var(--color-glass-border) 2rem, var(--color-glass-border) calc(100% - 2rem), transparent); }
    .pub-card { position: relative; margin-bottom: 1.25rem; opacity: 0; animation: card-enter 0.5s ease-out forwards; }
    .pub-content { padding: 1.25rem 1.5rem; background: var(--color-glass-bg); border: 1px solid var(--color-glass-border); border-radius: 14px; transition: all 0.3s ease; }
    .pub-content:hover { border-color: rgba(45,204,112,0.25); background: rgba(45,204,112,0.03); }
    .pub-highlight .pub-content { border-left: 3px solid var(--color-verde-bio); }
    .timeline-dot { position: absolute; left: -2.5rem; top: 1.35rem; width: 1.75rem; height: 1.75rem; display: flex; align-items: center; justify-content: center; background: var(--color-azul-deep); border: 1.5px solid var(--color-glass-border); border-radius: 50%; z-index: 1; }
    .pub-highlight .timeline-dot { border-color: var(--color-verde-bio); background: rgba(45,204,112,0.1); }
    .type-icon { width: 0.85rem; height: 0.85rem; color: var(--color-text-dim); }
    .pub-highlight .type-icon { color: var(--color-verde-bio); }
    .pub-meta { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.6rem; }
    .pub-year { font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; font-weight: 700; color: var(--color-verde-bio); }
    .pub-type-badge { font-size: 0.62rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.8px; padding: 0.15rem 0.5rem; border-radius: 4px; background: var(--color-border-subtle); color: var(--color-text-muted); }
    .pub-type-badge[data-type="article"] { background: rgba(45,204,112,0.1); color: var(--color-verde-bio); }
    .pub-title { font-size: 0.95rem; font-weight: 700; line-height: 1.45; color: var(--color-branco-nuvem); margin-bottom: 0.4rem; }
    .pub-authors { font-size: 0.8rem; line-height: 1.5; color: var(--color-text-sub); margin-bottom: 0.25rem; }
    .pub-venue { font-size: 0.78rem; font-style: italic; color: var(--color-text-muted); margin-bottom: 0.5rem; }
    .pub-abstract-toggle { margin-bottom: 0.6rem; }
    .pub-abstract-toggle summary { font-size: 0.76rem; font-weight: 600; color: var(--color-verde-bio); cursor: pointer; list-style: none; display: inline-flex; align-items: center; gap: 0.35rem; user-select: none; }
    .pub-abstract-toggle summary::before { content: '▸'; display: inline-block; transition: transform 0.2s; font-size: 0.7rem; }
    .pub-abstract-toggle[open] summary::before { transform: rotate(90deg); }
    .pub-abstract-toggle summary::-webkit-details-marker { display: none; }
    .pub-abstract { font-size: 0.8rem; line-height: 1.7; color: var(--color-text-sub); margin-top: 0.5rem; padding-left: 0.75rem; border-left: 2px solid var(--color-border-subtle); }
    .pub-actions { display: flex; gap: 0.6rem; flex-wrap: wrap; }
    .pub-link { display: inline-flex; align-items: center; gap: 0.35rem; font-size: 0.72rem; font-weight: 600; padding: 0.3rem 0.65rem; border-radius: 6px; text-decoration: none; transition: all 0.2s; color: var(--color-text-muted); border: 1px solid var(--color-border-subtle); }
    .pub-link:hover { color: var(--color-verde-bio); border-color: var(--color-verde-bio); }
    .pub-link-doi { color: var(--color-verde-bio); border-color: rgba(45,204,112,0.3); background: rgba(45,204,112,0.05); }
    .pub-link-doi:hover { background: rgba(45,204,112,0.12); }
    .empty-state { text-align: center; padding: 3rem 1rem; }
    @keyframes card-enter { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
    @media (max-width: 640px) {
      .pub-timeline { padding-left: 2rem; }
      .timeline-dot { left: -2rem; width: 1.4rem; height: 1.4rem; }
      .type-icon { width: 0.7rem; height: 0.7rem; }
      .pub-content { padding: 1rem 1.1rem; }
      .pub-title { font-size: 0.88rem; }
      .filter-bar { flex-direction: column; gap: 1rem; }
    }
  `]
})
export class PublicationsComponent implements OnInit {
  readonly i18n = inject(I18nService);
  private platformId = inject(PLATFORM_ID);

  activeType = signal<PubType | null>(null);
  activeYear = signal<number | null>(null);

  private typeKeys: { value: PubType; pluralKey: 'articles' | 'chapters' | 'theses' | 'conferences' }[] = [
    { value: 'article', pluralKey: 'articles' },
    { value: 'chapter', pluralKey: 'chapters' },
    { value: 'thesis', pluralKey: 'theses' },
    { value: 'conference', pluralKey: 'conferences' }
  ];

  readonly typesTranslated = computed(() => {
    const types = this.i18n.t().publications.types;
    return this.typeKeys.map(t => ({ value: t.value, label: types[t.pluralKey] }));
  });

  publications: Publication[] = [
    {
      title: 'Pasturelands degradation assessment using long-term Landsat and Sentinel-2 data in the Brazilian Cerrado',
      authors: 'Parente, L.; Ferreira, L.G.; Faria, A.; Nogueira, S.; Araújo, F.M.; Teixeira, L.; Hagen, S.',
      venue: 'Remote Sensing of Environment',
      year: 2024,
      type: 'article',
      doi: '10.1016/j.rse.2024.114015',
      highlight: true,
      abstract: 'Este estudo apresenta uma abordagem multitemporal para avaliação da degradação de pastagens no Cerrado brasileiro, integrando séries temporais Landsat e Sentinel-2 para classificação do vigor vegetativo e identificação de padrões de degradação em larga escala.'
    },
    {
      title: 'Atlas das Pastagens Brasileiras: mapeamento e evolução temporal',
      authors: 'Parente, L.; Ferreira, L.G.; Faria, A.; Nogueira, S.; Araújo, F.M.',
      venue: 'Nature Scientific Data',
      year: 2024,
      type: 'article',
      doi: '10.1038/s41597-024-03182-7',
      highlight: true,
      abstract: 'Apresentação do Atlas das Pastagens, o mais abrangente levantamento de pastagens do Brasil, cobrindo o período de 1985 a 2023 com dados Landsat e classificação por aprendizado de máquina.'
    },
    {
      title: 'Monitoring pasture biomass using Sentinel-2 spectral indices and machine learning regression',
      authors: 'Teixeira, L.; Parente, L.; Ferreira, L.G.; Nogueira, S.',
      venue: 'International Journal of Applied Earth Observation and Geoinformation',
      year: 2023,
      type: 'article',
      doi: '10.1016/j.jag.2023.103567',
      abstract: 'Desenvolvimento de modelos de regressão baseados em índices espectrais do Sentinel-2 (NDVI, EVI, SAVI) para estimativa de biomassa em pastagens tropicais, com validação de campo em propriedades rurais de Goiás.'
    },
    {
      title: 'Deep learning for pasture degradation classification from Sentinel-2 time series in tropical regions',
      authors: 'Nogueira, S.; Parente, L.; Ferreira, L.G.; Teixeira, L.',
      venue: 'ISPRS Journal of Photogrammetry and Remote Sensing',
      year: 2023,
      type: 'article',
      doi: '10.1016/j.isprsjprs.2023.09.012',
    },
    {
      title: 'Assessing pasture quality in Brazil using MODIS NDVI time series and phenological metrics',
      authors: 'Araújo, F.M.; Ferreira, L.G.; Parente, L.',
      venue: 'Remote Sensing',
      year: 2022,
      type: 'article',
      doi: '10.3390/rs14030556',
    },
    {
      title: 'An analysis of the Cerrado deforestation and pasture expansion trends from 2000 to 2020',
      authors: 'Faria, A.; Parente, L.; Ferreira, L.G.; Araújo, F.M.',
      venue: 'Land Use Policy',
      year: 2022,
      type: 'article',
      doi: '10.1016/j.landusepol.2022.106358',
      abstract: 'Análise integrada das tendências de desmatamento e expansão de pastagens no Cerrado nas últimas duas décadas, correlacionando mudanças de uso do solo com políticas públicas e dinâmicas de mercado.'
    },
    {
      title: 'Geospatial artificial intelligence for sustainable livestock: a WhatsApp-based framework',
      authors: 'Parente, L.; Teixeira, L.; Nogueira, S.; Ferreira, L.G.',
      venue: 'Proceedings of the FOSS4G 2023 Conference',
      year: 2023,
      type: 'conference',
      url: 'https://foss4g.org/2023',
      abstract: 'Apresentação do framework Pasto Legal como caso de uso de inteligência artificial geoespacial acessível via WhatsApp para apoio à pecuária sustentável.'
    },
    {
      title: 'Mapeamento e monitoramento de pastagens por sensoriamento remoto e aprendizado de máquina',
      authors: 'Parente, L.',
      venue: 'Tese de Doutorado — Universidade Federal de Goiás, IESA/LAPIG',
      year: 2022,
      type: 'thesis',
      url: 'https://repositorio.bc.ufg.br/',
      highlight: true,
    },
    {
      title: 'Inteligência artificial aplicada ao monitoramento ambiental: do satélite ao produtor rural',
      authors: 'Teixeira, L.',
      venue: 'Dissertação de Mestrado — Universidade Federal de Goiás, IESA/LAPIG',
      year: 2024,
      type: 'thesis',
    },
    {
      title: 'Pastagens Brasileiras: Técnicas de Sensoriamento Remoto para Mapeamento e Monitoramento',
      authors: 'Ferreira, L.G.; Parente, L.; Araújo, F.M.',
      venue: 'In: Sensoriamento Remoto no Brasil: Avanços e Perspectivas. Editora UFG',
      year: 2021,
      type: 'chapter',
    },
    {
      title: 'Remote sensing of pastureland degradation in the Neotropics: a review of advances and challenges',
      authors: 'Ferreira, L.G.; Parente, L.; Faria, A.; Nogueira, S.',
      venue: 'In: Earth Observation for Land and Emergency Monitoring. Wiley',
      year: 2021,
      type: 'chapter',
      doi: '10.1002/9781119082354.ch12',
    },
  ];

  years: number[] = [];

  typeStats = computed(() => {
    const counts = new Map<PubType, number>();
    for (const pub of this.publications) {
      counts.set(pub.type, (counts.get(pub.type) || 0) + 1);
    }
    const types = this.i18n.t().publications.types;
    return this.typeKeys
      .filter(t => counts.has(t.value))
      .map(t => ({
        type: t.value,
        label: types[t.pluralKey].toLowerCase(),
        count: counts.get(t.value)!
      }));
  });

  filtered = computed(() => {
    let result = this.publications;
    const type = this.activeType();
    const year = this.activeYear();
    if (type) result = result.filter(p => p.type === type);
    if (year) result = result.filter(p => p.year === year);
    return result;
  });

  constructor() {
    const uniqueYears = [...new Set(this.publications.map(p => p.year))];
    this.years = uniqueYears.sort((a, b) => b - a);
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) window.scrollTo(0, 0);
  }

  typeLabel(type: PubType): string {
    const types = this.i18n.t().publications.types;
    return types[type];
  }

  clearFilters(): void {
    this.activeType.set(null);
    this.activeYear.set(null);
  }
}
