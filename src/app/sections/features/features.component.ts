import { Component, ChangeDetectionStrategy, signal, computed, inject, OnInit, OnDestroy } from '@angular/core';
import { PhoneMockupComponent } from '../../shared/components/phone-mockup.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [PhoneMockupComponent, RevealOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent implements OnInit, OnDestroy {
  readonly i18n = inject(I18nService);
  activeScreen = signal<'location' | 'scanner' | 'voice'>('location');

  readonly features = computed(() => {
    const screens: ('location' | 'scanner' | 'voice')[] = ['location', 'scanner', 'voice'];
    return this.i18n.t().features.items.map((item, i) => ({
      number: item.number,
      title: item.title,
      description: item.description,
      screen: screens[i]
    }));
  });

  private intervalId: ReturnType<typeof setInterval> | null = null;
  private screenKeys: ('location' | 'scanner' | 'voice')[] = ['location', 'scanner', 'voice'];
  private currentIndex = 0;
  private observer!: IntersectionObserver;

  ngOnInit(): void {
    // Will be set up after view init via IntersectionObserver
  }

  ngOnDestroy(): void {
    this.stopCycling();
    this.observer?.disconnect();
  }

  setActive(screen: 'location' | 'scanner' | 'voice'): void {
    this.activeScreen.set(screen);
    this.currentIndex = this.screenKeys.indexOf(screen);
    // Reset cycling
    this.stopCycling();
    this.startCycling();
  }

  startCycling(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.screenKeys.length;
      this.activeScreen.set(this.screenKeys[this.currentIndex]);
    }, 3500);
  }

  stopCycling(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  onSectionVisible(): void {
    this.startCycling();
  }
}
