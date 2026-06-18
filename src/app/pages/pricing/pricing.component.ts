import { Component } from '@angular/core';
import { PricingCardComponent, PricingTier } from '../../components/pricing-card/pricing-card.component';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [PricingCardComponent, CtaBannerComponent],
  template: `
    <section class="relative pt-32 pb-20 bg-dark overflow-hidden">
      <div class="absolute inset-0 opacity-20" style="background: linear-gradient(135deg, #C8A96A 0%, transparent 50%, #C8A96A 100%);"></div>
      <div class="container-custom relative z-10">
        <div class="max-w-3xl">
          <p class="font-sans text-sm text-primary uppercase tracking-[0.25em] mb-4" data-aos="fade-up">Pricing</p>
          <h1 class="font-serif text-4xl md:text-5xl lg:text-heading text-white font-bold" data-aos="fade-up" data-aos-delay="100">Transparent Pricing</h1>
          <div class="w-16 h-0.5 bg-primary mt-6 mb-6" data-aos="fade-up" data-aos-delay="200"></div>
          <p class="text-white/70 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="300">Premium quality at competitive prices. No hidden fees, just exceptional service.</p>
        </div>
      </div>
    </section>
    <section class="section-padding">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          @for (tier of pricingTiers; track tier.name) {
            <app-pricing-card [tier]="tier" />
          }
        </div>
      </div>
    </section>
    <section class="section-padding bg-section">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <h2 class="font-serif text-2xl md:text-3xl text-center mb-12" data-aos="fade-up">Individual Service Pricing</h2>
          <div class="space-y-4" data-aos="fade-up">
            @for (price of individualPrices; track price.service) {
              <div class="flex justify-between items-center py-4 border-b border-dark/10">
                <div>
                  <h4 class="font-serif text-base text-dark">{{ price.service }}</h4>
                  <p class="text-xs text-dark/50 font-sans mt-1">{{ price.description }}</p>
                </div>
                <span class="font-serif text-lg text-primary font-semibold">{{ price.price }}</span>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
    <app-cta-banner />
  `,
})
export class PricingComponent {
  pricingTiers: PricingTier[] = [
    { name: 'Essential Cut', price: '₹399', description: 'Perfect for regular maintenance', features: ['Expert Haircut', 'Shampoo & Condition', 'Blow Dry', 'Style Consultation'], highlighted: false },
    { name: 'Color & Style', price: '₹1,999', description: 'Our most popular package', features: ['Haircut & Style', 'Full Hair Color', 'Deep Conditioning', 'Blow Dry', 'Complimentary Beverage'], highlighted: true },
    { name: 'Bridal Special', price: '₹4,999', description: 'Complete bridal beauty package', features: ['Bridal Makeup', 'Hair Styling', 'Manicure & Pedicure', 'Facial', 'Trial Session', 'Priority Booking'], highlighted: false },
  ];

  individualPrices = [
    { service: 'Haircut (Women)', description: 'Wash, cut & blow-dry', price: '₹499' },
    { service: 'Haircut (Men)', description: 'Cut & style', price: '₹349' },
    { service: 'Haircut (Kids)', description: 'Gentle cut for children', price: '₹249' },
    { service: 'Full Hair Color', description: 'All-over color', price: '₹1,299' },
    { service: 'Highlights', description: 'Partial or full foil', price: '₹1,999' },
    { service: 'Blowout', description: 'Wash & blow-dry style', price: '₹399' },
    { service: 'Hair Spa', description: 'Nourishing treatment', price: '₹599' },
    { service: 'Facial', description: 'Rejuvenating skin care', price: '₹699' },
    { service: 'Manicure', description: 'Professional nail care', price: '₹399' },
    { service: 'Pedicure', description: 'Complete foot care', price: '₹499' },
    { service: 'Bridal Makeup', description: 'Trial + wedding day', price: '₹4,999' },
    { service: 'Beard Trim', description: 'Precision beard shaping', price: '₹149' },
  ];
}