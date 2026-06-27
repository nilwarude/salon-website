import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  image?: string;
  imageWebp?: string;
  link?: string;
  category?: string;
}

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div
      class="group card-premium overflow-hidden bg-white relative"
      data-aos="fade-up"
    >
      <!-- Image Section -->
      <div class="relative aspect-[4/3] overflow-hidden">
        <picture>
          <source [srcset]="service().imageWebp || service().image || '/assets/images/gallery/gallery-1.svg'" type="image/webp">
          <img
            [src]="service().image || '/assets/images/gallery/gallery-1.svg'"
            [alt]="service().title + ' - ' + service().category + ' service image'"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        </picture>
        <!-- Overlay on hover -->
        <div class="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <!-- Category Badge -->
        <div class="absolute top-4 left-4">
          <span class="bg-primary text-white text-xs font-sans uppercase tracking-[0.1em] px-3 py-1">
            {{ service().category || 'Service' }}
          </span>
        </div>

        <!-- Hover Actions -->
        <div class="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          <a 
            [routerLink]="service().link || '/services'" 
            class="flex-1 bg-white text-dark text-center font-sans text-xs uppercase tracking-[0.15em] py-2.5 hover:bg-primary hover:text-white transition-colors duration-300 focus-ring"
            [attr.aria-label]="'Learn more about ' + service().title">
            Learn More
          </a>
          <a 
            routerLink="/appointment" 
            class="flex-1 bg-primary text-white text-center font-sans text-xs uppercase tracking-[0.15em] py-2.5 hover:bg-primary-600 transition-colors duration-300 focus-ring"
            [attr.aria-label]="'Book appointment for ' + service().title">
            Book Now
          </a>
        </div>
      </div>

      <!-- Content Section -->
      <div class="p-6">
        <!-- Icon + Title Row -->
        <div class="flex items-start gap-4 mb-4">
          <div class="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors duration-500">
            <span class="text-xl">{{ service().icon }}</span>
          </div>
          <div class="flex-1 min-w-0">
            <h3 class="font-serif text-lg text-dark group-hover:text-primary transition-colors duration-300 truncate">
              {{ service().title }}
            </h3>
            <!-- Gold accent line -->
            <div class="w-10 h-0.5 bg-primary mt-2 transition-all duration-500 group-hover:w-16"></div>
          </div>
        </div>

        <!-- Description -->
        <p class="text-dark/60 text-sm leading-relaxed mb-5 line-clamp-2">
          {{ service().description }}
        </p>

        <!-- Meta Info -->
        <div class="flex items-center justify-between pt-4 border-t border-gray-100">
          <div class="flex items-center gap-2 text-sm text-dark/50">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>{{ service().duration }}</span>
          </div>
          <div class="text-right">
            <span class="text-xs text-dark/40 font-sans">Starting at</span>
            <p class="text-primary font-serif text-lg font-bold">{{ service().price }}</p>
          </div>
        </div>
      </div>

      <!-- Gold Border Bottom -->
      <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      height: 100%;
    }

    .card-premium {
      transition: all 0.5s ease;
      height: 100%;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.06);
    }

    .card-premium:hover {
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
      transform: translateY(-6px);
    }

    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `]
})
export class ServiceCardComponent {
  service = input.required<ServiceItem>();
}