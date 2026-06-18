import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface HeroSlide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img
          [src]="slide().image"
          [alt]="slide().title"
          class="w-full h-full object-cover"
          loading="eager"
        />
        <!-- Overlay -->
        <div class="absolute inset-0 bg-hero-gradient"></div>
      </div>

      <!-- Decorative Gold Line -->
      <div class="absolute top-0 left-0 right-0 h-1 bg-gold-gradient bg-[length:200%_200%] animate-gold-shimmer z-10"></div>

      <!-- Content -->
      <div class="relative z-10 h-full flex items-center">
        <div class="container-custom w-full">
          <div class="max-w-3xl">
            <!-- Subtitle -->
            <p
              class="font-sans text-sm md:text-base text-primary uppercase tracking-[0.25em] mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {{ slide().subtitle }}
            </p>

            <!-- Title -->
            <h1
              class="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-display text-white font-bold leading-tight mb-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {{ slide().title }}
            </h1>

            <!-- Gold Divider -->
            <div
              class="w-20 h-0.5 bg-primary mb-6"
              data-aos="fade-up"
              data-aos-delay="500"
            ></div>

            <!-- Description -->
            <p
              class="text-white/80 text-base md:text-lg max-w-xl leading-relaxed mb-8"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              {{ slide().description }}
            </p>

            <!-- CTA Buttons -->
            <div
              class="flex flex-col sm:flex-row gap-4"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <a
                [routerLink]="slide().ctaLink"
                class="btn-primary text-sm px-10 py-4"
              >
                {{ slide().ctaText }}
              </a>
              <a
                routerLink="/gallery"
                class="btn-secondary border-white text-white hover:bg-white hover:text-dark text-sm px-10 py-4"
              >
                View Gallery
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg class="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }

    .btn-primary {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 1rem 2.5rem;
      background: #C8A96A;
      color: white;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 0.875rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      transition: all 0.3s ease;
    }

    .btn-primary:hover {
      background: #A8833E;
      box-shadow: 0 4px 20px rgba(200, 169, 106, 0.3);
      transform: translateY(-2px);
    }

    .btn-secondary {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 1rem 2.5rem;
      border: 2px solid white;
      color: white;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 0.875rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      transition: all 0.3s ease;
      background: transparent;
    }

    .btn-secondary:hover {
      background: white;
      color: #1A1A1A;
      transform: translateY(-2px);
    }
  `]
})
export class HeroComponent {
  slide = input<HeroSlide>({
    title: 'Your Style, Our Passion',
    subtitle: 'Hair | Skin | Nails | Makeup',
    description: 'Vadodara\'s premium unisex salon offering expert haircuts, hair color, styling, skin care, nails, and makeup services. Beardo Award Winner.',
    image: '/assets/images/hero-bg.webp',
    ctaText: 'Book Your Appointment',
    ctaLink: '/appointment',
  });
}