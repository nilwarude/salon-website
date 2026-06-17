import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  duration: string;
  price: string;
}

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div
      class="group card-premium p-8 text-center relative overflow-hidden"
      data-aos="fade-up"
    >
      <!-- Hover Overlay -->
      <div class="absolute inset-0 bg-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

      <!-- Icon -->
      <div class="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-section rounded-full group-hover:bg-primary/20 transition-colors duration-500">
        <span class="text-3xl">{{ service().icon }}</span>
      </div>

      <!-- Title -->
      <h3 class="font-serif text-xl mb-3 group-hover:text-white transition-colors duration-500">
        {{ service().title }}
      </h3>

      <!-- Divider -->
      <div class="w-12 h-0.5 bg-primary mx-auto mb-4 group-hover:w-20 transition-all duration-500"></div>

      <!-- Description -->
      <p class="text-dark/60 text-sm leading-relaxed mb-6 group-hover:text-white/70 transition-colors duration-500">
        {{ service().description }}
      </p>

      <!-- Meta -->
      <div class="flex items-center justify-center gap-6 text-sm text-dark/50 group-hover:text-white/60 transition-colors duration-500">
        <span class="flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          {{ service().duration }}
        </span>
        <span class="text-primary font-semibold font-sans">{{ service().price }}</span>
      </div>

      <!-- Learn More -->
      <a
        routerLink="/services"
        class="inline-flex items-center gap-2 mt-6 text-primary text-sm font-sans uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0"
      >
        Learn More
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      height: 100%;
    }

    .card-premium {
      background: white;
      transition: all 0.5s ease;
      height: 100%;
    }

    .card-premium:hover {
      background: #1A1A1A;
      box-shadow: 0 20px 80px rgba(0, 0, 0, 0.12);
      transform: translateY(-4px);
    }
  `]
})
export class ServiceCardComponent {
  service = input.required<ServiceItem>();
}