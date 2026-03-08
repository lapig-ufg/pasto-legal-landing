import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { IconComponent, type IconName } from '../../shared/components/icon.component';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-value',
  standalone: true,
  imports: [RevealOnScrollDirective, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './value.component.html',
  styleUrl: './value.component.css'
})
export class ValueComponent {
  readonly i18n = inject(I18nService);

  readonly cards = computed(() => {
    const v = this.i18n.t().value;
    const icons: IconName[] = ['satellite', 'dna', 'leaf', 'whatsapp'];
    return v.cards.map((c, i) => ({
      icon: icons[i],
      title: c.title,
      desc: c.desc,
      reveal: c.reveal
    }));
  });
}
