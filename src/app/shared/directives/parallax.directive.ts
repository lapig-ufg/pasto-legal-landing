import { Directive, ElementRef, OnInit, OnDestroy, input } from '@angular/core';

@Directive({
  selector: '[appParallax]',
  standalone: true
})
export class ParallaxDirective implements OnInit, OnDestroy {
  speed = input(0.15);

  private isMobile = false;
  private onScroll = () => this.update();

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (this.isMobile) return;

    this.el.nativeElement.style.willChange = 'transform';
    window.addEventListener('scroll', this.onScroll, { passive: true });
  }

  private update(): void {
    const y = window.scrollY;
    this.el.nativeElement.style.transform =
      `translate3d(0, ${y * this.speed()}px, 0)`;
  }

  ngOnDestroy(): void {
    if (!this.isMobile) {
      window.removeEventListener('scroll', this.onScroll);
    }
  }
}
