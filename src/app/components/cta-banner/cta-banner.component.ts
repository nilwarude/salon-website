import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="relative py-24 overflow-hidden" data-aos="fade-up">
      <!-- Background -->
      <div class="absolute inset-0 bg-dark">
        <div class="absolute inset-0 opacity-20" style="background: linear-gradient(135deg, #C8A96A 0%, transparent 50%, #C8A96A 100%);"></div>
      </div>

      <div class="container-custom relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <p class="font-sans text-sm text-primary uppercase tracking-[0.25em] mb-4" data-aos="fade-up">{{ subtitle }}</p>
          <h2 class="font-serif text-3xl md:text-4xl lg:text-heading text-white font-bold mb-6" data-aos="fade-up" data-aos-delay="100">
            {{ title }}
          </h2>
          <div class="w-16 h-0.5 bg-primary mx-auto mb-6" data-aos="fade-up" data-aos-delay="200"></div>
          <p class="text-white/70 text-lg max-w-2xl mx-auto mb-10" data-aos="fade-up" data-aos-delay="300">
            {{ description }}
          </p>
          <div data-aos="fade-up" data-aos-delay="400">
            <a routerLink="/appointment" class="btn-primary text-sm px-12 py-4">
              {{ ctaText }}
            </a>
          </div>
        </div>
      </div>

      <!-- Decorative Gold Line Bottom -->
      <div class="absolute bottom-0 left-0 right-0 h-1 bg-gold-gradient bg-[length:200%_200%] animate-gold-shimmer"></div>
    </section>
  `,
  styles: [`
    .btn-primary {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 1rem 3rem;
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
  `]
})
export class CtaBannerComponent {
  title = 'Ready for Your New Look?';
  subtitle = 'Book Your Appointment';
  description = 'Experience Vadodara\'s best hair, skin, and makeup services. Our expert stylists are ready to create your perfect style.';
  ctaText = 'Book Now';
}
