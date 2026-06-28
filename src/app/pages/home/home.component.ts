import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServiceCardComponent, ServiceItem } from '../../components/service-card/service-card.component';
import type { GalleryItem } from '../../components/gallery-card/gallery-card.component';
import type { Testimonial } from '../../components/testimonial-slider/testimonial-slider.component';
import { BlogCardComponent, BlogPost } from '../../components/blog-card/blog-card.component';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';
import { UiStateService } from '../../services/ui-state.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ServiceCardComponent,
    BlogCardComponent,
    CtaBannerComponent,
    RouterLink,
  ],
  template: `
    <!-- Hero Section -->
    <app-hero [mobileMenuOpen]="uiState.mobileMenuOpen()" />

    <!-- Why Choose Us - Premium Section -->
    <section class="section-padding bg-white relative overflow-hidden">
      <!-- Decorative Elements -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div class="container-custom relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="section-subtitle" data-aos="fade-up">Why Choose Us</p>
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Vadodara's Premium Unisex Salon</h2>
          <div class="gold-divider mt-6" data-aos="fade-up" data-aos-delay="200"></div>
          <p class="text-dark/60 mt-6 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
            Experience luxury grooming at Hairbar Unisex Salon. Beardo Award Winner with 4.7 stars on Google.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          @for (feature of whyChooseUs; track feature.title) {
            <div class="text-center group" data-aos="fade-up" [style.animation-delay]="feature.delay + 'ms'">
              <!-- Icon Container -->
              <div class="relative w-20 h-20 mx-auto mb-6">
                <div class="absolute inset-0 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-500"></div>
                <div class="absolute inset-2 bg-white rounded-full flex items-center justify-center shadow-premium group-hover:shadow-gold transition-shadow duration-500">
                  <span class="text-3xl">{{ feature.icon }}</span>
                </div>
              </div>
              <h3 class="font-serif text-lg text-dark mb-2">{{ feature.title }}</h3>
              <p class="text-dark/50 text-sm leading-relaxed">{{ feature.description }}</p>
            </div>
          }
        </div>

        <!-- Stats Row -->
        <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-100">
          @for (stat of statistics; track stat.label) {
            <div class="text-center" data-aos="fade-up">
              <span class="font-serif text-3xl lg:text-4xl text-primary font-bold block">{{ stat.number }}</span>
              <span class="text-dark/50 text-xs font-sans uppercase tracking-[0.15em] mt-2 block">{{ stat.label }}</span>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Services Section - Luxury Cards -->
    <section class="section-padding bg-section">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-10">
          <p class="font-sans text-xs text-dark/70 uppercase tracking-[0.15em] mb-2" data-aos="fade-up">Our Services</p>
          <h2 class="font-serif text-2xl md:text-3xl text-dark font-bold mb-3" data-aos="fade-up" data-aos-delay="100">Premium Treatments</h2>
          <div class="w-12 h-0.5 bg-primary mx-auto mb-4" data-aos="fade-up" data-aos-delay="200"></div>
          <p class="text-dark/60 text-sm leading-relaxed" data-aos="fade-up" data-aos-delay="300">
            From precision haircuts to bridal makeup, we offer a complete range of hair, skin, nails, and makeup services for men and women.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (service of services; track service.title) {
            <app-service-card [service]="service" />
          }
        </div>
        <div class="text-center mt-12" data-aos="fade-up">
          <a routerLink="/services" class="btn-secondary">View All Services</a>
        </div>
      </div>
    </section>

    <!-- Featured Transformations - Before/After -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="section-subtitle" data-aos="fade-up">Transformations</p>
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Featured Transformations</h2>
          <div class="gold-divider mt-6" data-aos="fade-up" data-aos-delay="200"></div>
          <p class="text-dark/60 mt-6 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
            See the stunning transformations our talented team creates every day
          </p>
        </div>

        <!-- Before/After Showcase -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          @for (transform of transformations; track transform.title) {
            <div class="group relative overflow-hidden card-premium" data-aos="fade-up">
              <div class="grid grid-cols-2">
                <div class="relative aspect-square overflow-hidden">
                  <img [src]="transform.before" [alt]="'Before - ' + transform.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy"/>
                  <div class="absolute top-3 left-3">
                    <span class="bg-dark/80 text-white text-xs font-sans uppercase tracking-[0.1em] px-3 py-1">Before</span>
                  </div>
                </div>
                <div class="relative aspect-square overflow-hidden">
                  <img [src]="transform.after" [alt]="'After - ' + transform.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy"/>
                  <div class="absolute top-3 left-3">
                    <span class="bg-primary text-white text-xs font-sans uppercase tracking-[0.1em] px-3 py-1">After</span>
                  </div>
                </div>
              </div>
              <div class="p-4 text-center">
                <h3 class="font-serif text-base text-dark">{{ transform.title }}</h3>
                <p class="text-dark/50 text-xs font-sans uppercase tracking-[0.1em] mt-1">{{ transform.category }}</p>
              </div>
            </div>
          }
        </div>

        <div class="text-center" data-aos="fade-up">
          <a routerLink="/gallery" class="btn-secondary">View Full Gallery</a>
        </div>
      </div>
    </section>

    <!-- Testimonials - Google Reviews Slider -->
    <section class="section-padding bg-dark text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-5" style="background: linear-gradient(135deg, #C8A96A 0%, transparent 50%, #C8A96A 100%);"></div>
      <div class="container-custom relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="font-sans text-sm text-primary uppercase tracking-[0.25em] mb-4" data-aos="fade-up">Testimonials</p>
          <h2 class="font-serif text-4xl md:text-heading text-white font-bold" data-aos="fade-up" data-aos-delay="100">What Our Clients Say</h2>
          <div class="w-16 h-0.5 bg-primary mx-auto mt-6 mb-6" data-aos="fade-up" data-aos-delay="200"></div>
          <p class="text-white/50 text-lg" data-aos="fade-up" data-aos-delay="300">4.7 ★ Google Rating from 543+ happy clients</p>
        </div>

        <!-- Testimonial Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (testimonial of featuredTestimonials; track testimonial.name) {
            <div class="bg-white/5 backdrop-blur-sm p-6 border border-white/10 hover:border-primary/30 transition-all duration-300" data-aos="fade-up">
              <!-- Stars -->
              <div class="flex gap-1 mb-4" [innerHTML]="getStarsHtml(testimonial.rating)">
              </div>
              <p class="text-white/70 text-sm leading-relaxed mb-4 line-clamp-4">"{{ testimonial.content }}"</p>
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full overflow-hidden bg-primary/20 flex items-center justify-center">
                  <span class="text-primary font-serif font-bold text-sm">{{ testimonial.name.charAt(0) }}</span>
                </div>
                <div>
                  <p class="font-sans text-sm text-white font-medium">{{ testimonial.name }}</p>
                  <p class="text-white/40 text-xs">{{ testimonial.role }}</p>
                </div>
              </div>
            </div>
          }
        </div>

        <div class="text-center mt-12" data-aos="fade-up">
          <a routerLink="/testimonials" class="btn-secondary border-white text-white hover:bg-white hover:text-dark">Read All Reviews</a>
        </div>
      </div>
    </section>

    <!-- Instagram Gallery -->
    <section class="py-16 bg-section">
      <div class="container-custom">
        <div class="text-center mb-12">
          <p class="section-subtitle" data-aos="fade-up">Follow Us</p>
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">&#64;hairbar.official</h2>
          <div class="gold-divider mt-6" data-aos="fade-up" data-aos-delay="200"></div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3" data-aos="fade-up">
          @for (item of instagramFeed; track item.image) {
            <a href="#" class="aspect-square overflow-hidden group relative">
              <img [src]="item.image" alt="Instagram post" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy"/>
              <div class="absolute inset-0 bg-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 01-1.25 1.25A1.25 1.25 0 0114.75 5.5a1.25 1.25 0 011.25-1.25 1.25 1.25 0 011.25 1.25M12 7a5 5 0 11-5 5 5 5 0 015-5m0 2a3 3 0 103 3 3 3 0 00-3-3z"/>
                </svg>
              </div>
            </a>
          }
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="section-subtitle" data-aos="fade-up">FAQ</p>
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Frequently Asked Questions</h2>
          <div class="gold-divider mt-6" data-aos="fade-up" data-aos-delay="200"></div>
        </div>
        <div class="max-w-3xl mx-auto space-y-4">
          @for (faq of faqs; track faq.question; let i = $index) {
            <div class="bg-section card-premium overflow-hidden" data-aos="fade-up" [style.animation-delay]="i * 50 + 'ms'">
              <button
                (click)="toggleFaq(i)"
                class="w-full flex items-center justify-between p-6 text-left"
              >
                <span class="font-serif text-lg text-dark pr-4">{{ faq.question }}</span>
                <svg
                  class="w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300"
                  [class.rotate-45]="expandedFaq() === i"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                </svg>
              </button>
              @if (expandedFaq() === i) {
                <div class="px-6 pb-6 text-dark/60 leading-relaxed">
                  {{ faq.answer }}
                </div>
              }
            </div>
          }
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <app-cta-banner />

    <!-- Blog Preview -->
    <section class="section-padding bg-section">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="section-subtitle" data-aos="fade-up">Our Blog</p>
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Latest from Our Journal</h2>
          <div class="gold-divider mt-6" data-aos="fade-up" data-aos-delay="200"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (post of blogPosts; track post.title) {
            <app-blog-card [post]="post" />
          }
        </div>
      </div>
    </section>
  `,
})
export class HomeComponent {
  uiState = UiStateService.instance;
  expandedFaq = signal<number | null>(null);

  toggleFaq(index: number) {
    this.expandedFaq.set(this.expandedFaq() === index ? null : index);
  }

  getStarsHtml(rating: number): string {
    return Array.from({ length: 5 }, (_, i) => {
      const filled = i < rating;
      return `<svg class="w-4 h-4 ${filled ? 'text-primary' : 'text-white/20'}" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>`;
    }).join('');
  }

  services: ServiceItem[] = [
    {
      icon: '👰',
      title: 'Bridal & Party Makeup',
      description: 'Comprehensive bridal and party makeup packages for your special day, including trials.',
      duration: '3 hrs',
      price: '₹2,999+',
      image: '/assets/images/gallery/gallery-3.svg',
      link: '/services/bridal-makeup',
      category: 'Bridal',
      gender: 'women',
    },
    {
      icon: '🎨',
      title: 'Hair Color & Highlights',
      description: 'Transformative color services using premium products for stunning, long-lasting results.',
      duration: '2 hrs',
      price: '₹3,500',
      image: '/assets/images/gallery/gallery-1.svg',
      link: '/services/hair-color',
      category: 'Color',
      gender: 'unisex',
    },
    {
      icon: '💫',
      title: 'Blowouts & Styling',
      description: 'Perfect blowouts and elegant styling for any occasion, from casual to special events.',
      duration: '1 hr',
      price: '₹499+',
      image: '/assets/images/gallery/gallery-4.svg',
      link: '/services',
      category: 'Styling',
      gender: 'unisex',
    },
    {
      icon: '💎',
      title: 'Hair Treatments & Spa',
      description: 'Restorative treatments that revitalize and strengthen your hair from root to tip.',
      duration: '1 hr',
      price: '₹1,500',
      image: '/assets/images/gallery/gallery-7.svg',
      link: '/services/hair-spa',
      category: 'Treatments',
      gender: 'unisex',
    },
    {
      icon: '✂️',
      title: 'Precision Haircuts',
      description: 'Expert cuts tailored to your face shape and lifestyle, executed with master-level precision for men and women.',
      duration: '45 min',
      price: '₹399+',
      image: '/assets/images/gallery/gallery-2.svg',
      link: '/services/mens-grooming',
      category: 'Hair',
      gender: 'unisex',
    },
    {
      icon: '🧔',
      title: "Men's Grooming",
      description: 'Premium grooming services including haircuts, beard trims, and facial treatments.',
      duration: '30 min',
      price: '₹349+',
      image: '/assets/images/gallery/gallery-8.svg',
      link: '/services/mens-grooming',
      category: 'Grooming',
      gender: 'men',
    },
  ];

  whyChooseUs = [
    { icon: '🏆', title: 'Beardo Award Winner', description: 'Recognized for excellence in salon services', delay: 0 },
    { icon: '⭐', title: '4.7 Google Rating', description: '543+ happy reviews from satisfied clients', delay: 100 },
    { icon: '✨', title: 'Premium Products', description: 'L\'Oreal, Moroccanoil & top professional brands', delay: 200 },
    { icon: '💯', title: 'Expert Stylists', description: 'Skilled professionals with years of experience', delay: 300 },
  ];

  statistics = [
    { number: '543+', label: 'Google Reviews' },
    { number: '7+', label: 'Years of Service' },
    { number: '4.7', label: 'Google Rating ★' },
    { number: '1000s', label: 'Happy Customers' },
  ];

  transformations = [
    { before: '/assets/images/gallery/gallery-1.svg', after: '/assets/images/gallery/gallery-5.svg', title: 'Balayage Transformation', category: 'Hair Color' },
    { before: '/assets/images/gallery/gallery-2.svg', after: '/assets/images/gallery/gallery-6.svg', title: 'Precision Cut Makeover', category: 'Haircut' },
  ];

  featuredTestimonials: Testimonial[] = [
    {
      name: 'Neha Sharma',
      role: 'Bridal Client',
      image: '/assets/images/testimonials/client-1.svg',
      content: 'I cannot thank the Hairbar team enough for my wedding look! The bridal makeup was absolutely flawless and lasted the entire day without a single touch-up.',
      rating: 5,
    },
    {
      name: 'Vikram Joshi',
      role: "Men's Grooming Client",
      image: '/assets/images/testimonials/client-5.svg',
      content: 'Hands down the best men\'s haircut I\'ve ever had in Vadodara. The precision fade and neck trim are flawless every single time.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Haircut Client',
      image: '/assets/images/testimonials/client-4.svg',
      content: 'Best haircut experience in Vadodara! The stylist took time to understand my face shape and hair texture before suggesting the perfect cut.',
      rating: 5,
    },
    {
      name: 'Anita Desai',
      role: 'Bridal Client',
      image: '/assets/images/testimonials/client-2.svg',
      content: 'My bridal makeup and hairstyle were absolutely stunning! The trial session was so thorough and they captured exactly what I envisioned.',
      rating: 5,
    },
    {
      name: 'Arjun Mehta',
      role: "Men's Grooming Client",
      image: '/assets/images/testimonials/client-6.svg',
      content: 'Finally found a barber who truly understands what I want. The precision haircut and beard shaping are top-class.',
      rating: 5,
    },
    {
      name: 'Meera Reddy',
      role: 'Facial Client',
      image: '/assets/images/testimonials/client-1.svg',
      content: 'The gold facial I got at Hairbar was pure luxury! My skin was glowing for days after the treatment.',
      rating: 5,
    },
  ];

  faqs = [
    { question: 'Do I need to book an appointment?', answer: 'While walk-ins are welcome, we recommend booking an appointment to ensure minimal wait time and guaranteed availability. You can book online or call us directly.' },
    { question: 'What products do you use?', answer: 'We use premium professional products including L\'Oreal, Moroccanoil, Wella, and other top brands to ensure the best results for your hair and skin.' },
    { question: 'How long do services typically take?', answer: 'Service times vary: haircuts 30-45 min, color services 1-3 hours, facials 45-60 min, bridal makeup 2-4 hours. We provide estimated times during booking.' },
    { question: 'Do you offer services for both men and women?', answer: 'Yes! Hairbar is a unisex salon offering a complete range of services for both men and women including haircuts, coloring, styling, skin care, and makeup.' },
    { question: 'What is your cancellation policy?', answer: 'We require 24 hours notice for cancellations. Late cancellations or no-shows may result in a fee. We understand emergencies happen and handle them case by case.' },
  ];

  galleryItems: GalleryItem[] = [
    { image: '/assets/images/gallery/gallery-1.svg', title: 'Balayage Masterpiece', category: 'Color' },
    { image: '/assets/images/gallery/gallery-2.svg', title: 'Precision Cut', category: 'Cutting' },
    { image: '/assets/images/gallery/gallery-3.svg', title: 'Bridal Elegance', category: 'Bridal' },
    { image: '/assets/images/gallery/gallery-4.svg', title: 'Blowout Perfection', category: 'Styling' },
    { image: '/assets/images/gallery/gallery-5.svg', title: 'Color Melt', category: 'Color' },
    { image: '/assets/images/gallery/gallery-6.svg', title: 'Editorial Styling', category: 'Editorial' },
    { image: '/assets/images/gallery/gallery-7.svg', title: 'Treatment Transformation', category: 'Treatment' },
    { image: '/assets/images/gallery/gallery-8.svg', title: "Men's Grooming", category: 'Grooming' },
  ];

  blogPosts: BlogPost[] = [
    {
      image: '/assets/images/blog/blog-1.svg',
      title: '2025 Hair Color Trends: What\'s In This Season',
      excerpt: 'Discover the hottest hair color trends taking over salons this season, from lived-in brunettes to vibrant coppers.',
      date: 'January 15, 2025',
      category: 'Trends',
      slug: '2025-hair-color-trends',
    },
    {
      image: '/assets/images/blog/blog-2.svg',
      title: 'The Ultimate Guide to Hair Care at Home',
      excerpt: 'Expert tips and product recommendations for maintaining salon-fresh hair between appointments.',
      date: 'January 10, 2025',
      category: 'Care Tips',
      slug: 'ultimate-hair-care-guide',
    },
    {
      image: '/assets/images/blog/blog-3.svg',
      title: 'Bridal Hair: Planning Your Perfect Wedding Look',
      excerpt: 'Everything you need to know about planning your bridal hair, from consultations to the big day.',
      date: 'January 5, 2025',
      category: 'Bridal',
      slug: 'bridal-hair-planning-guide',
    },
  ];

  instagramFeed = [
    { image: '/assets/images/instagram/insta-1.svg' },
    { image: '/assets/images/instagram/insta-2.svg' },
    { image: '/assets/images/instagram/insta-3.svg' },
    { image: '/assets/images/instagram/insta-4.svg' },
    { image: '/assets/images/instagram/insta-5.svg' },
    { image: '/assets/images/instagram/insta-6.svg' },
  ];
}