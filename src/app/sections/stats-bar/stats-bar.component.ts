import { Component, ChangeDetectionStrategy, ElementRef, viewChildren, OnInit, OnDestroy, signal, inject, computed } from '@angular/core';
import { animateCounter } from '../../shared/utils/animate-counter';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { I18nService } from '../../i18n/i18n.service';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  isStatic?: boolean;
  staticText?: string;
}

@Component({
  selector: 'app-stats-bar',
  standalone: true,
  imports: [RevealOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="py-8 sm:py-12 px-5 sm:px-8 relative">
      <!-- Accent: radial glow -->
      <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[radial-gradient(ellipse,rgba(45,204,112,0.06),transparent_70%)] pointer-events-none"></div>
      <div appRevealOnScroll class="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 bg-glass-bg border border-glass-border backdrop-blur-[20px] rounded-[20px] p-5 sm:p-10 glass-fallback">
        @for (stat of stats; track stat.label) {
          <div class="text-center">
            <div class="stat-number text-[1.6rem] sm:text-[2.5rem] font-extrabold text-verde-bio font-mono tracking-tight" #counterEl [attr.data-count]="stat.isStatic ? null : stat.value">
              {{ stat.isStatic ? stat.staticText : '0' }}
            </div>
            <div class="text-[0.6rem] sm:text-[0.8rem] text-text-muted font-medium mt-1 uppercase tracking-wider sm:tracking-widest">{{ labels()[$index] }}</div>
          </div>
        }
      </div>
    </div>
  `
})
export class StatsBarComponent implements OnInit, OnDestroy {
  readonly i18n = inject(I18nService);

  readonly labels = computed(() => {
    const s = this.i18n.t().stats;
    return [s.producers, s.hectares, s.analyses, s.openSource];
  });

  stats: StatItem[] = [
    { value: 2500, suffix: '+', label: 'Produtores Conectados' },
    { value: 15000, suffix: '+', label: 'Hectares Monitorados' },
    { value: 50000, suffix: '+', label: 'Análises Realizadas' },
    { value: 0, suffix: '', label: 'Código Aberto', isStatic: true, staticText: '100%' }
  ];

  private counterElements = viewChildren<ElementRef>('counterEl');
  private observer!: IntersectionObserver;
  private animated = false;

  ngOnInit(): void {
    setTimeout(() => this.setupObserver(), 100);
  }

  private setupObserver(): void {
    const elements = this.counterElements();
    if (elements.length === 0) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        if (this.animated) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animated = true;
            elements.forEach((elRef, i) => {
              const stat = this.stats[i];
              if (!stat.isStatic) {
                animateCounter(elRef.nativeElement, stat.value, 2000, stat.suffix);
              }
            });
            this.observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    this.observer.observe(elements[0].nativeElement.closest('[appRevealOnScroll]') || elements[0].nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
