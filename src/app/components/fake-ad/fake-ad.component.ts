import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-fake-ad',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ad-overlay" *ngIf="isVisible" [@fadeIn]>
      <div class="ad-content">
        <button class="close-btn" (click)="closeAd()">×</button>
        <div class="ad-body">
          <div class="ad-header">
            <span class="pulse">💥 CAOS TOTAL Y GRATIS 💥</span>
            <h2>¡DESCUENTO DEL 999% EN CÓDIGO CAÓTICO! 🚨</h2>
            <div class="timer">¡OFERTA EXPIRA EN: {{countdown}} SEGUNDOS! (O CUANDO NOS DÉ LA GANA O CUANDO SE ACABE EL CAFÉ O CUANDO EXPLOTE ALGO)</div>
          </div>
          <div class="ad-image">
            <img src="https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg" alt="Clean Code Book">
            <div class="stamp">¡GRATIS TOTAL! 💥</div>
            <div class="chaos-warning">⚠️ ¡CÓDIGO EXTREMADAMENTE CAÓTICO! PUEDE CAUSAR EXPLOSIONES! ⚠️</div>
          </div>
          <div class="ad-text">
            <h3>¡TU CÓDIGO ES DEMASIADO ABURRIDO Y CARO! 🥱</h3>
            <p>¿Tu código es legible? ¿Tiene sentido? ¿Es mantenible? ¿Pagaste por él? 🤮</p>
            <div class="price-tag">
              <span class="original-price">999.999,99€</span>
              <span class="discount-price">0,00€</span>
              <span class="savings">¡AHORRA TODO! (Y TU SALUD MENTAL) 💸</span>
            </div>
            <div class="social-proof">
              <p>👨‍💻 "Mi código es tan caótico en Angular 15 que Stack Overflow se rindió" - Un Vibe Coder</p>
              <p>🤖 "Hasta los robots tienen pesadillas con mi código" - ChatGPT, 2025</p>
            </div>
            <p class="disclaimer">* No nos hacemos responsables de la salud mental de tus compañeros, ni de la tuya, ni de la de nadie, ni de los daños materiales. Las cucharas no existen. Si ves un pingüino con sombrero, corre. El tiempo es una construcción social. ⏳ Los unicornios son reales si crees lo suficiente.</p>
            <div class="guarantee">
              <span>🛡️ GARANTÍA DE -100% DE SATISFACCIÓN O TE DEVOLVEMOS EL CAOS</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .ad-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.9);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    }

    .ad-content {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      position: relative;
      max-width: 1100px;
      width: 95%;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
      border: 3px solid #ff6b6b;
    }

    .close-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      background: none;
      border: none;
      font-size: 2rem;
      cursor: pointer;
      color: #666;
      padding: 0.5rem;
      line-height: 1;
      transition: all 0.3s;

      &:hover {
        color: #ff0000;
        transform: scale(1.2);
      }
    }

    .ad-header {
      text-align: center;
      margin-bottom: 2rem;

      .pulse {
        background: #ff6b6b;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-weight: bold;
        animation: pulse 2s infinite;
      }

      h2 {
        color: #ff6b6b;
        margin: 1rem 0;
        font-size: 2rem;
        text-transform: uppercase;
      }

      .timer {
        color: #ff0000;
        font-weight: bold;
        font-size: 1.2rem;
        animation: blink 1s infinite;
      }
    }

    .ad-body {
      display: flex;
      gap: 2rem;
      align-items: flex-start;
    }

    .ad-image {
      flex: 0 0 250px;
      position: relative;
      
      img {
        width: 100%;
        height: auto;
        border-radius: 4px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      }

      .stamp {
        position: absolute;
        top: -10px;
        right: -10px;
        background: #ff6b6b;
        color: white;
        padding: 0.5rem;
        border-radius: 4px;
        transform: rotate(15deg);
        font-weight: bold;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      }

      .chaos-warning {
        position: absolute;
        top: -10px;
        left: -10px;
        background: #ff6b6b;
        color: white;
        padding: 0.5rem;
        border-radius: 4px;
        transform: rotate(15deg);
        font-weight: bold;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      }
    }

    .ad-text {
      flex: 1;

      h3 {
        color: #2a3a4d;
        margin-bottom: 1rem;
        font-size: 1.5rem;
      }

      p {
        color: #666;
        margin-bottom: 0.5rem;
        font-size: 1.1rem;
      }
    }

    .benefits {
      background: #f8f9fa;
      padding: 1rem;
      border-radius: 8px;
      margin: 1rem 0;

      .benefit-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
        font-size: 1.1rem;

        .emoji {
          font-size: 1.3rem;
        }
      }
    }

    .price-tag {
      margin: 1.5rem 0;
      display: flex;
      align-items: center;
      gap: 1rem;
      background: #f8f9fa;
      padding: 1rem;
      border-radius: 8px;

      .original-price {
        text-decoration: line-through;
        color: #999;
        font-size: 1.5rem;
      }

      .discount-price {
        color: #4CAF50;
        font-size: 2.5rem;
        font-weight: bold;
      }

      .savings {
        color: #ff6b6b;
        font-weight: bold;
        font-size: 1.2rem;
      }
    }

    .social-proof {
      background: #e9ecef;
      padding: 1rem;
      border-radius: 8px;
      margin: 1rem 0;

      p {
        margin: 0.5rem 0;
        font-style: italic;
      }
    }

    .disclaimer {
      font-size: 0.8rem;
      color: #999;
      font-style: italic;
      text-align: center;
      margin: 1rem 0;
    }

    .guarantee {
      text-align: center;
      background: #4CAF50;
      color: white;
      padding: 1rem;
      border-radius: 8px;
      font-weight: bold;
      margin-top: 1rem;
    }

    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }

    @keyframes blink {
      0% { opacity: 1; }
      50% { opacity: 0.5; }
      100% { opacity: 1; }
    }

    .bottom-left-chaos {
      position: absolute;
      bottom: 20px;
      left: 20px;
      color: #ff00ff; /* A chaotic color */
      font-size: 1rem;
      font-weight: bold;
      animation: blink 1s infinite;
      z-index: 10000;
    }

    .random-fact {
      text-align: center;
      margin-top: 1.5rem;
      font-style: italic;
      color: #8a2be2; /* BlueViolet */
      font-size: 0.9rem;
    }

    .random-floating-text {
      position: absolute;
      top: 10%;
      right: 10%;
      transform: translateY(-50%) rotate(12deg);
      color: rgba(255, 0, 0, 0.5);
      font-size: 0.8rem;
      font-weight: bold;
      pointer-events: none;
    }

    .another-random-text {
      position: absolute;
      bottom: 10%;
      right: 10%;
      color: #00ffff;
      font-size: 1.2rem;
      transform: rotate(-8deg);
    }

    .yet-another-random-text {
       position: absolute;
       bottom: 20%;
       left: 10%;
       font-size: 1.5rem;
       color: orange;
       transform: rotate(5deg);
       border: 2px dashed orange;
       padding: 5px;
     }

    .random-bottom-left-element {
      position: absolute;
      bottom: 15%;
      left: 5%;
      color: #39ff14;
      font-size: 1.1rem;
      font-weight: bold;
      transform: rotate(-15deg);
      text-shadow: 1px 1px 5px #39ff14;
    }

    .even-more-chaos {
      position: absolute;
      bottom: 25%;
      left: 8%;
      color: #ffff00;
      font-size: 0.9rem;
      transform: rotate(20deg);
      border: 1px solid #ffff00;
      padding: 3px;
    }

    .bottom-left-random-filler {
      position: absolute;
      bottom: 30%;
      left: 12%;
      color: #ff1493;
      font-size: 1.3rem;
      font-weight: bold;
      transform: rotate(-30deg) scale(1.1);
      text-shadow: 2px 2px #000;
      opacity: 0.8;
    }

    .hidden-chaos {
      /* It's hidden, but it's there, being chaotic in spirit */
      opacity: 0;
    }

    .random-element {
      position: absolute;
      top: 5%;
      left: 5%;
      font-size: 2rem;
      color: yellow;
      text-shadow: 2px 2px #ff00ff;
      animation: pulse 1.5s infinite alternate;
    }

  `],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class FakeAdComponent {
  isVisible = true;
  countdown = 30;

  constructor() {
    this.startCountdown();
  }

  startCountdown() {
    setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      }
    }, 1000);
  }

  closeAd() {
    this.isVisible = false;
  }
} 