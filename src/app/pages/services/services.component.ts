import { Component } from '@angular/core';
import { ServiceCardComponent, ServiceItem } from '../../components/service-card/service-card.component';
import { PricingCardComponent, PricingTier } from '../../components/pricing-card/pricing-card.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServiceCardComponent, PricingCardComponent],
  template: `
    <section class="relative pt-32 pb-20 bg-dark overflow-hidden">
      <div class="absolute inset-0 opacity-20" style="background: linear-gradient(135deg, #C8A96A 0%, transparent 50%, #C8A96A 100%);"></div>
      <div class="container-custom relative z-10">
        <div class="max-w-3xl">
          <p class="font-sans text-sm text-primary uppercase tracking-[0.25em] mb-4" data-aos="fade-up">Our Services</p>
          <h1 class="font-serif text-4xl md:text-5xl lg:text-heading text-white font-bold" data-aos="fade-up" data-aos-delay="100">Premium Treatments</h1>
          <div class="w-16 h-0.5 bg-primary mt-6 mb-6" data-aos="fade-up" data-aos-delay="200"></div>
           <p class="text-white/70 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="300">Discover our comprehensive range of hair, skin, nails, and makeup services for men and women.</p>
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (service of services; track service.title) {
            <app-service-card [service]="service" />
          }
        </div>
      </div>
    </section>

    <section class="section-padding bg-section">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="section-subtitle" data-aos="fade-up">Packages</p>
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Choose Your Experience</h2>
          <div class="gold-divider mt-6" data-aos="fade-up" data-aos-delay="200"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          @for (tier of pricingTiers; track tier.name) {
            <app-pricing-card [tier]="tier" />
          }
        </div>
      </div>
    </section>
  `,
})
export class ServicesComponent {
  services: ServiceItem[] = [
    { icon: '✂️', title: 'Haircuts & Styling', description: 'Expert cuts and styling for men and women tailored to your look.', duration: '45 min', price: '₹399+' },
    { icon: '🎨', title: 'Hair Color & Highlights', description: 'Transformative color services using premium products.', duration: '2 hrs', price: '₹999+' },
    { icon: '💫', title: 'Blowouts & Hair Spa', description: 'Perfect blowouts and nourishing hair spa treatments.', duration: '1 hr', price: '₹499+' },
    { icon: '💎', title: 'Hair Treatments', description: 'Restorative treatments for healthy, beautiful hair.', duration: '1 hr', price: '₹699+' },
    { icon: '👰', title: 'Bridal & Party Makeup', description: 'Complete bridal and party makeup packages.', duration: '3 hrs', price: '₹2,999+' },
    { icon: '🧔', title: "Men's Grooming", description: 'Premium haircuts, beard trims, and facials.', duration: '30 min', price: '₹349+' },
    { icon: '🌿', title: 'Skin Care & Facials', description: 'Rejuvenating facials and skin treatments.', duration: '45 min', price: '₹599+' },
    { icon: '💅', title: 'Nails & Manicure', description: 'Professional nail care, manicure, and pedicure.', duration: '45 min', price: '₹399+' },
    { icon: '🎀', title: 'Kids Haircuts', description: 'Gentle cuts for children in a friendly environment.', duration: '30 min', price: '₹249+' },
  ];

  pricingTiers: PricingTier[] = [
    { name: 'Essential Cut', price: '₹399', description: 'Perfect for regular maintenance', features: ['Expert Haircut', 'Shampoo & Condition', 'Blow Dry', 'Style Consultation'], highlighted: false },
    { name: 'Color & Style', price: '₹1,999', description: 'Our most popular package', features: ['Haircut & Style', 'Full Hair Color', 'Deep Conditioning', 'Blow Dry', 'Complimentary Beverage'], highlighted: true },
    { name: 'Bridal Special', price: '₹4,999', description: 'Complete bridal beauty package', features: ['Bridal Makeup', 'Hair Styling', 'Manicure & Pedicure', 'Facial', 'Trial Session', 'Priority Booking'], highlighted: false },
  ];
}