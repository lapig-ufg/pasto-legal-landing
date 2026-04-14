import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PhoneMockupComponent } from '../../shared/components/phone-mockup.component';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [PhoneMockupComponent, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  readonly i18n = inject(I18nService);
}
