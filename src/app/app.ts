import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PreloaderComponent } from './shared/components/preloader.component';
import { NavbarComponent } from './shared/components/navbar.component';
import { BackgroundLayersComponent } from './shared/components/background-layers.component';
import { CookieConsentComponent } from './shared/components/cookie-consent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PreloaderComponent,
    NavbarComponent,
    BackgroundLayersComponent,
    CookieConsentComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html'
})
export class AppComponent {}
