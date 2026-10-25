import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MetaService } from '../../../services/meta.service';

@Component({
  selector: 'app-hair-colour-vadodara',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 bg-dark overflow-hidden">
      <div class="absolute inset-0 opacity-20" style="background: linear-gradient(135deg, #C8A96A 0%, transparent 50%, #C8A96A 100%);"></div>
      <div class="container-custom relative z-10">
        <div class="max-w-3xl">
          <p class="font-sans text-sm text-primary uppercase tracking-[0.25em] mb-4" data-aos="fade-up">Premium Color Services</p>
          <h1 class="font-serif text-4xl md:text-5xl lg:text-heading text-white font-bold" data-aos="fade-up" data-aos-delay="100">
            Hair Color & Highlights in Vadodara
          </h1>
          <div class="w-16 h-0.5 bg-primary mt-6 mb-6" data-aos="fade-up" data-aos-delay="200"></div>
          <p class="text-white/70 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="300">
            Transform your look with professional hair coloring services at HairBar Unisex Salon Vadodara. Balayage, highlights, global color, and more using L'Oreal products.
          </p>
        </div>
      </div>
    </section>

    <!-- Service Overview -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 class="section-title mb-6">Expert Hair Coloring in Vadodara</h2>
            <p class="text-dark/70 mb-6">
              At HairBar Unisex Salon on Waghodia Road, Vadodara, we specialize in premium hair coloring services using L'Oreal Professionnel products. Our expert colorists create stunning, natural-looking results tailored to your skin tone and personal style.
            </p>
            <p class="text-dark/70 mb-8">
              From subtle highlights to bold fashion colors, our Vadodara salon offers complete color correction, root touch-ups, and creative coloring techniques in a luxurious, comfortable environment.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a routerLink="/appointment" class="btn-primary">Book Color Consultation</a>
              <a href="https://wa.me/918291492821" target="_blank" rel="noopener noreferrer" class="btn-secondary bg-[#25D366] hover:bg-[#1DA851] text-white border-[#25D366]">
                WhatsApp for Quote
              </a>
            </div>
          </div>
          <div data-aos="fade-left" class="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <img 
              src="/assets/images/gallery/gallery-1.svg" 
              alt="Hair coloring and highlights at HairBar Salon Vadodara" 
              class="w-full h-full object-cover"
              loading="lazy"
              width="800"
              height="600"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Color Services -->
    <section class="section-padding bg-section">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="section-subtitle" data-aos="fade-up">Our Color Services</p>
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Premium Hair Coloring Options</h2>
          <div class="gold-divider mt-6" data-aos="fade-up" data-aos-delay="200"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (service of colorServices; track service.title) {
            <div class="bg-white p-8 rounded-2xl shadow-premium" data-aos="fade-up">
              <div class="text-4xl mb-4">{{ service.icon }}</div>
              <h3 class="font-serif text-xl text-dark mb-3">{{ service.title }}</h3>
              <p class="text-dark/60 text-sm mb-4">{{ service.description }}</p>
              <div class="flex justify-between items-center pt-4 border-t border-dark/10">
                <span class="font-serif text-primary font-bold">{{ service.duration }}</span>
                <span class="text-dark/70 text-sm">Starting {{ service.price }}</span>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Why Choose Our Color Services -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="section-subtitle" data-aos="fade-up">Why HairBar Vadodara</p>
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Best Hair Color Salon in Vadodara</h2>
          <div class="gold-divider mt-6" data-aos="fade-up" data-aos-delay="200"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          @for (reason of whyReasons; track reason.title) {
            <div class="flex gap-4" data-aos="fade-up">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-xl">{{ reason.icon }}</span>
              </div>
              <div>
                <h3 class="font-serif text-lg text-dark mb-2">{{ reason.title }}</h3>
                <p class="text-dark/60 text-sm">{{ reason.description }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Color Brands -->
    <section class="py-16 bg-dark">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="font-serif text-3xl text-white font-bold mb-4" data-aos="fade-up">Premium Color Brands We Use</h2>
          <p class="text-white/50" data-aos="fade-up" data-aos-delay="100">Trusted professional products for stunning, long-lasting results</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8" data-aos="fade-up">
          <div class="text-center">
            <div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">🧴</span>
            </div>
            <p class="text-white font-medium">L'Oreal Professionnel</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">💎</span>
            </div>
            <p class="text-white font-medium">Moroccanoil</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">✨</span>
            </div>
            <p class="text-white font-medium">Wella Professionals</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">🌟</span>
            </div>
            <p class="text-white font-medium">Schwarzkopf</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="section-subtitle" data-aos="fade-up">FAQ</p>
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Hair Color Services FAQs</h2>
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
        <h2 class="font-serif text-3xl text-white font-bold mb-6" data-aos="fade-up">Ready for a Color Transformation?</h2>
        <p class="text-white/80 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Book a consultation with our expert colorists at our Waghodia Road, Vadodara salon. We'll help you choose the perfect shade and technique for your hair.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
          <a routerLink="/appointment" class="btn-primary bg-white text-dark hover:bg-dark hover:text-white">
            Book Color Appointment
          </a>
          <a href="tel:+917861935860" class="btn-secondary border-white text-white hover:bg-white hover:text-dark">
            Call: +91 78619 35860
          </a>
          <a routerLink="/contact" class="btn-secondary border-white text-white hover:bg-white hover:text-dark">
            Visit Our Salon
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
export class HairColourVadodaraComponent {
  private metaService = inject(MetaService);

  colorServices = [
    {
      icon: '🎨',
      title: 'Global Hair Color',
      description: 'Complete hair coloring with L\'Oreal products for uniform, vibrant color.',
      duration: '2-3 hours',
      price: '₹2,500+'
    },
    {
      icon: '✨',
      title: 'Balayage & Highlights',
      description: 'Hand-painted highlights for natural, sun-kissed look with smooth transitions.',
      duration: '3-4 hours',
      price: '₹3,500+'
    },
    {
      icon: '💫',
      title: 'Root Touch Up',
      description: 'Professional root coverage to maintain your color between full applications.',
      duration: '1-2 hours',
      price: '₹1,500+'
    },
    {
      icon: '🔄',
      title: 'Color Correction',
      description: 'Expert correction of bad color jobs, brassiness, or uneven coloring.',
      duration: '3-5 hours',
      price: '₹4,000+'
    },
    {
      icon: '🌈',
      title: 'Fashion Colors',
      description: 'Vibrant fashion shades like pastels, vivids, and creative color designs.',
      duration: '3-4 hours',
      price: '₹4,500+'
    },
    {
      icon: '👵',
      title: 'Gray Coverage',
      description: 'Specialized techniques for complete and natural-looking gray coverage.',
      duration: '2-3 hours',
      price: '₹2,800+'
    }
  ];

  whyReasons = [
    {
      icon: '🎨',
      title: 'Expert Colorists in Vadodara',
      description: 'Our Vadodara-based colorists specialize in L\'Oreal coloring techniques with 5+ years experience.'
    },
    {
      icon: '🧪',
      title: 'L\'Oreal Professionnel Products',
      description: 'We use only premium L\'Oreal color products for vibrant, long-lasting results.'
    },
    {
      icon: '📐',
      title: 'Personalized Color Analysis',
      description: 'Detailed consultation analyzing skin tone, eye color, and lifestyle for perfect shade selection.'
    },
    {
      icon: '🛡️',
      title: 'Damage Protection',
      description: 'Advanced techniques and products to minimize damage and maintain hair health.'
    },
    {
      icon: '⏱️',
      title: 'Long-Lasting Results',
      description: 'Professional application ensures color lasts longer with proper aftercare guidance.'
    },
    {
      icon: '📍',
      title: 'Convenient Vadodara Location',
      description: 'Easy to reach from Parivar Char Rasta and Waghodia Road with ample parking.'
    }
  ];

  faqs = [
    {
      question: 'How long does hair color last at your Vadodara salon?',
      answer: 'With proper application and aftercare, our L\'Oreal color lasts 6-8 weeks. We provide maintenance tips and recommend touch-up services to keep your color vibrant.'
    },
    {
      question: 'Do you offer color consultations in Vadodara?',
      answer: 'Yes! Every color service includes a complimentary consultation at our Waghodia Road salon. We analyze your hair, discuss options, and create a personalized color plan.'
    },
    {
      question: 'What brands of hair color do you use?',
      answer: 'We exclusively use premium professional brands: L\'Oreal Professionnel for most services, complemented by Moroccanoil, Wella, and Schwarzkopf for specific techniques.'
    },
    {
      question: 'Can you fix bad hair color from other salons?',
      answer: 'Yes, our expert colorists specialize in color correction. We assess the damage and create a plan to restore your hair health while achieving your desired color.'
    },
    {
      question: 'How much does hair coloring cost in Vadodara?',
      answer: 'Prices start at ₹1,500 for root touch-ups and go up to ₹4,500+ for complex techniques like balayage. Exact pricing depends on hair length, density, and desired technique.'
    }
  ];

  constructor() {
    this.metaService.updateSeoData({
      title: 'Hair Color & Highlights in Vadodara | HairBar Unisex Salon',
      description: 'Professional hair coloring services in Vadodara using L\'Oreal products. Balayage, highlights, global color, and color correction at HairBar Salon on Waghodia Road.',
      ogTitle: 'Best Hair Color Salon in Vadodara | HairBar Salon',
      ogDescription: 'Premium hair coloring and highlights in Vadodara. Expert colorists, L\'Oreal products, and personalized consultations.',
      canonicalUrl: 'https://hairbarsalon.in/hair-colour-vadodara',
    });
  }
}