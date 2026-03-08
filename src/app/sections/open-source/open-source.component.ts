import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-open-source',
  standalone: true,
  imports: [RevealOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    .matrix-column {
      position: absolute;
      top: 0;
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      line-height: 1.4;
      color: var(--color-verde-bio);
      opacity: 0.05;
      white-space: pre;
      animation: matrix-fall var(--duration) linear var(--delay) infinite;
      pointer-events: none;
    }
  `],
  template: `
    <section class="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 relative" id="opensource">
      <div appRevealOnScroll class="opensource-card max-w-[900px] mx-auto bg-gradient-to-br from-[rgba(45,204,112,0.08)] to-[rgba(44,62,80,0.15)] border border-[rgba(45,204,112,0.2)] rounded-2xl sm:rounded-3xl p-8 sm:p-16 text-center relative overflow-hidden">
        <!-- Matrix rain columns -->
        @for (col of matrixColumns; track $index) {
          <div class="matrix-column"
            [style.left.%]="col.left"
            [style.--duration]="col.duration + 's'"
            [style.--delay]="col.delay + 's'">{{ col.chars }}</div>
        }
        <!-- Rotating gradient background -->
        <div class="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(45,204,112,0.05)_0%,transparent_50%)] animate-[rotate-gradient_20s_linear_infinite]"></div>

        <h2 class="text-[1.8rem] sm:text-[2.5rem] font-extrabold mb-4 relative">
          100% <span class="font-mono bg-[rgba(45,204,112,0.1)] text-verde-bio px-2.5 py-1 rounded text-[0.85rem]">Open Source</span>
        </h2>
        <p class="text-sm sm:text-base text-text-muted leading-relaxed sm:leading-loose max-w-[600px] mx-auto mb-6 sm:mb-8 relative">
          Acreditamos que a ciência deve ser acessível. Todo o código do Pasto Legal está disponível no GitHub. Contribua, audite, aprenda. Transparência total em parceria com a Universidade Federal de Goiás.
        </p>
        <a href="#" class="inline-flex items-center gap-2 sm:gap-2.5 px-6 py-3 sm:px-8 sm:py-4 bg-verde-bio text-[#1a252f] rounded-full font-bold text-[0.8rem] sm:text-[0.9rem] no-underline transition-all duration-300 relative hover:-translate-y-[3px] hover:shadow-[0_8px_30px_var(--color-verde-glow)]">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
          Ver no GitHub
        </a>
      </div>
    </section>
  `
})
export class OpenSourceComponent {
  matrixColumns = Array.from({ length: 7 }, (_, i) => {
    const chars = 'NDVI EVI LAI GNDVI SAVI RGB NIR SWIR'.split(' ');
    const columnChars = Array.from({ length: 12 }, () =>
      chars[Math.floor(Math.random() * chars.length)]
    ).join('\n');
    return {
      left: 8 + i * 13,
      duration: 8 + Math.random() * 6,
      delay: Math.random() * 5,
      chars: columnChars
    };
  });
}
