import { Component, ChangeDetectionStrategy, input, inject } from '@angular/core';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-phone-mockup',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="phone-mockup" [class]="size() === 'large' ? 'w-[300px]' : 'w-[260px]'">
      <div class="phone-frame">
        <div class="phone-notch"></div>
        <div class="phone-screen" [class]="size() === 'large' ? 'min-h-[520px]' : 'min-h-[460px]'">
          @switch (screen()) {
            @case ('chat') {
              <div class="whatsapp-header">
                <div class="wa-avatar">PL</div>
                <div>
                  <div class="wa-name">Pasto Legal IA</div>
                  <div class="wa-status">online</div>
                </div>
              </div>
              <div class="whatsapp-chat">
                <div class="msg sent" style="animation-delay: 0.4s">
                  <span class="whitespace-pre-wrap">&#x1F4CD; {{ i18n.t().features.phoneMockup.chat.msg1 }}</span>
                  <div class="msg-time">10:32</div>
                </div>
                <div class="msg received" style="animation-delay: 1.0s">
                  <span class="whitespace-pre-wrap">&#x2705; {{ i18n.t().features.phoneMockup.chat.msg2 }}</span>
                  <div class="msg-time">10:32</div>
                </div>
                <div class="msg received" style="animation-delay: 1.6s">
                  <span class="whitespace-pre-wrap">&#x1F4CA; {{ i18n.t().features.phoneMockup.chat.msg3 }}</span>
                  <div class="biomass-chart">
                    <div class="chart-bar" style="left:8%;height:35%"></div>
                    <div class="chart-bar" style="left:22%;height:50%"></div>
                    <div class="chart-bar" style="left:36%;height:45%"></div>
                    <div class="chart-bar" style="left:50%;height:70%"></div>
                    <div class="chart-bar" style="left:64%;height:65%"></div>
                    <div class="chart-bar" style="left:78%;height:85%"></div>
                  </div>
                  <div class="msg-time">10:33</div>
                </div>
                <div class="msg received" style="animation-delay: 2.2s">
                  <span class="whitespace-pre-wrap">&#x1F7E2; {{ i18n.t().features.phoneMockup.chat.msg4 }}</span>
                  <div class="msg-time">10:33</div>
                </div>
                <div class="msg sent" style="animation-delay: 2.8s">
                  <span class="whitespace-pre-wrap">&#x1F3A4; {{ i18n.t().features.phoneMockup.chat.msg5 }}</span>
                  <div class="msg-time">10:34</div>
                </div>
              </div>
            }
            @case ('location') {
              <div class="location-screen">
                <div class="loc-pin">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div class="loc-bubble">&#x1F4CD; {{ i18n.t().features.phoneMockup.location.bubble }}</div>
              </div>
            }
            @case ('scanner') {
              <div class="scanner-screen">
                <div class="scanner-frame">
                  <div class="scanner-line"></div>
                </div>
                <div class="scanner-label">{{ i18n.t().features.phoneMockup.scanner.label }}</div>
              </div>
            }
            @case ('voice') {
              <div class="voice-screen">
                <div class="voice-waves">
                  @for (i of voiceBars; track i) {
                    <div class="voice-bar" [style.animation-delay]="i * 0.08 + 's'"></div>
                  }
                </div>
                <div class="voice-label">{{ i18n.t().features.phoneMockup.voice.label }}</div>
                <div class="voice-text">{{ i18n.t().features.phoneMockup.voice.text }}</div>
              </div>
            }
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .phone-mockup {
      position: relative;
    }
    .phone-frame {
      background: #0a0a0a;
      border-radius: 36px;
      padding: 12px;
      box-shadow:
        0 25px 80px rgba(0,0,0,0.5),
        0 0 0 1px rgba(255,255,255,0.1),
        inset 0 0 0 1px rgba(255,255,255,0.05);
      position: relative;
    }
    .phone-notch {
      width: 120px;
      height: 28px;
      background: #0a0a0a;
      border-radius: 0 0 16px 16px;
      position: absolute;
      top: 12px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 5;
    }
    .phone-screen {
      background: linear-gradient(180deg, #075E54 0%, #054d40 100%);
      border-radius: 28px;
      overflow: hidden;
      position: relative;
    }

    /* WhatsApp Header */
    .whatsapp-header {
      background: #075E54;
      padding: 2.5rem 1rem 0.8rem;
      display: flex;
      align-items: center;
      gap: 0.7rem;
    }
    .wa-avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: var(--color-verde-bio);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.7rem;
      font-weight: 800;
      color: #fff;
    }
    .wa-name { font-size: 0.85rem; font-weight: 600; color: #fff; }
    .wa-status { font-size: 0.65rem; color: rgba(255,255,255,0.6); }

    /* WhatsApp Chat */
    .whatsapp-chat {
      background: #042b24;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      min-height: 380px;
    }
    .msg {
      max-width: 85%;
      padding: 0.6rem 0.8rem;
      border-radius: 8px;
      font-size: 0.75rem;
      line-height: 1.5;
      position: relative;
      opacity: 0;
    }
    .msg.sent {
      background: #005C4B;
      color: #e9edef;
      align-self: flex-end;
      border-radius: 8px 0 8px 8px;
      animation: msg-appear 0.5s ease forwards;
    }
    .msg.received {
      background: #1f2c33;
      color: #e9edef;
      align-self: flex-start;
      border-radius: 0 8px 8px 8px;
      animation: msg-appear 0.5s ease forwards;
    }
    .msg-time {
      font-size: 0.55rem;
      color: rgba(255,255,255,0.4);
      text-align: right;
      margin-top: 2px;
    }

    /* Biomass Chart */
    .biomass-chart {
      width: 100%;
      height: 60px;
      margin: 0.4rem 0;
      background: rgba(45, 204, 112, 0.1);
      border-radius: 6px;
      padding: 8px;
      position: relative;
      overflow: hidden;
    }
    .chart-bar {
      position: absolute;
      bottom: 8px;
      width: 12%;
      border-radius: 3px 3px 0 0;
      background: linear-gradient(to top, var(--color-verde-bio), rgba(45, 204, 112, 0.3));
      animation: grow-bar 1s ease forwards;
      transform-origin: bottom;
    }

    /* Location Screen */
    .location-screen {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
      background: var(--color-azul-deep);
    }
    .loc-pin {
      width: 60px;
      height: 60px;
      background: var(--color-verde-bio);
      border-radius: 50% 50% 50% 4px;
      transform: rotate(-45deg);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 10px 40px var(--color-verde-glow);
      animation: pin-bounce 2s ease-in-out infinite;
    }
    .loc-pin svg {
      transform: rotate(45deg);
      width: 28px;
      height: 28px;
      color: var(--color-azul-deep);
    }
    .loc-bubble {
      position: absolute;
      bottom: 30%;
      background: #005C4B;
      padding: 0.6rem 1rem;
      border-radius: 12px 12px 12px 0;
      font-size: 0.7rem;
      color: #e9edef;
      animation: bubble-up 2s ease-in-out infinite alternate;
    }

    /* Scanner Screen */
    .scanner-screen {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
      background: var(--color-azul-deep);
    }
    .scanner-frame {
      width: 180px;
      height: 130px;
      border: 2px solid var(--color-verde-bio);
      border-radius: 8px;
      position: relative;
      overflow: hidden;
      background: linear-gradient(135deg, rgba(45, 204, 112, 0.05), rgba(45, 204, 112, 0.02));
    }
    .scanner-line {
      position: absolute;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, var(--color-verde-bio), transparent);
      box-shadow: 0 0 15px var(--color-verde-glow);
      animation: scan-line 2.5s ease-in-out infinite;
    }
    .scanner-label {
      margin-top: 1rem;
      font-family: var(--font-family-mono);
      font-size: 0.65rem;
      color: var(--color-verde-bio);
      letter-spacing: 1px;
    }

    /* Voice Screen */
    .voice-screen {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      padding: 1.5rem;
      background: var(--color-azul-deep);
    }
    .voice-waves {
      display: flex;
      align-items: center;
      gap: 4px;
      height: 60px;
    }
    .voice-bar {
      width: 4px;
      background: var(--color-verde-bio);
      border-radius: 4px;
      animation: voice-wave 1s ease-in-out infinite;
    }
    .voice-label {
      font-family: var(--font-family-mono);
      font-size: 0.65rem;
      color: rgba(249, 251, 252, 0.5);
      letter-spacing: 1px;
    }
    .voice-text {
      font-size: 0.75rem;
      color: var(--color-verde-bio);
      text-align: center;
      font-family: var(--font-family-mono);
      animation: type-text 2s steps(30) infinite;
      overflow: hidden;
      white-space: nowrap;
      border-right: 2px solid var(--color-verde-bio);
      max-width: 200px;
    }
  `]
})
export class PhoneMockupComponent {
  readonly i18n = inject(I18nService);
  screen = input<'chat' | 'location' | 'scanner' | 'voice'>('chat');
  size = input<'large' | 'small'>('large');

  voiceBars = Array.from({ length: 24 }, (_, i) => i);
}
