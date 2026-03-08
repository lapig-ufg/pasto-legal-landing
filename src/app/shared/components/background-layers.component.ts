import { Component, ChangeDetectionStrategy, OnInit, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ParallaxDirective } from '../directives/parallax.directive';

interface GrassBlade {
  path: string;
  color: string;
  opacity: number;
  delay: number;
  swayClass: string;
}

interface Seed {
  size: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
  opacity: number;
}

// Muted NDVI-inspired palette — desaturated for subtlety
const VIGOR_PALETTE = [
  '#3a7d44', '#4a8c5c', '#5a9a6a', '#6aaa78',  // high vigor (greens)
  '#7db36b', '#8fbc6e', '#a0c578',              // medium
  '#b5c46a', '#c4c468',                          // transitioning
  '#b8a060',                                     // stressed
];

function pickColor(rng: () => number): string {
  // Bias toward greens: 60% high, 25% medium, 10% transition, 5% stressed
  const r = rng();
  if (r < 0.60) return VIGOR_PALETTE[Math.floor(rng() * 4)];
  if (r < 0.85) return VIGOR_PALETTE[4 + Math.floor(rng() * 3)];
  if (r < 0.95) return VIGOR_PALETTE[7 + Math.floor(rng() * 2)];
  return VIGOR_PALETTE[9];
}

/** Tapered grass blade: wide base → thin curved tip */
function bladePath(x: number, baseY: number, h: number, baseW: number, curve: number): string {
  const tipX = x + curve;
  const tipY = baseY - h;
  // Control points for left edge (base-left → tip)
  const cx1L = x - baseW * 0.3;
  const cy1L = baseY - h * 0.35;
  const cx2L = tipX - 0.4;
  const cy2L = baseY - h * 0.75;
  // Control points for right edge (tip → base-right)
  const cx1R = tipX + 0.4;
  const cy1R = baseY - h * 0.75;
  const cx2R = x + baseW * 0.3;
  const cy2R = baseY - h * 0.35;

  return `M${(x - baseW / 2).toFixed(1)} ${baseY}`
    + ` C${cx1L.toFixed(1)} ${cy1L.toFixed(1)}, ${cx2L.toFixed(1)} ${cy2L.toFixed(1)}, ${tipX.toFixed(1)} ${tipY.toFixed(1)}`
    + ` C${cx1R.toFixed(1)} ${cy1R.toFixed(1)}, ${cx2R.toFixed(1)} ${cy2R.toFixed(1)}, ${(x + baseW / 2).toFixed(1)} ${baseY}`
    + `Z`;
}

function makeRng(seed: number): () => number {
  let s = seed;
  return () => {
    s = Math.sin(s * 9301 + 49297) * 49979;
    return s - Math.floor(s);
  };
}

@Component({
  selector: 'app-background-layers',
  standalone: true,
  imports: [ParallaxDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
      <!-- Layer 0: Radial gradients -->
      <div class="absolute inset-0 bg-layer-gradients"></div>

      @if (!isMobile()) {
        <!-- Layer 1: Distant pasture (small, dense, static) -->
        <div appParallax [speed]="0.02" class="absolute inset-0 grass-far">
          <svg class="absolute bottom-0 w-full" viewBox="0 0 1440 300" preserveAspectRatio="none" style="height: 45vh;">
            @for (b of farBlades; track $index) {
              <path [attr.d]="b.path" [attr.fill]="b.color" [attr.opacity]="b.opacity" />
            }
          </svg>
        </div>

        <!-- Layer 2: Satellite grid + scan -->
        <div appParallax [speed]="0.06" class="absolute inset-0">
          <svg class="w-full h-full bg-layer-grid" viewBox="0 0 1440 900" preserveAspectRatio="none" fill="none">
            @for (i of gridLines; track i) {
              <line [attr.x1]="i * 60" y1="0" [attr.x2]="i * 60" y2="900" stroke="var(--color-verde-bio)" stroke-width="0.5" />
              <line x1="0" [attr.y1]="i * 60" x2="1440" [attr.y2]="i * 60" stroke="var(--color-verde-bio)" stroke-width="0.5" />
            }
            @for (dot of gridDots; track $index) {
              <circle [attr.cx]="dot.x" [attr.cy]="dot.y" r="1.5" fill="var(--color-verde-bio)" opacity="0.5" />
            }
          </svg>
          <div class="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-verde-bio to-transparent opacity-20 animate-[satellite-scan_8s_linear_infinite]"></div>
        </div>

        <!-- Layer 3: Near pasture (taller, animated, seasonal) -->
        <div appParallax [speed]="0.08" class="absolute inset-0 grass-near">
          <svg class="absolute bottom-0 w-full" viewBox="0 0 1440 350" preserveAspectRatio="none" style="height: 55vh;">
            @for (b of nearBlades; track $index) {
              <path
                [class]="'grass-blade ' + b.swayClass"
                [attr.d]="b.path"
                [attr.fill]="b.color"
                [attr.opacity]="b.opacity"
                [style.animation-delay.s]="b.delay" />
            }
          </svg>
        </div>
      }

      <!-- Seeds / pollen -->
      <div class="absolute inset-0">
        @for (s of seeds(); track $index) {
          <div
            class="absolute rounded-full bg-verde-bio"
            [style.width.px]="s.size"
            [style.height.px]="s.size"
            [style.left.%]="s.left"
            [style.top.%]="s.top"
            [style.opacity]="s.opacity"
            [style.animation]="'seed-float ' + s.duration + 's ease-in-out ' + s.delay + 's infinite'">
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .bg-layer-gradients {
      background:
        radial-gradient(ellipse at 20% 80%, rgba(45, 204, 112, 0.06) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 20%, rgba(44, 62, 80, 0.15) 0%, transparent 50%),
        radial-gradient(ellipse at 50% 90%, rgba(58, 125, 68, 0.03) 0%, transparent 40%),
        radial-gradient(ellipse at 70% 70%, rgba(45, 204, 112, 0.04) 0%, transparent 50%);
    }
    :host-context(html[data-theme="light"]) .bg-layer-gradients {
      background:
        radial-gradient(ellipse at 20% 80%, rgba(45, 204, 112, 0.08) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 20%, rgba(44, 62, 80, 0.06) 0%, transparent 50%),
        radial-gradient(ellipse at 50% 90%, rgba(58, 125, 68, 0.05) 0%, transparent 40%),
        radial-gradient(ellipse at 70% 70%, rgba(45, 204, 112, 0.06) 0%, transparent 50%);
    }

    .bg-layer-grid { opacity: 0.03; }
    :host-context(html[data-theme="light"]) .bg-layer-grid { opacity: 0.06; }

    /* Far grass */
    .grass-far { opacity: 0.13; }
    :host-context(html[data-theme="light"]) .grass-far { opacity: 0.22; }

    /* Near grass — with slow seasonal hue shift */
    .grass-near {
      opacity: 0.15;
      animation: season-cycle 60s ease-in-out infinite;
    }
    :host-context(html[data-theme="light"]) .grass-near { opacity: 0.26; }

    /* Blade sway — transform from base */
    .grass-blade { transform-origin: bottom center; }
    .sway-a { animation: grass-sway 6s ease-in-out infinite; }
    .sway-b { animation: grass-sway-slow 8s ease-in-out infinite; }
    .sway-c { animation: grass-sway 7s ease-in-out infinite reverse; }
  `]
})
export class BackgroundLayersComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  isMobile = signal(false);
  seeds = signal<Seed[]>([]);

  gridLines = Array.from({ length: 25 }, (_, i) => i);
  gridDots: { x: number; y: number }[] = [];

  farBlades: GrassBlade[] = [];
  nearBlades: GrassBlade[] = [];

  private readonly SWAY = ['sway-a', 'sway-b', 'sway-c'];

  constructor() {
    for (let x = 2; x < 24; x += 3) {
      for (let y = 2; y < 15; y += 3) {
        this.gridDots.push({ x: x * 60, y: y * 60 });
      }
    }
    this.generateGrass();
  }

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const mobile = window.matchMedia('(max-width: 768px)').matches;
    this.isMobile.set(mobile);

    const count = mobile ? 6 : 10;
    const items: Seed[] = [];
    for (let i = 0; i < count; i++) {
      items.push({
        size: Math.random() * 2 + 1,
        left: Math.random() * 100,
        top: 55 + Math.random() * 40,
        duration: Math.random() * 20 + 16,
        delay: Math.random() * 14,
        opacity: Math.random() * 0.15 + 0.1
      });
    }
    this.seeds.set(items);
  }

  private generateGrass(): void {
    const rng = makeRng(0.731);

    // Far field: dense, short carpet
    const farCount = 240;
    for (let i = 0; i < farCount; i++) {
      const x = (i / farCount) * 1440 + (rng() - 0.5) * 10;
      const h = 15 + rng() * 50;
      const baseW = 1.2 + rng() * 2.5;
      const curve = (rng() - 0.5) * 8;
      this.farBlades.push({
        path: bladePath(x, 300, h, baseW, curve),
        color: pickColor(rng),
        opacity: 0.55 + rng() * 0.45,
        delay: 0,
        swayClass: ''
      });
    }

    // Near field: denser, moderate height, animated
    const nearCount = 180;
    for (let i = 0; i < nearCount; i++) {
      const x = (i / nearCount) * 1440 + (rng() - 0.5) * 14;
      const h = 30 + rng() * 110;
      const baseW = 2 + rng() * 4;
      const curve = (rng() - 0.5) * 14;
      this.nearBlades.push({
        path: bladePath(x, 350, h, baseW, curve),
        color: pickColor(rng),
        opacity: 0.5 + rng() * 0.5,
        delay: rng() * 5,
        swayClass: this.SWAY[i % 3]
      });
    }
  }
}
