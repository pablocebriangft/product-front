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
            <span class="pulse">🔥 HOT DEAL 🔥</span>
            <h2>¡DESCUENTO DEL 100% EN CLEAN CODE! 🚨</h2>
            <div class="timer">¡OFERTA EXPIRA EN: {{countdown}} SEGUNDOS!</div>
          </div>
          <div class="ad-image">
            <img src="https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg" alt="Clean Code Book">
            <div class="stamp">¡LO MÁS VENDIDO! 📚</div>
          </div>
          <div class="ad-text">
            <h3>¡DEJA DE ESCRIBIR CÓDIGO COMO UN MONO! 🐒</h3>
            <p>¿Tu código parece una jungla? 🌴 ¿Tus variables se llaman 'a', 'b', 'c'? 🤦‍♂️</p>
            <p>¡Clean Code es la solución! 🧹✨</p>
            <div class="benefits">
              <div class="benefit-item">
                <span class="emoji">✅</span>
                <span>Nombres de variables que tu abuela entendería</span>
              </div>
              <div class="benefit-item">
                <span class="emoji">✅</span>
                <span>Funciones que hacen UNA cosa (no 50)</span>
              </div>
              <div class="benefit-item">
                <span class="emoji">✅</span>
                <span>0% de código comentado (porque se entiende solo)</span>
              </div>
              <div class="benefit-item">
                <span class="emoji">✅</span>
                <span>Tus compañeros ya no te odiarán</span>
              </div>
            </div>
            <div class="price-tag">
              <span class="original-price">$99.99</span>
              <span class="discount-price">$0.00</span>
              <span class="savings">¡AHORRA $99.99! 💰</span>
            </div>
            <div class="social-proof">
              <p>👨‍💻 "Antes mi código era un desastre, ahora es una obra de arte" - Juan, 27</p>
              <p>👩‍💻 "Por fin puedo entender mi propio código" - María, 31</p>
            </div>
            <p class="disclaimer">* Solo necesitas leer el libro de Robert C. Martin (y aplicarlo, claro)</p>
            <div class="guarantee">
              <span>🛡️ GARANTÍA DE 100% DE SATISFACCIÓN O TU DINERO DEVUELTO</span>
            </div>
          </div>
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