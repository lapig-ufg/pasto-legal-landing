import { Component, ChangeDetectionStrategy, signal, OnInit } from '@angular/core';
import { LogoComponent } from './logo.component';

@Component({
  selector: 'app-preloader',
  standalone: true,
  imports: [LogoComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (!hidden()) {
      <div
        class="fixed inset-0 z-[9999] bg-azul-deep flex flex-col items-center justify-center gap-4 transition-opacity duration-800 ease-out"
        [class.opacity-0]="fading()"
        [class.pointer-events-none]="fading()">
        <div class="animate-[preloader-pulse_1.2s_ease-in-out_infinite] text-verde-bio">
          <app-logo [size]="96" />
        </div>
        <div class="font-heading font-extrabold text-[2rem] text-verde-bio animate-[preloader-pulse_1.2s_ease-in-out_infinite]">
          Pasto<span class="text-branco-nuvem font-light">Legal</span>
        </div>
      </div>
    }
  `
})
export class PreloaderComponent implements OnInit {
  hidden = signal(false);
  fading = signal(false);

  ngOnInit(): void {
    setTimeout(() => this.fading.set(true), 1200);
    setTimeout(() => this.hidden.set(true), 2000);
  }
}
