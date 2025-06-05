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
          <h2>🚀 ¡LIMITED TIME OFFER! 🚀</h2>
          <div class="ad-image">
            <img src="https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg" alt="Clean Code Book">
          </div>
          <div class="ad-text">
            <h3>¡MEJORA TU CÓDIGO AHORA!</h3>
            <p>¿Cansado de código espagueti? ¿Tu código parece una jungla?</p>
            <p>¡Clean Code es la solución! 🧹✨</p>
            <ul>
              <li>✅ Nombres de variables que tienen sentido</li>
              <li>✅ Funciones que hacen UNA cosa</li>
              <li>✅ Código que tu abuela podría entender</li>
              <li>✅ 0% de código comentado</li>
            </ul>
            <div class="price-tag">
              <span class="original-price">$99.99</span>
              <span class="discount-price">$0.00</span>
            </div>
            <p class="disclaimer">* Solo necesitas leer el libro de Robert C. Martin</p>
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
      background: rgba(0, 0, 0, 0.8);
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
      max-width: 800px;
      width: 90%;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
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
      transition: color 0.3s;

      &:hover {
        color: #ff0000;
      }
    }

    .ad-body {
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    .ad-image {
      flex: 0 0 200px;
      
      img {
        width: 100%;
        height: auto;
        border-radius: 4px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      }
    }

    .ad-text {
      flex: 1;

      h2 {
        color: #ff6b6b;
        margin-bottom: 1rem;
        font-size: 1.8rem;
      }

      h3 {
        color: #2a3a4d;
        margin-bottom: 1rem;
      }

      p {
        color: #666;
        margin-bottom: 0.5rem;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 1rem 0;

        li {
          margin-bottom: 0.5rem;
          color: #666;
        }
      }
    }

    .price-tag {
      margin: 1.5rem 0;
      display: flex;
      align-items: center;
      gap: 1rem;

      .original-price {
        text-decoration: line-through;
        color: #999;
        font-size: 1.2rem;
      }

      .discount-price {
        color: #4CAF50;
        font-size: 2rem;
        font-weight: bold;
      }
    }

    .disclaimer {
      font-size: 0.8rem;
      color: #999;
      font-style: italic;
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

  closeAd() {
    this.isVisible = false;
  }
} 