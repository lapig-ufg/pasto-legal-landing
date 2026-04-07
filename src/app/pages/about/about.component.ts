import { Component, ChangeDetectionStrategy, OnInit, AfterViewInit, OnDestroy, PLATFORM_ID, inject, ViewChild, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../sections/footer/footer.component';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, FooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit, OnDestroy {
  readonly i18n = inject(I18nService);
  private platformId = inject(PLATFORM_ID);

  @ViewChild('carousel') carouselRef!: ElementRef<HTMLDivElement>;
  private scrollTimer: any;

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

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoScroll();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoScroll();
  }

  startAutoScroll(): void {
    if (this.scrollTimer || !isPlatformBrowser(this.platformId)) return;
    
    this.scrollTimer = setInterval(() => {
      const el = this.carouselRef?.nativeElement;
      if (!el) return;

      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 5) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        const cardWidth = el.querySelector('.flow-card')?.clientWidth || 300;
        el.scrollBy({ left: cardWidth + 16, behavior: 'smooth' });
      }
    }, 4000);
  }

  stopAutoScroll(): void {
    if (this.scrollTimer) {
      clearInterval(this.scrollTimer);
      this.scrollTimer = null;
    }
  }

  scrollNext(): void {
    const el = this.carouselRef?.nativeElement;
    if (!el) return;
    const cardWidth = el.querySelector('.flow-card')?.clientWidth || 300;
    el.scrollBy({ left: cardWidth + 16, behavior: 'smooth' });
    this.resetTimer();
  }

  scrollPrev(): void {
    const el = this.carouselRef?.nativeElement;
    if (!el) return;
    const cardWidth = el.querySelector('.flow-card')?.clientWidth || 300;
    el.scrollBy({ left: -(cardWidth + 16), behavior: 'smooth' });
    this.resetTimer();
  }

  private resetTimer(): void {
    this.stopAutoScroll();
    this.startAutoScroll();
  }
}
