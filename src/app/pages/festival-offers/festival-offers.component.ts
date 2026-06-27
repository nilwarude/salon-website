import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-festival-offers',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="relative pt-32 pb-20 bg-dark overflow-hidden">
      <div class="absolute inset-0 opacity-20" style="background: linear-gradient(135deg, #C8A96A 0%, transparent 50%, #C8A96A 100%);"></div>
      <div class="container-custom relative z-10">
        <div class="max-w-4xl">
          <p class="font-sans text-sm text-primary uppercase tracking-[0.25em] mb-4" data-aos="fade-up">Festival Specials</p>
          <h1 class="font-serif text-4xl md:text-5xl lg:text-heading text-white font-bold" data-aos="fade-up" data-aos-delay="100">Festival Offers 2026</h1>
          <div class="w-16 h-0.5 bg-primary mt-6 mb-6" data-aos="fade-up" data-aos-delay="200"></div>
          <p class="text-white/70 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="300">Celebrate the festive season with glamorous looks and special discounts at Hairbar.</p>
        </div>
      </div>
    </section>

    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="section-subtitle">Limited Edition Packages</p>
          <h2 class="section-title">Diwali Glow Special</h2>
          <div class="gold-divider mt-6"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="card-premium p-6" data-aos="fade-up">
            <div class="w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
              <span class="text-2xl">✨</span>
            </div>
            <h3 class="font-serif text-xl text-dark mb-2">Festival Makeup</h3>
            <p class="text-dark/60 text-sm mb-4">Radiant party makeup with premium products for all festivals.</p>
            <p class="text-primary font-serif text-2xl font-bold mb-4">₹1,499 <span class="text-dark/40 text-sm font-normal">only</span></p>
            <a routerLink="/appointment" class="block text-center btn-secondary text-xs py-2 focus-ring">Book Now</a>
          </div>
          <div class="card-premium p-6" data-aos="fade-up" data-aos-delay="100">
            <div class="w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
              <span class="text-2xl">💇</span>
            </div>
            <h3 class="font-serif text-xl text-dark mb-2">Festival Hair Package</h3>
            <p class="text-dark/60 text-sm mb-4">Styling + Blowout + Accessories for your festive look.</p>
            <p class="text-primary font-serif text-2xl font-bold mb-4">₹999 <span class="text-dark/40 text-sm font-normal">only</span></p>
            <a routerLink="/appointment" class="block text-center btn-secondary text-xs py-2 focus-ring">Book Now</a>
          </div>
          <div class="card-premium p-6" data-aos="fade-up" data-aos-delay="200">
            <div class="w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
              <span class="text-2xl">💆</span>
            </div>
            <h3 class="font-serif text-xl text-dark mb-2">Glow & Go Pampering</h3>
            <p class="text-dark/60 text-sm mb-4">Express facial + Hair spa combo for instant radiance.</p>
            <p class="text-primary font-serif text-2xl font-bold mb-4">₹1,999 <span class="text-dark/40 text-sm font-normal">only</span></p>
            <a routerLink="/appointment" class="block text-center btn-secondary text-xs py-2 focus-ring">Book Now</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding bg-section">
      <div class="container-custom">
        <div class="bg-white p-12 text-center" data-aos="fade-up">
          <h3 class="font-serif text-2xl text-dark mb-4">Combo Offer!</h3>
          <p class="text-dark/70 mb-6">Book any 3 services and get 25% off. Perfect for your festival prep!</p>
          <div class="flex flex-wrap justify-center gap-4">
            <a routerLink="/appointment" class="btn-primary focus-ring">Book Combo Package</a>
            <a [href]="whatsappUrl" target="_blank" rel="noopener noreferrer" class="btn-whatsapp focus-ring">
              WhatsApp for Combo
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .btn-whatsapp {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem 1.5rem;
      background: #25D366;
      color: white;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      transition: all 0.3s ease;
    }
    .btn-whatsapp:hover {
      background: #1DA851;
      box-shadow: 0 4px 20px rgba(37, 211, 102, 0.3);
    }
  `],
})
export class FestivalOffersComponent {
  private metaService = inject(MetaService);

  get whatsappUrl(): string {
    const msg = encodeURIComponent('Hi Hairbar! I want to book the Festival Combo package.');
    return `https://wa.me/918291492821?text=${msg}`;
  }

  constructor() {
    this.metaService.updateSeoData({
      title: 'Festival Offers 2026 | Hairbar Unisex Salon',
      description: 'Celebrate festivals with special offers on makeup, hair styling, and spa treatments. Limited time offers at Hairbar Unisex Salon.',
    });
  }
}