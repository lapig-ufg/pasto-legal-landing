import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { IconComponent, type IconName } from '../../shared/components/icon.component';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-infrastructure',
  standalone: true,
  imports: [RevealOnScrollDirective, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-16 sm:py-32 px-5 sm:px-8 lg:px-12 relative" id="infraestrutura">
      <div class="max-w-[1000px] mx-auto text-center">
        <div appRevealOnScroll>
          <div class="inline-flex items-center gap-1.5 font-mono text-[0.7rem] text-verde-bio uppercase tracking-[2px] mb-4">
            <span class="w-5 h-px bg-verde-bio"></span>
            {{ i18n.t().infra.tag }}
          </div>
          <h2 class="text-[clamp(2rem,4vw,3.5rem)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-5">
            {{ i18n.t().infra.title }}<br>
            <span class="text-verde-bio">{{ i18n.t().infra.titleHighlight }}</span>
          </h2>
          <p class="text-[1.05rem] text-text-muted font-light leading-relaxed mx-auto max-w-[550px]">
            {{ i18n.t().infra.subtitle }}
          </p>
        </div>

        <div appRevealOnScroll class="grid grid-cols-2 md:flex md:flex-row items-center justify-center gap-3 sm:gap-4 mt-10 sm:mt-16">
          @for (node of nodes(); track node.name; let last = $last) {
            <div class="flow-node bg-glass-bg border border-glass-border backdrop-blur-[15px] rounded-xl sm:rounded-2xl py-5 px-4 sm:py-8 sm:px-6 text-center min-w-0 sm:min-w-[150px] transition-all duration-400 hover:border-verde-bio hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(45,204,112,0.1)]" [class.border-[rgba(45,204,112,0.3)]]="node.highlight">
              <div class="mb-2 sm:mb-3 text-text-secondary">
                <app-icon [name]="node.icon" [size]="28" />
              </div>
              <div class="font-bold text-[0.75rem] sm:text-[0.9rem] mb-0.5 sm:mb-1">{{ node.name }}</div>
              <div class="font-mono text-[0.55rem] sm:text-[0.65rem] text-text-dim">{{ node.sub }}</div>
            </div>
            @if (!last) {
              <div class="flow-connector hidden md:flex items-center justify-center relative">
                <svg class="w-[60px] h-[20px]" viewBox="0 0 60 20" fill="none">
                  <line x1="0" y1="10" x2="48" y2="10"
                    stroke="rgba(45, 204, 112, 0.3)"
                    stroke-width="1.5"
                    stroke-dasharray="4 3" />
                  <line x1="0" y1="10" x2="48" y2="10"
                    stroke="var(--color-verde-bio)"
                    stroke-width="1.5"
                    stroke-dasharray="4 3"
                    class="connector-animated" />
                  <polygon points="48,5 58,10 48,15" fill="var(--color-verde-bio)" opacity="0.6" />
                </svg>
              </div>
            }
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .connector-animated {
      stroke-dashoffset: 60;
      animation: data-flow 1.5s linear infinite;
    }
    @keyframes data-flow {
      0% { stroke-dashoffset: 60; }
      100% { stroke-dashoffset: 0; }
    }
  `]
})
export class InfrastructureComponent {
  readonly i18n = inject(I18nService);

  readonly nodes = computed(() => {
    const icons: IconName[] = ['satellite', 'university', 'sparkle', 'whatsapp'];
    const highlights = [false, false, false, true];
    return this.i18n.t().infra.nodes.map((n, i) => ({
      icon: icons[i],
      name: n.name,
      sub: n.sub,
      highlight: highlights[i]
    }));
  });
}
