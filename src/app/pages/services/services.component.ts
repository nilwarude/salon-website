import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceCardComponent, ServiceItem } from '../../components/service-card/service-card.component';
import { PricingCardComponent, PricingTier } from '../../components/pricing-card/pricing-card.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServiceCardComponent, PricingCardComponent, RouterLink],
  styles: [`
    .filter-btn:hover:not(.active) {
      background-color: rgba(0, 0, 0, 0.1);
    }
  `],
  template: `
    <!-- Hero Banner -->
     <section class="relative pt-12 pb-8 bg-dark overflow-hidden">
      <div class="absolute inset-0 opacity-20" style="background: linear-gradient(135deg, #C8A96A 0%, transparent 50%, #C8A96A 100%);"></div>
      <div class="container-custom relative z-10 py-4">
        <div class="max-w-3xl">
          <p class="font-sans text-xs text-primary uppercase tracking-[0.2em] mb-2" data-aos="fade-up">Our Services</p>
          <h1 class="font-serif text-2xl md:text-3xl lg:text-4xl text-white font-bold" data-aos="fade-up" data-aos-delay="100">Premium Treatments</h1>
          <div class="w-10 h-0.5 bg-primary mt-4 mb-4" data-aos="fade-up" data-aos-delay="200"></div>
          <p class="text-white/70 text-sm md:text-base leading-relaxed" data-aos="fade-up" data-aos-delay="300">Discover our comprehensive range of hair, skin, nails, and makeup services for men and women.</p>
        </div>
      </div>
    </section>

    <!-- Gender Filters -->
    <section class="py-6 bg-white border-b border-gray-100 sticky top-0 z-20">
      <div class="container-custom">
        <div class="flex flex-wrap gap-3 justify-center">
          @for (filter of filters; track filter.label) {
            <button
              (click)="activeGenderFilter.set(filter.value)"
              class="filter-btn px-6 py-2.5 font-sans text-sm uppercase tracking-[0.1em] transition-all duration-300"
              [class.active]="activeGenderFilter() === filter.value"
              [class.bg-dark]="activeGenderFilter() === filter.value"
              [class.text-white]="activeGenderFilter() === filter.value"
              [class.bg-section]="activeGenderFilter() !== filter.value"
              [class.text-dark]="activeGenderFilter() !== filter.value"
            >
              {{ filter.label }}
            </button>
          }
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="section-padding bg-section">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (service of filteredServices(); track service.title) {
            <app-service-card [service]="service" />
          }
        </div>
      </div>
    </section>

    <!-- Category Quick Links -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="section-subtitle" data-aos="fade-up">Explore By Category</p>
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Find Your Perfect Service</h2>
          <div class="gold-divider mt-6" data-aos="fade-up" data-aos-delay="200"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          @for (cat of serviceCategories; track cat.title) {
            <a
              [routerLink]="cat.link"
              class="group relative overflow-hidden aspect-square card-premium"
              data-aos="fade-up"
            >
              <img [src]="cat.image" [alt]="cat.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
              <div class="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <span class="text-3xl block mb-2">{{ cat.icon }}</span>
                <h3 class="font-serif text-xl text-white">{{ cat.title }}</h3>
                <p class="text-white/60 text-sm mt-1">{{ cat.count }} Services</p>
              </div>
              <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span class="bg-primary text-white text-xs font-sans uppercase tracking-[0.1em] px-3 py-1">Explore</span>
              </div>
            </a>
          }
        </div>
      </div>
    </section>

    <!-- Pricing Packages -->
    <section class="section-padding bg-section">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="section-subtitle" data-aos="fade-up">Packages</p>
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Choose Your Experience</h2>
          <div class="gold-divider mt-6" data-aos="fade-up" data-aos-delay="200"></div>
          <p class="text-dark/60 mt-6 leading-relaxed" data-aos="fade-up" data-aos-delay="300">Select from our curated packages designed for every need</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          @for (tier of pricingTiers; track tier.name) {
            <app-pricing-card [tier]="tier" />
          }
        </div>
      </div>
    </section>

    <!-- Book Appointment CTA -->
    <section class="relative py-24 bg-dark overflow-hidden">
      <div class="absolute inset-0 opacity-10" style="background: linear-gradient(135deg, #C8A96A 0%, transparent 50%, #C8A96A 100%);"></div>
      <div class="container-custom relative z-10 text-center">
        <h2 class="font-serif text-4xl md:text-5xl text-white font-bold mb-6" data-aos="fade-up">
          Ready to Transform Your Look?
        </h2>
        <p class="text-white/60 text-lg max-w-2xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="100">
          Book your appointment today and experience the Hairbar difference
        </p>
        <a
          routerLink="/appointment"
          class="btn-primary text-lg px-12 py-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Book Appointment
        </a>
      </div>
    </section>
  `,
})
export class ServicesComponent {
  activeGenderFilter = signal('all');

  filters = [
    { label: 'All Services', value: 'all' },
    { label: 'For Her', value: 'women' },
    { label: 'For Him', value: 'men' },
    { label: 'Unisex', value: 'unisex' },
  ];

  services: ServiceItem[] = [
    {
      icon: '👰', title: 'Bridal & Party Makeup',
      description: 'Complete bridal and party makeup packages with trial sessions included.',
      duration: '3 hrs', price: '₹2,999+',
      image: '/assets/images/gallery/gallery-3.svg', link: '/services/bridal-makeup', category: 'Bridal', gender: 'women',
    },
    {
      icon: '🎨', title: 'Hair Color & Highlights',
      description: 'Transformative color services using premium L\'Oreal products for stunning results.',
      duration: '2 hrs', price: '₹3,500',
      image: '/assets/images/gallery/gallery-1.svg', link: '/services/hair-color', category: 'Color', gender: 'unisex',
    },
    {
      icon: '💫', title: 'Blowouts & Hair Spa',
      description: 'Perfect blowouts and nourishing hair spa treatments for healthy, beautiful hair.',
      duration: '1 hr', price: '₹499+',
      image: '/assets/images/gallery/gallery-4.svg', link: '/services/hair-spa', category: 'Hair', gender: 'unisex',
    },
    {
      icon: '💎', title: 'Hair Treatments',
      description: 'Restorative treatments including keratin smoothing and deep conditioning.',
      duration: '1 hr', price: '₹1,500',
      image: '/assets/images/gallery/gallery-7.svg', link: '/services/hair-spa', category: 'Hair', gender: 'unisex',
    },
    {
      icon: '✂️', title: 'Precision Haircuts & Styling',
      description: 'Expert cuts and styling for men and women tailored to your unique look and lifestyle.',
      duration: '45 min', price: '₹399+',
      image: '/assets/images/gallery/gallery-2.svg', link: '/services/mens-grooming', category: 'Hair', gender: 'unisex',
    },
    {
      icon: '🧔', title: "Men's Grooming",
      description: 'Premium haircuts, beard trims, hot towel shaves, and facial treatments.',
      duration: '30 min', price: '₹349+',
      image: '/assets/images/gallery/gallery-8.svg', link: '/services/mens-grooming', category: 'Grooming', gender: 'men',
    },
    {
      icon: '🌿', title: 'Skin Care & Facials',
      description: 'Rejuvenating facials and skin treatments for glowing, radiant skin.',
      duration: '45 min', price: '₹599+',
      image: '/assets/images/gallery/gallery-7.svg', link: '/services/facial-treatment', category: 'Skin', gender: 'unisex',
    },
    {
      icon: '💅', title: 'Nails & Manicure',
      description: 'Professional nail care, manicure, and pedicure in a relaxing environment.',
      duration: '45 min', price: '₹600+',
      image: '/assets/images/gallery/gallery-4.svg', link: '/services', category: 'Skin', gender: 'unisex',
    },
    {
      icon: '🎀', title: 'Kids Haircuts',
      description: 'Gentle cuts for children in a friendly, welcoming environment.',
      duration: '30 min', price: '₹249+',
      image: '/assets/images/gallery/gallery-2.svg', link: '/services/mens-grooming', category: 'Hair', gender: 'unisex',
    },
  ];

  filteredServices = computed(() => {
    const filter = this.activeGenderFilter();
    if (filter === 'all') return this.services;
    return this.services.filter(s => s.gender === filter);
  });

  serviceCategories = [
    { icon: '✂️', title: 'Hair Services', count: '12', image: '/assets/images/gallery/gallery-2.svg', link: '/services?category=hair' },
    { icon: '🎨', title: 'Hair Color', count: '8', image: '/assets/images/gallery/gallery-1.svg', link: '/services/hair-color' },
    { icon: '🌿', title: 'Skin Care', count: '6', image: '/assets/images/gallery/gallery-7.svg', link: '/services/facial-treatment' },
    { icon: '👰', title: 'Bridal', count: '5', image: '/assets/images/gallery/gallery-3.svg', link: '/services/bridal-makeup' },
  ];

  pricingTiers: PricingTier[] = [
    { name: 'Essential Cut', price: '₹500', description: 'Perfect for regular maintenance', features: ['Expert Haircut', 'Shampoo & Condition', 'Blow Dry', 'Style Consultation'], highlighted: false },
    { name: 'Color & Style', price: '₹3,500', description: 'Our most popular package', features: ['Haircut & Style', 'Full Hair Color', 'Deep Conditioning', 'Blow Dry', 'Complimentary Beverage'], highlighted: true },
    { name: 'Bridal Special', price: '₹15,000', description: 'Complete bridal beauty package', features: ['Bridal Makeup', 'Hair Styling', 'Manicure & Pedicure', 'Facial', 'Trial Session', 'Priority Booking'], highlighted: false },
  ];
}