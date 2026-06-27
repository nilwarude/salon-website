import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-wedding-season',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="relative pt-32 pb-20 bg-dark overflow-hidden">
      <div class="absolute inset-0 opacity-20" style="background: linear-gradient(135deg, #C8A96A 0%, transparent 50%, #C8A96A 100%);"></div>
      <div class="container-custom relative z-10">
        <div class="max-w-4xl">
          <p class="font-sans text-sm text-primary uppercase tracking-[0.25em] mb-4" data-aos="fade-up">Seasonal Offer</p>
          <h1 class="font-serif text-4xl md:text-5xl lg:text-heading text-white font-bold" data-aos="fade-up" data-aos-delay="100">Wedding Season Special</h1>
          <div class="w-16 h-0.5 bg-primary mt-6 mb-6" data-aos="fade-up" data-aos-delay="200"></div>
          <p class="text-white/70 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="300">Looking gorgeous for your special day with our premium bridal packages and exclusive offers.</p>
        </div>
      </div>
    </section>

    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 class="section-title">Bridal Packages</h2>
            <p class="text-dark/70 mb-6">Our Wedding Season Special includes premium bridal makeup, hair styling, and skincare treatments designed to make you look and feel your absolute best.</p>
            <ul class="space-y-4 mb-8">
              <li class="flex items-start gap-3">
                <span class="text-primary mt-1">&#x2713;</span>
                <span class="text-dark/70">Pre-bridal skincare & hair treatments (4-6 sessions)</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-primary mt-1">&#x2713;</span>
                <span class="text-dark/70">Bridal makeup trial session</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-primary mt-1">&#x2713;</span>
                <span class="text-dark/70">Wedding day makeup & hair styling</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-primary mt-1">&#x2713;</span>
                <span class="text-dark/70">Party makeup for 2 family members</span>
              </li>
            </ul>
            <div class="flex gap-4">
              <a routerLink="/appointment" class="btn-primary focus-ring">Book Now</a>
              <a [href]="whatsappUrl" target="_blank" rel="noopener noreferrer" class="btn-secondary focus-ring">
                WhatsApp for Details
              </a>
            </div>
          </div>
          <div data-aos="fade-left">
            <div class="aspect-[4/5] bg-section overflow-hidden">
              <img src="/assets/images/gallery/Bridal/bridal1.jpeg" alt="Bridal makeup and styling at Hairbar Salon" class="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding bg-section">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="section-subtitle">Limited Time Offer</p>
          <h2 class="section-title">Special Pricing This Season</h2>
          <div class="gold-divider mt-6"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-8 text-center" data-aos="fade-up">
            <p class="text-4xl font-serif text-primary mb-2">₹8,999</p>
            <p class="font-serif text-lg text-dark mb-4">Basic Bridal</p>
            <p class="text-dark/60 text-sm mb-6">Trail + Wedding day styling</p>
            <a routerLink="/appointment" class="btn-dark text-xs focus-ring">Select Package</a>
          </div>
          <div class="bg-white p-8 text-center border-2 border-primary" data-aos="fade-up" data-aos-delay="100">
            <span class="font-sans text-xs text-primary uppercase tracking-wider">Most Popular</span>
            <p class="text-4xl font-serif text-primary mb-2 mt-2">₹14,999</p>
            <p class="font-serif text-lg text-dark mb-4">Premium Bridal</p>
            <p class="text-dark/60 text-sm mb-6">Pre-bridal + Trail + Wedding + 2 family members</p>
            <a routerLink="/appointment" class="btn-primary text-xs focus-ring">Select Package</a>
          </div>
          <div class="bg-white p-8 text-center" data-aos="fade-up" data-aos-delay="200">
            <p class="text-4xl font-serif text-primary mb-2">₹19,999</p>
            <p class="font-serif text-lg text-dark mb-4">Royal Bridal</p>
            <p class="text-dark/60 text-sm mb-6">Complete package with all premium services</p>
            <a routerLink="/appointment" class="btn-dark text-xs focus-ring">Select Package</a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class WeddingSeasonComponent {
  private metaService = inject(MetaService);

  get whatsappUrl(): string {
    const msg = encodeURIComponent('Hi Hairbar! I want to know more about the Wedding Season Special.');
    return `https://wa.me/918291492821?text=${msg}`;
  }

  constructor() {
    this.metaService.updateSeoData({
      title: 'Wedding Season Special | Hairbar Unisex Salon',
      description: 'Get beautiful bridal packages with exclusive offers this wedding season. Premium makeup and styling services for your special day.',
    });
  }
}