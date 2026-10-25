import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MetaService } from '../../../services/meta.service';

@Component({
  selector: 'app-hair-spa-vadodara',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 bg-dark overflow-hidden">
      <div class="absolute inset-0 opacity-20" style="background: linear-gradient(135deg, #C8A96A 0%, transparent 50%, #C8A96A 100%);"></div>
      <div class="container-custom relative z-10">
        <div class="max-w-3xl">
          <p class="font-sans text-sm text-primary uppercase tracking-[0.25em] mb-4" data-aos="fade-up">Premium Hair Care</p>
          <h1 class="font-serif text-4xl md:text-5xl lg:text-heading text-white font-bold" data-aos="fade-up" data-aos-delay="100">
            Hair Spa & Treatments in Vadodara
          </h1>
          <div class="w-16 h-0.5 bg-primary mt-6 mb-6" data-aos="fade-up" data-aos-delay="200"></div>
          <p class="text-white/70 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="300">
            Rejuvenating hair spa treatments at HairBar Unisex Salon Vadodara. Restore hair health, reduce damage, and promote growth with our premium therapies.
          </p>
        </div>
      </div>
    </section>

    <!-- Service Overview -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 class="section-title mb-6">Revitalizing Hair Spa in Vadodara</h2>
            <p class="text-dark/70 mb-6">
              At HairBar Unisex Salon on Waghodia Road, Vadodara, we offer premium hair spa treatments designed to restore, nourish, and strengthen your hair from root to tip.
            </p>
            <p class="text-dark/70 mb-8">
              Our hair spa services in Vadodara address common concerns like hair fall, dryness, damage, and frizz using advanced techniques and professional-grade products.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a routerLink="/appointment" class="btn-primary">Book Hair Spa Session</a>
              <a href="https://wa.me/918291492821" target="_blank" rel="noopener noreferrer" class="btn-secondary">
                WhatsApp for Treatment Plan
              </a>
            </div>
          </div>
          <div data-aos="fade-left" class="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <img 
              src="/assets/images/gallery/gallery-7.svg" 
              alt="Hair spa and treatment services at HairBar Salon Vadodara" 
              class="w-full h-full object-cover"
              loading="lazy"
              width="800"
              height="600"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Treatment Services -->
    <section class="section-padding bg-section">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="section-subtitle" data-aos="fade-up">Our Hair Treatments</p>
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Premium Hair Care Solutions</h2>
          <div class="gold-divider mt-6" data-aos="fade-up" data-aos-delay="200"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (treatment of spaTreatments; track treatment.title) {
            <div class="bg-white p-8 rounded-2xl shadow-premium" data-aos="fade-up">
              <div class="text-4xl mb-4">{{ treatment.icon }}</div>
              <h3 class="font-serif text-xl text-dark mb-3">{{ treatment.title }}</h3>
              <p class="text-dark/60 text-sm mb-4">{{ treatment.description }}</p>
              <div class="flex justify-between items-center pt-4 border-t border-dark/10">
                <span class="font-serif text-primary font-bold">{{ treatment.duration }}</span>
                <span class="text-dark/70 text-sm">{{ treatment.price }}</span>
              </div>
              @if (treatment.benefits.length > 0) {
                <div class="mt-4 pt-4 border-t border-dark/10">
                  <p class="text-dark/50 text-xs font-medium mb-2">Benefits:</p>
                  <p class="text-dark/60 text-xs">{{ treatment.benefits.join(', ') }}</p>
                </div>
              }
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="section-subtitle" data-aos="fade-up">Benefits</p>
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Why Choose Hair Spa in Vadodara</h2>
          <div class="gold-divider mt-6" data-aos="fade-up" data-aos-delay="200"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          @for (benefit of benefits; track benefit.title) {
            <div class="text-center" data-aos="fade-up">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">{{ benefit.icon }}</span>
              </div>
              <h3 class="font-serif text-lg text-dark mb-2">{{ benefit.title }}</h3>
              <p class="text-dark/60 text-sm">{{ benefit.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-16 bg-dark text-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="font-serif text-3xl text-white font-bold mb-4" data-aos="fade-up">Our Hair Spa Process in Vadodara</h2>
          <p class="text-white/50 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">Step-by-step approach to revitalizing your hair health</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="text-center" data-aos="fade-up">
            <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-xl">🔍</span>
            </div>
            <h3 class="font-serif text-lg text-white mb-2">1. Consultation</h3>
            <p class="text-white/60 text-sm">Hair analysis and personalized treatment plan</p>
          </div>
          <div class="text-center" data-aos="fade-up" data-aos-delay="100">
            <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-xl">🧴</span>
            </div>
            <h3 class="font-serif text-lg text-white mb-2">2. Cleansing</h3>
            <p class="text-white/60 text-sm">Deep cleansing with professional shampoos</p>
          </div>
          <div class="text-center" data-aos="fade-up" data-aos-delay="200">
            <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-xl">💆‍♀️</span>
            </div>
            <h3 class="font-serif text-lg text-white mb-2">3. Treatment</h3>
            <p class="text-white/60 text-sm">Application of nourishing masks and serums</p>
          </div>
          <div class="text-center" data-aos="fade-up" data-aos-delay="300">
            <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-xl">✨</span>
            </div>
            <h3 class="font-serif text-lg text-white mb-2">4. Results</h3>
            <p class="text-white/60 text-sm">Nourished, healthy, and manageable hair</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="section-subtitle" data-aos="fade-up">FAQ</p>
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Hair Spa Services FAQs</h2>
          <div class="gold-divider mt-6" data-aos="fade-up" data-aos-delay="200"></div>
        </div>

        <div class="max-w-3xl mx-auto space-y-4">
          @for (faq of faqs; track faq.question; let i = $index) {
            <div class="bg-section p-6 rounded-xl" data-aos="fade-up">
              <h3 class="font-serif text-lg text-dark mb-2">{{ faq.question }}</h3>
              <p class="text-dark/60 text-sm">{{ faq.answer }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-primary text-white">
      <div class="container-custom text-center">
        <h2 class="font-serif text-3xl text-white font-bold mb-6" data-aos="fade-up">Restore Your Hair Health Today</h2>
        <p class="text-white/80 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Visit our Waghodia Road salon in Vadodara for a personalized hair spa consultation. Transform dry, damaged hair into healthy, vibrant locks.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
          <a routerLink="/appointment" class="btn-primary bg-white text-dark hover:bg-dark hover:text-white">
            Book Hair Spa Session
          </a>
          <a href="tel:+917861935860" class="btn-secondary border-white text-white hover:bg-white hover:text-dark">
            Call: +91 78619 35860
          </a>
          <a routerLink="/contact" class="btn-secondary border-white text-white hover:bg-white hover:text-dark">
            Visit Our Vadodara Salon
          </a>
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
export class HairSpaVadodaraComponent {
  private metaService = inject(MetaService);

  spaTreatments = [
    {
      icon: '💎',
      title: 'Keratin Treatment',
      description: 'Smoothing treatment that reduces frizz and adds shine for up to 3 months.',
      duration: '3-4 hours',
      price: '₹4,500+',
      benefits: ['Frizz Control', 'Adds Shine', 'Straightens', '3 Month Results']
    },
    {
      icon: '💉',
      title: 'Hair Botox',
      description: 'Intensive treatment that repairs damage and restores elasticity.',
      duration: '2-3 hours',
      price: '₹3,500+',
      benefits: ['Repairs Damage', 'Restores Elasticity', 'Adds Volume', 'Nourishes']
    },
    {
      icon: '🌿',
      title: 'Moroccanoil Treatment',
      description: 'Deep conditioning with argan oil for intense hydration and shine.',
      duration: '1-2 hours',
      price: '₹2,500+',
      benefits: ['Deep Hydration', 'Adds Shine', 'Repairs Split Ends', 'Smoothness']
    },
    {
      icon: '💆‍♀️',
      title: 'Scalp Treatment',
      description: 'Therapeutic massage and treatment for dandruff, itchiness, and hair fall.',
      duration: '1 hour',
      price: '₹1,800+',
      benefits: ['Reduces Dandruff', 'Promotes Growth', 'Relieves Itch', 'Improves Health']
    },
    {
      icon: '✨',
      title: 'Gold Hair Spa',
      description: 'Luxury treatment with gold-infused products for ultimate hair rejuvenation.',
      duration: '2 hours',
      price: '₹3,000+',
      benefits: ['Anti-Aging', 'Strengthens', 'Adds Luster', 'Deep Nourishment']
    },
    {
      icon: '🌱',
      title: 'Protein Treatment',
      description: 'Rebuilds hair structure and strength for damaged, chemically treated hair.',
      duration: '1.5 hours',
      price: '₹2,200+',
      benefits: ['Rebuilds Structure', 'Strengthens', 'Reduces Breakage', 'Repairs']
    }
  ];

  benefits = [
    {
      icon: '💪',
      title: 'Strengthens Hair',
      description: 'Repairs damaged cuticles and strengthens hair from within'
    },
    {
      icon: '✨',
      title: 'Adds Shine',
      description: 'Restores natural shine and luster to dull, lifeless hair'
    },
    {
      icon: '🛡️',
      title: 'Reduces Damage',
      description: 'Protects against heat, pollution, and chemical damage'
    },
    {
      icon: '🌱',
      title: 'Promotes Growth',
      description: 'Stimulates scalp and improves blood circulation for growth'
    },
    {
      icon: '🌀',
      title: 'Controls Frizz',
      description: 'Tames frizz and flyaways for smooth, manageable hair'
    },
    {
      icon: '💧',
      title: 'Deep Hydration',
      description: 'Provides intense moisture to dry, dehydrated hair'
    },
    {
      icon: '🔧',
      title: 'Repairs Split Ends',
      description: 'Seals split ends and prevents further damage'
    },
    {
      icon: '⏱️',
      title: 'Long-Lasting Results',
      description: 'Effects last several weeks with proper maintenance'
    }
  ];

  faqs = [
    {
      question: 'How often should I get a hair spa treatment in Vadodara?',
      answer: 'We recommend every 4-6 weeks for maintenance, or every 2-3 weeks for intensive repair. Your stylist will suggest a schedule based on your hair condition during consultation at our Waghodia Road salon.'
    },
    {
      question: 'What hair concerns can hair spa treatments address?',
      answer: 'Our Vadodara salon treatments address: hair fall, dryness, dandruff, frizz, split ends, damage from coloring/straightening, lack of volume, and dullness.'
    },
    {
      question: 'How long do hair spa results last?',
      answer: 'Results typically last 3-6 weeks depending on the treatment type and your hair care routine. We provide aftercare products and tips to extend results.'
    },
    {
      question: 'Is hair spa suitable for all hair types in Vadodara?',
      answer: 'Yes! We customize treatments for all hair types - straight, wavy, curly, thick, thin, colored, natural, or chemically treated. Our Vadodara experts assess your specific needs.'
    },
    {
      question: 'What\'s the difference between keratin and hair botox?',
      answer: 'Keratin focuses on smoothing and frizz control (lasts 3 months), while hair botox repairs damage and restores elasticity (lasts 6-8 weeks). We recommend the best option during consultation.'
    }
  ];

  constructor() {
    this.metaService.updateSeoData({
      title: 'Hair Spa & Treatments in Vadodara | HairBar Unisex Salon',
      description: 'Premium hair spa treatments in Vadodara for hair fall, damage, and dryness. Keratin, hair botox, and revitalizing therapies at HairBar Salon on Waghodia Road.',
      ogTitle: 'Best Hair Spa in Vadodara | HairBar Salon',
      ogDescription: 'Professional hair spa and treatment services in Vadodara. Keratin, hair botox, and scalp treatments for healthy hair.',
      canonicalUrl: 'https://hairbarsalon.in/hair-spa-vadodara',
    });
  }
}