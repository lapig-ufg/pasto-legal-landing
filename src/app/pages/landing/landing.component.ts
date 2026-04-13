import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeroComponent } from '../../sections/hero/hero.component';
// import { StatsBarComponent } from '../../sections/stats-bar/stats-bar.component';
import { ValueComponent } from '../../sections/value/value.component';
import { FeaturesComponent } from '../../sections/features/features.component';
import { InfrastructureComponent } from '../../sections/infrastructure/infrastructure.component';
import { PartnersComponent } from '../../sections/partners/partners.component';
import { FooterComponent } from '../../sections/footer/footer.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HeroComponent,
    // StatsBarComponent,
    ValueComponent,
    FeaturesComponent,
    InfrastructureComponent,
    PartnersComponent,
    FooterComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-hero />

    @defer (on viewport) {
      <!-- <app-stats-bar /> -->
    } @placeholder {
      <div style="min-height: 120px;"></div>
    }

    <div id="valores">
      @defer (on viewport) {
        <app-value />
      } @placeholder {
        <div style="min-height: 400px;"></div>
      }
    </div>

    <div id="funcionalidades">
      @defer (on viewport) {
        <app-features />
      } @placeholder {
        <div style="min-height: 400px;"></div>
      }
    </div>

    <div id="infraestrutura">
      @defer (on viewport) {
        <app-infrastructure />
      } @placeholder {
        <div style="min-height: 400px;"></div>
      }
    </div>

@defer (on viewport) {
      <app-partners />
    } @placeholder {
      <div style="min-height: 100px;"></div>
    }

    @defer (on viewport) {
      <app-footer />
    } @placeholder {
      <div style="min-height: 200px;"></div>
    }
  `
})
export class LandingComponent { }
