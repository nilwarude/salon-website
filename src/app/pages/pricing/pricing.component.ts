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

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div class="bg-white card-premium p-6" data-aos="fade-up">
              <div class="text-center mb-6">
                <span class="text-3xl block mb-2">👰</span>
                <h3 class="font-serif text-xl text-dark">For Her</h3>
              </div>
              <div class="space-y-3">
                @for (price of womenPrices; track price.service) {
                  <div class="flex justify-between items-center py-2 border-b border-gray-100">
                    <span class="text-sm text-dark/70">{{ price.service }}</span>
                    <span class="text-sm font-serif text-primary font-semibold">{{ price.price }}</span>
                  </div>
                }
              </div>
            </div>
            <div class="bg-white card-premium p-6" data-aos="fade-up" data-aos-delay="100">
              <div class="text-center mb-6">
                <span class="text-3xl block mb-2">🧔</span>
                <h3 class="font-serif text-xl text-dark">For Him</h3>
              </div>
              <div class="space-y-3">
                @for (price of menPrices; track price.service) {
                  <div class="flex justify-between items-center py-2 border-b border-gray-100">
                    <span class="text-sm text-dark/70">{{ price.service }}</span>
                    <span class="text-sm font-serif text-primary font-semibold">{{ price.price }}</span>
                  </div>
                }
              </div>
            </div>
            <div class="bg-white card-premium p-6" data-aos="fade-up" data-aos-delay="200">
              <div class="text-center mb-6">
                <span class="text-3xl block mb-2">✨</span>
                <h3 class="font-serif text-xl text-dark">Unisex</h3>
              </div>
              <div class="space-y-3">
                @for (price of unisexPrices; track price.service) {
                  <div class="flex justify-between items-center py-2 border-b border-gray-100">
                    <span class="text-sm text-dark/70">{{ price.service }}</span>
                    <span class="text-sm font-serif text-primary font-semibold">{{ price.price }}</span>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <app-cta-banner />
  `,
})
export class PricingComponent {
  pricingTiers: PricingTier[] = [
    { name: 'Essential Cut - Men', price: '₹180', description: 'Precision haircut for men', features: ['Expert Haircut', 'Shampoo & Condition', 'Blow Dry', 'Style Consultation'], highlighted: false },
    { name: 'Groom Special', price: '₹8,000', description: 'Complete grooming experience', features: ['Haircut', 'Beard Trim', 'Facial', 'Hair Spa', 'Manicure & Pedicure', 'Complimentary Drink'], highlighted: true },
    { name: 'Bridal Special', price: '₹15,000', description: 'Complete bridal beauty package', features: ['Bridal Makeup', 'Hair Styling', 'Manicure & Pedicure', 'Facial', 'Trial Session', 'Priority Booking'], highlighted: false },
  ];

  womenPrices = [
    { service: 'Haircut', description: 'Wash, cut & blow-dry', price: '₹500' },
    { service: 'Wash & Conditioner', description: 'Deep cleanse & condition', price: '₹250' },
    { service: 'Blow Dry', description: 'Wash & blow-dry style', price: '₹250' },
    { service: 'Hair Color', description: 'All-over color', price: '₹3,000' },
    { service: 'Highlights', description: 'Partial or full foil', price: '₹3,500' },
    { service: 'Hair Spa', description: 'Nourishing treatment', price: '₹1,500' },
    { service: 'Keratin', description: 'Smoothing & straightening', price: '₹3,500' },
    { service: 'Botox', description: 'Hair rejuvenation', price: '₹5,000' },
    { service: 'Facial', description: 'Rejuvenating skin care', price: '₹2,500' },
    { service: 'Manicure & Pedicure', description: 'Complete nail care', price: '₹1,500' },
    { service: 'Bridal Makeup', description: 'Trial + wedding day', price: '₹4,999' },
  ];

  menPrices = [
    { service: 'Haircut', description: 'Precision cut & style', price: '₹180' },
    { service: 'Beard Trim', description: 'Expert beard shaping', price: '₹100' },
    { service: 'Wash & Conditioner', description: 'Deep cleanse & condition', price: '₹100' },
    { service: 'Facial', description: 'Rejuvenating skin care', price: '₹1,500' },
    { service: 'Hair Color', description: 'Full color treatment', price: '₹700' },
    { service: 'Clean Up', description: 'Basic grooming cleanup', price: '₹500' },
    { service: 'Hair Spa', description: 'Nourishing treatment', price: '₹700' },
    { service: 'Hair Treatment', description: 'Keratin & deep conditioning', price: '₹1,500' },
    { service: 'Groom Package', description: 'Complete grooming experience', price: '₹8,000' },
    { service: 'Manicure', description: 'Professional nail care', price: '₹600' },
    { service: 'Pedicure', description: 'Complete foot care', price: '₹600' },
  ];

  unisexPrices = [
    { service: 'Kids Haircut', description: 'Gentle cut for children', price: '₹249' },
    { service: 'Hair Treatment', description: 'Keratin & deep conditioning', price: '₹1,500' },
    { service: 'Nails', description: 'Manicure & pedicure', price: '₹600' },
    { service: 'Skin Care', description: 'Basic facial', price: '₹499' },
  ];
}