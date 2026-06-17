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
          <p class="text-white/70 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="300">Discover our comprehensive range of luxury hair and beauty services.</p>
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
    { icon: '✂️', title: 'Precision Haircuts', description: 'Expert cuts tailored to your face shape.', duration: '45 min', price: '$85+' },
    { icon: '🎨', title: 'Color & Highlights', description: 'Transformative color services.', duration: '2 hrs', price: '$150+' },
    { icon: '💫', title: 'Blowouts & Styling', description: 'Perfect for any occasion.', duration: '1 hr', price: '$65+' },
    { icon: '💎', title: 'Hair Treatments', description: 'Restorative treatments.', duration: '1 hr', price: '$95+' },
    { icon: '👰', title: 'Bridal Packages', description: 'Complete bridal beauty.', duration: '3 hrs', price: '$350+' },
    { icon: '🧔', title: "Men's Grooming", description: 'Premium grooming.', duration: '30 min', price: '$55+' },
    { icon: '🌿', title: 'Scalp Therapy', description: 'Deep cleansing and treatment.', duration: '45 min', price: '$75+' },
    { icon: '✨', title: 'Keratin Treatment', description: 'Smoothing and frizz control.', duration: '2.5 hrs', price: '$250+' },
    { icon: '🎀', title: 'Kids Haircuts', description: 'Gentle cuts for children.', duration: '30 min', price: '$45+' },
  ];

  pricingTiers: PricingTier[] = [
    { name: 'Essential', price: '$85', description: 'Perfect for regular maintenance', features: ['Haircut & Style', 'Shampoo & Condition', 'Blow Dry', 'Style Consultation'], highlighted: false },
    { name: 'Premium', price: '$200', description: 'Our most popular package', features: ['Everything in Essential', 'Color or Highlights', 'Deep Conditioning', 'Luxury Blowout', 'Complimentary Beverage'], highlighted: true },
    { name: 'Ultimate', price: '$400', description: 'The complete luxury experience', features: ['Everything in Premium', 'Full Color + Cut', 'Keratin Treatment', 'Scalp Massage', 'Wine & Treats', 'Priority Booking'], highlighted: false },
  ];
}