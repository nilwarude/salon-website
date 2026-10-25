import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="min-h-screen flex items-center justify-center bg-section">
      <div class="container-custom text-center py-20">
        <!-- Error Code -->
        <div class="mb-8" data-aos="fade-up">
          <h1 class="font-serif text-9xl md:text-[200px] text-primary font-bold leading-none">404</h1>
          <div class="w-24 h-1 bg-primary mx-auto mt-4 mb-6"></div>
          <p class="text-dark/70 text-lg">Page Not Found</p>
        </div>

        <!-- Message -->
        <div class="max-w-2xl mx-auto mb-10" data-aos="fade-up" data-aos-delay="100">
          <h2 class="font-serif text-2xl md:text-3xl text-dark font-bold mb-4">Oops! This page doesn't exist.</h2>
          <p class="text-dark/60 leading-relaxed">
            The page you're looking for might have been moved, deleted, or never existed. 
            But don't worry - our salon services are still available! You can explore our treatments or book an appointment.
          </p>
        </div>

        <!-- Search Suggestion -->
        <div class="max-w-md mx-auto mb-12" data-aos="fade-up" data-aos-delay="200">
          <p class="text-dark/50 text-sm mb-4">Try searching for:</p>
          <div class="flex flex-wrap gap-2 justify-center">
            @for (suggestion of searchSuggestions; track suggestion) {
              <a [routerLink]="suggestion.link" class="px-4 py-2 bg-white border border-dark/10 text-dark text-sm hover:bg-primary hover:text-white hover:border-primary transition-all">
                {{ suggestion.text }}
              </a>
            }
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="300">
          <a routerLink="/" class="btn-primary">Go to Homepage</a>
          <a routerLink="/services" class="btn-secondary">View Our Services</a>
          <a routerLink="/contact" class="btn-secondary">Contact Us</a>
        </div>

        <!-- Help Section -->
        <div class="mt-16 pt-12 border-t border-dark/10" data-aos="fade-up" data-aos-delay="400">
          <h3 class="font-serif text-xl text-dark mb-6">Need Help Finding Something?</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div class="text-center">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">📞</span>
              </div>
              <h4 class="font-serif text-base text-dark mb-2">Call Us</h4>
              <p class="text-dark/60 text-sm">
                <a href="tel:+917861935860" class="hover:text-primary transition-colors">+91 78619 35860</a>
              </p>
            </div>
            <div class="text-center">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">💬</span>
              </div>
              <h4 class="font-serif text-base text-dark mb-2">WhatsApp</h4>
              <p class="text-dark/60 text-sm">
                <a href="https://wa.me/918291492821" target="_blank" rel="noopener noreferrer" class="hover:text-primary transition-colors">Message Us</a>
              </p>
            </div>
            <div class="text-center">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">📍</span>
              </div>
              <h4 class="font-serif text-base text-dark mb-2">Visit Us</h4>
              <p class="text-dark/60 text-sm">
                <a routerLink="/contact" class="hover:text-primary transition-colors">Find Our Location</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .btn-primary {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.875rem 2rem;
      background: #C8A96A;
      color: white;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 0.875rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      transition: all 0.3s ease;
      border: none;
      cursor: pointer;
    }
    .btn-primary:hover {
      background: #A8833E;
      box-shadow: 0 4px 20px rgba(200, 169, 106, 0.3);
    }
    .btn-secondary {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.875rem 2rem;
      background: transparent;
      color: #1A1A1A;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 0.875rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      transition: all 0.3s ease;
      border: 1px solid #1A1A1A;
    }
    .btn-secondary:hover {
      background: #1A1A1A;
      color: white;
      border-color: #1A1A1A;
    }
  `]
})
export class NotFoundComponent {
  private metaService = inject(MetaService);

  searchSuggestions = [
    { text: 'Haircuts Vadodara', link: '/services/mens-grooming' },
    { text: 'Hair Color Vadodara', link: '/services/hair-color' },
    { text: 'Bridal Makeup Vadodara', link: '/services/bridal-makeup' },
    { text: 'Hair Spa Vadodara', link: '/services/hair-spa' },
    { text: 'Pricing', link: '/pricing' },
    { text: 'Appointment Booking', link: '/appointment' },
  ];

  constructor() {
    this.metaService.updateSeoData({
      title: 'Page Not Found | HairBar Unisex Salon Vadodara',
      description: 'The page you\'re looking for doesn\'t exist. Find hair salon services, bridal makeup, hair color, and grooming services in Vadodara.',
      canonicalUrl: 'https://hairbarsalon.in/404',
    });
  }
}