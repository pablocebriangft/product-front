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
            <p>¡Es hora de hacerlo CAÓTICO Y GRATIS! 🌪️✨</p>
            <div class="benefits">
              <div class="benefit-item">
                <span class="emoji">💥</span>
                <span>Variables que explotan en tiempo de ejecución (literalmente)</span>
              </div>
              <div class="benefit-item">
                <span class="emoji">💥</span>
                <span>Funciones que hacen TODO (y cosas que ni sabías que existían)</span>
              </div>
              <div class="benefit-item">
                <span class="emoji">💥</span>
                <span>200% de código comentado (porque ni el comentario se entiende)</span>
              </div>
              <div class="benefit-item">
                <span class="emoji">💥</span>
                <span>Tus compañeros te odiarán (y te enviarán memes de odio)</span>
              </div>
            </div>
            <div class="price-tag">
              <span class="original-price">999.999,99€</span>
              <span class="discount-price">0,00€</span>
              <span class="savings">¡AHORRA TODO! (Y TU SANIDAD MENTAL) 💸</span>
            </div>
            <div class="social-proof">
              <p>👨‍💻 "Mi código es tan caótico que Stack Overflow se rindió" - Juan, 27</p>
              <p>👩‍💻 "Por fin puedo justificar mi código con 'es arte abstracto'" - María, 31</p>
              <p>🤖 "Hasta los robots tienen pesadillas con mi código" - ChatGPT, 2024</p>
              <p>💥 "Mi código hizo que el servidor explotara (literalmente)" - DevOps, 2024</p>
            </div>
            <p class="disclaimer">* No nos hacemos responsables de la salud mental de tus compañeros, ni de la tuya, ni de la de nadie, ni de los daños materiales</p>
            <div class="guarantee">
              <span>🛡️ GARANTÍA DE -100% DE SATISFACCIÓN O TE DEVOLVEMOS EL CAOS</span>
            </div>
          </div>
        </div>
        <div class="bottom-left-chaos">✨ EL CAOS TE ESPERA... ¡O NO! ✨</div>
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