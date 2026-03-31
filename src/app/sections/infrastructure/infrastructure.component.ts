import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-infrastructure',
  standalone: true,
  imports: [RevealOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.css']
})
export class InfrastructureComponent {
  readonly i18n = inject(I18nService);
  readonly agents = computed(() => this.i18n.t().infra.agents);
  readonly motors = computed(() => this.i18n.t().infra.motors);
}
