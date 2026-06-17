import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
}

@Component({
  selector: 'app-pricing-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div
      class="relative"
      [class.transform]="tier().highlighted"
      [class.scale-105]="tier().highlighted"
      [class.-translate-y-4]="tier().highlighted"
      data-aos="fade-up"
    >
      @if (tier().highlighted) {
        <div class="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <span class="bg-primary text-white text-xs font-sans uppercase tracking-[0.2em] px-4 py-1">Popular</span>
        </div>
      }
      <div
        class="card-premium p-8 text-center relative"
        [class.border-2]="tier().highlighted"
        [class.border-primary]="tier().highlighted"
      >
        <h3 class="font-serif text-xl text-dark mb-2">{{ tier().name }}</h3>
        <p class="text-dark/60 text-sm mb-4">{{ tier().description }}</p>
        <div class="mb-6">
          <span class="font-serif text-4xl text-primary font-bold">{{ tier().price }}</span>
        </div>
        <ul class="space-y-3 mb-8">
          @for (feature of tier().features; track feature) {
            <li class="text-sm text-dark/70 flex items-center gap-2">
              <svg class="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              {{ feature }}
            </li>
          }
        </ul>
        <a
          routerLink="/appointment"
          class="btn-primary w-full text-center text-xs"
        >
          Book Now
        </a>
      </div>
    </div>
  `,
  styles: [`
    .card-premium {
      background: white;
      transition: all 0.5s ease;
      height: 100%;
    }
    .card-premium:hover {
      box-shadow: 0 20px 80px rgba(0, 0, 0, 0.12);
      transform: translateY(-4px);
    }
    .btn-primary {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem 1.5rem;
      background: #C8A96A;
      color: white;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      transition: all 0.3s ease;
    }
    .btn-primary:hover {
      background: #A8833E;
      box-shadow: 0 4px 20px rgba(200, 169, 106, 0.3);
    }
  `]
})
export class PricingCardComponent {
  tier = input.required<PricingTier>();
}