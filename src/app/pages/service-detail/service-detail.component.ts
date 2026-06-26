import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MetaService } from '../../services/meta.service';

export interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  overview: string;
  benefits: string[];
  process: { step: number; title: string; description: string; icon: string }[];
  faqs: { question: string; answer: string }[];
  relatedServices: { title: string; link: string; image: string }[];
  duration: string;
  price: string;
  category: string;
}

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <!-- Breadcrumb -->
    <div class="bg-dark border-b border-white/5">
      <div class="container-custom py-4">
        <nav class="flex items-center gap-2 text-sm font-sans">
          <a routerLink="/" class="text-white/50 hover:text-primary transition-colors">Home</a>
          <svg class="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
          <a routerLink="/services" class="text-white/50 hover:text-primary transition-colors">Services</a>
          <svg class="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
          <span class="text-primary">{{ service().title }}</span>
        </nav>
      </div>
    </div>

    <!-- 1. Hero Banner -->
    <section class="relative h-[60vh] min-h-[500px] overflow-hidden">
      <div class="absolute inset-0">
        <img [src]="service().heroImage" [alt]="service().title" class="w-full h-full object-cover"/>
        <div class="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/70 to-transparent"></div>
      </div>
      <div class="relative z-10 h-full flex items-center">
        <div class="container-custom w-full">
          <div class="max-w-3xl">
            <p class="font-sans text-sm text-primary uppercase tracking-[0.25em] mb-4" data-aos="fade-up">
              {{ service().category }}
            </p>
            <h1 class="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4" data-aos="fade-up" data-aos-delay="100">
              {{ service().title }}
            </h1>
            <div class="w-20 h-0.5 bg-primary mb-6" data-aos="fade-up" data-aos-delay="200"></div>
            <p class="text-white/70 text-lg max-w-2xl leading-relaxed" data-aos="fade-up" data-aos-delay="300">
              {{ service().subtitle }}
            </p>
            <div class="flex flex-wrap gap-4 mt-8" data-aos="fade-up" data-aos-delay="400">
              <div class="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3">
                <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-white font-sans text-sm">{{ service().duration }}</span>
              </div>
              <div class="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3">
                <span class="text-primary font-serif text-xl font-bold">Starting at</span>
                <span class="text-white font-serif text-2xl font-bold">{{ service().price }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Overview -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <p class="section-subtitle">Overview</p>
            <h2 class="section-title">What We Offer</h2>
            <div class="w-16 h-0.5 bg-primary mt-6 mb-8"></div>
            <p class="text-dark/70 leading-relaxed text-lg">{{ service().overview }}</p>
            <a routerLink="/appointment" class="btn-primary mt-8 inline-flex">
              Book Appointment
            </a>
          </div>
          <div class="grid grid-cols-2 gap-4" data-aos="fade-left">
            @for (benefit of service().benefits; track benefit) {
              <div class="bg-section p-6 text-center group hover:bg-primary/10 transition-colors duration-300">
                <div class="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <p class="font-sans text-sm text-dark/80 font-medium">{{ benefit }}</p>
              </div>
            }
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Service Process -->
    <section class="section-padding bg-dark text-white">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="font-sans text-sm text-primary uppercase tracking-[0.25em] mb-4" data-aos="fade-up">The Process</p>
          <h2 class="font-serif text-4xl md:text-heading text-white font-bold" data-aos="fade-up" data-aos-delay="100">How It Works</h2>
          <div class="w-16 h-0.5 bg-primary mx-auto mt-6 mb-6" data-aos="fade-up" data-aos-delay="200"></div>
          <p class="text-white/60 text-lg" data-aos="fade-up" data-aos-delay="300">Your journey to a stunning transformation</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          @for (step of service().process; track step.step) {
            <div class="relative group" data-aos="fade-up" [style.animation-delay]="step.step * 100 + 'ms'">
              <!-- Step Number -->
              <div class="text-6xl font-serif font-bold text-white/5 absolute -top-4 -right-4 group-hover:text-primary/10 transition-colors duration-500">
                0{{ step.step }}
              </div>
              <!-- Icon -->
              <div class="w-16 h-16 mb-6 flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors duration-500">
                <span class="text-3xl">{{ step.icon }}</span>
              </div>
              <h3 class="font-serif text-xl text-white mb-3">{{ step.title }}</h3>
              <p class="text-white/50 text-sm leading-relaxed">{{ step.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- 4. FAQ Section -->
    <section class="section-padding bg-section">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="section-subtitle" data-aos="fade-up">FAQ</p>
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Frequently Asked Questions</h2>
          <div class="gold-divider mt-6" data-aos="fade-up" data-aos-delay="200"></div>
        </div>
        <div class="max-w-3xl mx-auto space-y-4">
          @for (faq of service().faqs; track faq.question; let i = $index) {
            <div class="bg-white card-premium overflow-hidden" data-aos="fade-up" [style.animation-delay]="i * 50 + 'ms'">
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

    <!-- 5. Related Services -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="section-subtitle" data-aos="fade-up">Explore More</p>
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Related Services</h2>
          <div class="gold-divider mt-6" data-aos="fade-up" data-aos-delay="200"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          @for (related of service().relatedServices; track related.title) {
            <a
              [routerLink]="related.link"
              class="group block relative overflow-hidden card-premium"
              data-aos="fade-up"
            >
              <div class="aspect-[4/3] overflow-hidden">
                <img [src]="related.image" [alt]="related.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy"/>
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <h3 class="font-serif text-xl text-white mb-2">{{ related.title }}</h3>
                <span class="text-primary text-sm font-sans uppercase tracking-[0.15em] group-hover:tracking-[0.2em] transition-all">
                  Learn More
                  <svg class="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </a>
          }
        </div>
      </div>
    </section>

    <!-- 6. Book Appointment CTA -->
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
  styles: [`
    :host { display: block; }
    .card-premium {
      background: white;
      transition: all 0.5s ease;
    }
    .card-premium:hover {
      box-shadow: 0 20px 80px rgba(0, 0, 0, 0.12);
      transform: translateY(-4px);
    }
  `]
})
export class ServiceDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private metaService = inject(MetaService);

  expandedFaq = signal<number | null>(null);

  toggleFaq(index: number) {
    this.expandedFaq.set(this.expandedFaq() === index ? null : index);
  }

  services: Record<string, ServiceDetail> = {
    'mens-grooming': {
      slug: 'mens-grooming',
      title: "Men's Grooming",
      subtitle: 'Premium grooming services including precision haircuts, beard styling, and facial treatments designed for the modern man.',
      heroImage: '/assets/images/services/mens-grooming-hero.jpg',
      category: 'Grooming',
      duration: '30 - 60 min',
      price: '₹349+',
      overview: 'Experience the ultimate in men\'s grooming at Hairbar Unisex Salon. Our expert barbers and stylists specialize in precision haircuts, beard shaping, and facial treatments tailored to your unique style. We use premium products and techniques to ensure you leave looking and feeling your absolute best. From classic cuts to modern styles, we\'ve got you covered.',
      benefits: [
        'Precision haircuts tailored to your face shape',
        'Expert beard shaping & styling',
        'Premium grooming products used',
        'Hot towel & straight razor finish',
        'Relaxing head massage included',
        'Style consultation with every visit',
      ],
      process: [
        { step: 1, title: 'Consultation', description: 'Discuss your style preferences, face shape, and lifestyle needs.', icon: '💬' },
        { step: 2, title: 'Hair Wash', description: 'Premium shampoo and conditioning with relaxing head massage.', icon: '🚿' },
        { step: 3, title: 'Precision Cut', description: 'Expert cutting technique tailored to your desired style.', icon: '✂️' },
        { step: 4, title: 'Finish & Style', description: 'Perfect styling with premium products for a flawless finish.', icon: '✨' },
      ],
      faqs: [
        { question: 'How long does a men\'s haircut take?', answer: 'A standard haircut takes approximately 30-45 minutes. If you\'re adding beard grooming or a facial, allow 45-60 minutes for the complete experience.' },
        { question: 'Do I need to book an appointment?', answer: 'While walk-ins are welcome, we recommend booking an appointment to ensure minimal wait time and guaranteed availability.' },
        { question: 'What products do you use?', answer: 'We use premium professional products including L\'Oreal, Moroccanoil, and other top brands to ensure the best results for your hair and skin.' },
        { question: 'Can I get a beard trim with my haircut?', answer: 'Absolutely! Our beard grooming service pairs perfectly with any haircut. Ask about our complete grooming package.' },
      ],
      relatedServices: [
        { title: 'Hair Color', link: '/services/hair-color', image: '/assets/images/gallery/gallery-3.svg' },
        { title: 'Facial Treatments', link: '/services/facial-treatment', image: '/assets/images/gallery/gallery-7.svg' },
        { title: 'Hair Spa', link: '/services/hair-spa', image: '/assets/images/gallery/gallery-4.svg' },
      ],
    },
    'hair-color': {
      slug: 'hair-color',
      title: 'Hair Color & Highlights',
      subtitle: 'Transformative color services using premium products for stunning, long-lasting results.',
      heroImage: '/assets/images/services/hair-color-hero.jpg',
      category: 'Color',
      duration: '1 - 3 hrs',
      price: '₹999+',
      overview: 'Discover your perfect shade at Hairbar Unisex Salon. Our expert colorists use premium L\'Oreal and Wella products to create stunning, dimensional hair color that lasts. Whether you want natural highlights, bold fashion colors, or a complete color transformation, we bring your vision to life with precision and care.',
      benefits: [
        'Premium L\'Oreal & Wella color products',
        'Damage-free color techniques',
        'Custom shade formulation',
        'Root touch-ups and full color',
        'Balayage & ombre specialists',
        'Color protection advice included',
      ],
      process: [
        { step: 1, title: 'Color Consultation', description: 'Discuss your desired shade, maintenance level, and lifestyle.', icon: '🎨' },
        { step: 2, title: 'Strand Test', description: 'Test color on a small section for perfect shade matching.', icon: '🔬' },
        { step: 3, title: 'Color Application', description: 'Expert application using premium products for even coverage.', icon: '🖌️' },
        { step: 4, title: 'Toning & Finish', description: 'Perfect toner application followed by nourishing treatment.', icon: '✨' },
      ],
      faqs: [
        { question: 'How long does hair color last?', answer: 'Professional hair color typically lasts 4-6 weeks depending on hair type, maintenance, and product usage. We recommend color-safe products to extend longevity.' },
        { question: 'Can I color my hair if it\'s damaged?', answer: 'Yes, but we recommend a hair treatment first. Our colorists will assess your hair health and recommend the best approach for beautiful, healthy results.' },
        { question: 'What is balayage vs highlights?', answer: 'Balayage is a freehand painting technique for soft, natural-looking color, while highlights use foils for more defined, dimensional results. Our colorists can help you choose.' },
        { question: 'Do you offer ammonia-free color?', answer: 'Yes! We offer both ammonia and ammonia-free color options. Discuss your preferences during your consultation.' },
      ],
      relatedServices: [
        { title: "Men's Grooming", link: '/services/mens-grooming', image: '/assets/images/gallery/gallery-8.svg' },
        { title: 'Hair Spa', link: '/services/hair-spa', image: '/assets/images/gallery/gallery-4.svg' },
        { title: 'Bridal Makeup', link: '/services/bridal-makeup', image: '/assets/images/gallery/gallery-3.svg' },
      ],
    },
    'hair-spa': {
      slug: 'hair-spa',
      title: 'Hair Spa & Treatments',
      subtitle: 'Restorative treatments that revitalize and strengthen your hair from root to tip.',
      heroImage: '/assets/images/services/hair-spa-hero.jpg',
      category: 'Treatments',
      duration: '45 - 90 min',
      price: '₹699+',
      overview: 'Treat your hair to the luxury it deserves with our comprehensive hair spa and treatment services. From deep conditioning to keratin smoothing, our restorative treatments address every hair concern. Using premium products and advanced techniques, we revitalize damaged hair, reduce frizz, and restore natural shine and vitality.',
      benefits: [
        'Deep conditioning & nourishment',
        'Keratin smoothing treatments',
        'Scalp treatments & detox',
        'Frizz control & shine enhancement',
        'Damage repair & strengthening',
        'Premium product recommendations',
      ],
      process: [
        { step: 1, title: 'Hair Analysis', description: 'Thorough assessment of hair condition and treatment needs.', icon: '🔍' },
        { step: 2, title: 'Deep Cleanse', description: 'Clarifying shampoo to remove buildup and prepare hair.', icon: '🧴' },
        { step: 3, title: 'Treatment Application', description: 'Targeted treatment applied with steam for deep penetration.', icon: '💆' },
        { step: 4, title: 'Finish & Style', description: 'Rinse, condition, and style for instant visible results.', icon: '✨' },
      ],
      faqs: [
        { question: 'How often should I get a hair spa?', answer: 'For best results, we recommend a hair spa treatment every 2-4 weeks depending on your hair type and concerns.' },
        { question: 'Is keratin treatment safe for all hair types?', answer: 'Yes, keratin treatments are safe for most hair types. Our stylists will assess your hair and recommend the best treatment option.' },
        { question: 'How long does a hair spa treatment last?', answer: 'A standard hair spa takes 45-60 minutes. Keratin treatments may take 1.5-2 hours for complete application and processing.' },
        { question: 'Can I color my hair after a treatment?', answer: 'We recommend waiting at least one week after a deep conditioning treatment before coloring. Your stylist will guide you on timing.' },
      ],
      relatedServices: [
        { title: 'Hair Color', link: '/services/hair-color', image: '/assets/images/gallery/gallery-3.svg' },
        { title: "Men's Grooming", link: '/services/mens-grooming', image: '/assets/images/gallery/gallery-8.svg' },
        { title: 'Facial Treatments', link: '/services/facial-treatment', image: '/assets/images/gallery/gallery-7.svg' },
      ],
    },
    'facial-treatment': {
      slug: 'facial-treatment',
      title: 'Facial Treatments',
      subtitle: 'Rejuvenating facial treatments for glowing, radiant skin tailored to your skin type.',
      heroImage: '/assets/images/services/facial-hero.jpg',
      category: 'Skin Care',
      duration: '45 - 75 min',
      price: '₹599+',
      overview: 'Achieve radiant, glowing skin with our premium facial treatments at Hairbar Unisex Salon. Our experienced estheticians use top-quality products to address your specific skin concerns. From deep cleansing facials to anti-aging treatments, we customize every experience for your unique skin type and goals.',
      benefits: [
        'Deep cleansing & exfoliation',
        'Customized for your skin type',
        'Premium skincare products used',
        'Anti-aging & brightening treatments',
        'Relaxing facial massage',
        'Professional skincare advice',
      ],
      process: [
        { step: 1, title: 'Skin Analysis', description: 'Assess skin type, concerns, and treatment goals.', icon: '🔍' },
        { step: 2, title: 'Cleanse & Exfoliate', description: 'Deep cleansing and gentle exfoliation for smooth skin.', icon: '🧼' },
        { step: 3, title: 'Mask & Massage', description: 'Targeted mask application with relaxing facial massage.', icon: '💆' },
        { step: 4, title: 'Moisturize & Protect', description: 'Hydrating finish with SPF and skincare recommendations.', icon: '✨' },
      ],
      faqs: [
        { question: 'How often should I get a facial?', answer: 'For optimal results, we recommend a facial every 3-4 weeks to maintain healthy, glowing skin.' },
        { question: 'Are your products suitable for sensitive skin?', answer: 'Yes! We offer treatments specifically designed for sensitive skin using gentle, hypoallergenic products.' },
        { question: 'How long does a facial take?', answer: 'Our standard facial treatments take 45-60 minutes. Premium facials with additional treatments take 60-75 minutes.' },
        { question: 'What should I do after a facial?', answer: 'Avoid touching your face, direct sun exposure, and heavy makeup for 24 hours. Use the recommended skincare products for best results.' },
      ],
      relatedServices: [
        { title: 'Bridal Makeup', link: '/services/bridal-makeup', image: '/assets/images/gallery/gallery-3.svg' },
        { title: "Men's Grooming", link: '/services/mens-grooming', image: '/assets/images/gallery/gallery-8.svg' },
        { title: 'Hair Spa', link: '/services/hair-spa', image: '/assets/images/gallery/gallery-4.svg' },
      ],
    },
    'bridal-makeup': {
      slug: 'bridal-makeup',
      title: 'Bridal Makeup',
      subtitle: 'Comprehensive bridal makeup packages for your special day, including trial sessions.',
      heroImage: '/assets/images/services/bridal-hero.jpg',
      category: 'Bridal',
      duration: '2 - 4 hrs',
      price: '₹2,999+',
      overview: 'Your wedding day deserves nothing but the best. At Hairbar Unisex Salon, our bridal makeup artists create stunning looks that photograph beautifully and last all day. From traditional to contemporary styles, we work closely with you to design the perfect bridal look. Our packages include trial sessions, complete bridal party styling, and on-location services.',
      benefits: [
        'Professional bridal makeup artists',
        'High-definition, photography-ready finish',
        'Long-lasting, smudge-proof formulas',
        'Trial session included',
        'Bridal party packages available',
        'On-location service available',
      ],
      process: [
        { step: 1, title: 'Consultation', description: 'Discuss your wedding theme, dress, and desired look.', icon: '💬' },
        { step: 2, title: 'Trial Session', description: 'Full trial run to perfect your bridal look.', icon: '🎨' },
        { step: 3, title: 'Wedding Day Prep', description: 'Skincare preparation and base application.', icon: '✨' },
        { step: 4, title: 'Final Look', description: 'Complete makeup application with touch-up kit.', icon: '👰' },
      ],
      faqs: [
        { question: 'When should I book my bridal makeup?', answer: 'We recommend booking at least 2-3 months in advance, especially during wedding season. This ensures availability for your preferred date.' },
        { question: 'Is a trial session included?', answer: 'Yes! All our bridal packages include a trial session to ensure we create your perfect look.' },
        { question: 'Do you do bridal party makeup?', answer: 'Absolutely! We offer complete bridal party packages including bridesmaids, mother of the bride, and other family members.' },
        { question: 'Do you use specific bridal makeup products?', answer: 'Yes, we use high-definition, photography-friendly products that ensure flawless results in person and in photos.' },
      ],
      relatedServices: [
        { title: 'Facial Treatments', link: '/services/facial-treatment', image: '/assets/images/gallery/gallery-7.svg' },
        { title: 'Hair Color', link: '/services/hair-color', image: '/assets/images/gallery/gallery-3.svg' },
        { title: 'Hair Spa', link: '/services/hair-spa', image: '/assets/images/gallery/gallery-4.svg' },
      ],
    },
  };

  service = signal<ServiceDetail>(this.services['mens-grooming']);

  ngOnInit() {
    this.route.data.subscribe((data) => {
      const slug = data['serviceSlug'] || 'mens-grooming';
      if (this.services[slug]) {
        this.service.set(this.services[slug]);
        const svc = this.services[slug];

        // Update meta tags
        this.metaService.updateSeoData({
          title: `${svc.title} | Hairbar Unisex Salon`,
          description: svc.subtitle,
          ogTitle: `${svc.title} | Hairbar Unisex Salon - Vadodara`,
          ogDescription: svc.subtitle,
        });

        // BreadcrumbList structured data
        this.metaService.addStructuredData({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hairbar.in/' },
            { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://hairbar.in/services' },
            { '@type': 'ListItem', position: 3, name: svc.title, item: `https://hairbar.in/services/${slug}` },
          ],
        });
      }
    });
  }
}