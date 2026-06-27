import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-promo-popup',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    @if (showPopup()) {
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="promo-title">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-dark/80 backdrop-blur-sm" (click)="closePopup()"></div>
        
        <!-- Modal -->
        <div class="relative bg-white rounded-none shadow-premium-lg max-w-md w-full p-8 transform animate-fade-in">
          <!-- Close Button -->
          <button 
            (click)="closePopup()" 
            class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-dark/50 hover:text-primary transition-colors focus-ring"
            aria-label="Close promotional offer"
          >
            <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          <!-- Content -->
          <div class="text-center">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg viewBox="0 0 24 24" class="w-8 h-8 text-primary" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            
            <h2 id="promo-title" class="font-serif text-2xl text-dark mb-2">Welcome! Special Offer</h2>
            <p class="text-dark/70 text-sm mb-6">First-time visitor? Get 20% off on your first appointment!</p>
            
            <div class="bg-section p-4 mb-6">
              <p class="text-dark font-sans text-sm font-medium mb-1">Use Code: <span class="text-primary">WELCOME20</span></p>
              <p class="text-dark/50 text-xs">Valid till {{ expiryDate }}</p>
            </div>

            <a routerLink="/appointment" (click)="closePopup()" class="btn-primary w-full mb-3">
              Book Now & Save
            </a>
            
            <button (click)="closePopup()" class="text-dark/50 text-xs font-sans uppercase tracking-wider hover:text-primary transition-colors focus-ring">
              No thanks, continue to site
            </button>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    @keyframes fadeInScale {
      from { opacity: 0; transform: scale(0.95) translateY(20px); }
      to { opacity: 1; transform: scale(1) translateY(0); }
    }
    .animate-fade-in {
      animation: fadeInScale 0.3s ease-out;
    }
  `],
})
export class PromoPopupComponent implements OnInit {
  private readonly STORAGE_KEY = 'promoPopupSeen';
  
  showPopup = signal(false);
  expiryDate = 'July 31, 2026';

  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      const seen = localStorage.getItem(this.STORAGE_KEY);
      if (!seen) {
        setTimeout(() => this.showPopup.set(true), 2000);
      }
    } else {
      setTimeout(() => this.showPopup.set(true), 2000);
    }
  }

  closePopup(): void {
    this.showPopup.set(false);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.STORAGE_KEY, 'true');
    }
  }
}