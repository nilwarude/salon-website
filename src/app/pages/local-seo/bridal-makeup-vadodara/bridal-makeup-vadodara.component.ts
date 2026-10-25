import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MetaService } from '../../../services/meta.service';

@Component({
  selector: 'app-bridal-makeup-vadodara',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 bg-dark overflow-hidden">
      <div class="absolute inset-0 opacity-20" style="background: linear-gradient(135deg, #C8A96A 0%, transparent 50%, #C8A96A 100%);"></div>
      <div class="container-custom relative z-10">
        <div class="max-w-3xl">
          <p class="font-sans text-sm text-primary uppercase tracking-[0.25em] mb-4" data-aos="fade-up">Premium Bridal Services</p>
          <h1 class="font-serif text-4xl md:text-5xl lg:text-heading text-white font-bold" data-aos="fade-up" data-aos-delay="100">
            Bridal Makeup & Hairstyling in Vadodara
          </h1>
          <div class="w-16 h-0.5 bg-primary mt-6 mb-6" data-aos="fade-up" data-aos-delay="200"></div>
          <p class="text-white/70 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="300">
            Complete bridal makeup and hairstyling packages for your special day at HairBar Unisex Salon Vadodara. Expert artists, premium products, and personalized consultations.
          </p>
        </div>
      </div>
    </section>

    <!-- Service Overview -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 class="section-title mb-6">Complete Bridal Makeup in Vadodara</h2>
            <p class="text-dark/70 mb-6">
              At HairBar Unisex Salon on Waghodia Road, Vadodara, we specialize in creating stunning bridal looks that last through your entire celebration. Our expert makeup artists understand Gujarati, North Indian, and modern wedding aesthetics.
            </p>
            <p class="text-dark/70 mb-8">
              From traditional to contemporary styles, we work closely with Vadodara brides to create personalized makeup and hairstyling that enhances natural beauty while staying true to cultural traditions.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a routerLink="/appointment" class="btn-primary">Book Bridal Consultation</a>
              <a href="https://wa.me/918291492821" target="_blank" rel="noopener noreferrer" class="btn-secondary">
                WhatsApp for Package Details
              </a>
            </div>
          </div>
          <div data-aos="fade-left" class="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <img 
              src="/assets/images/gallery/gallery-3.svg" 
              alt="Bridal makeup and hairstyling services at HairBar Salon Vadodara" 
              class="w-full h-full object-cover"
              loading="lazy"
              width="800"
              height="600"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Bridal Packages -->
    <section class="section-padding bg-section">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="section-subtitle" data-aos="fade-up">Our Bridal Packages</p>
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Complete Bridal Services in Vadodara</h2>
          <div class="gold-divider mt-6" data-aos="fade-up" data-aos-delay="200"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          @for (package of bridalPackages; track package.title) {
            <div class="bg-white rounded-2xl shadow-premium overflow-hidden" data-aos="fade-up">
              <div class="p-8">
                <div class="text-4xl mb-4">{{ package.icon }}</div>
                <h3 class="font-serif text-xl text-dark mb-3">{{ package.title }}</h3>
                <p class="text-dark/60 text-sm mb-6">{{ package.description }}</p>
                
                <div class="space-y-3 mb-6">
                  @for (feature of package.features; track feature) {
                    <div class="flex items-center gap-2">
                      <svg class="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                      <span class="text-dark/70 text-sm">{{ feature }}</span>
                    </div>
                  }
                </div>

                <div class="text-center">
                  <span class="font-serif text-2xl text-primary font-bold block mb-2">{{ package.price }}</span>
                  <a routerLink="/appointment" class="btn-primary w-full">Book This Package</a>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Process Timeline -->
    <section class="py-16 bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="font-serif text-3xl text-dark font-bold mb-4" data-aos="fade-up">Our Bridal Makeup Process in Vadodara</h2>
          <p class="text-dark/50 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">Step-by-step approach to creating your perfect bridal look</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="text-center" data-aos="fade-up">
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-xl">💬</span>
            </div>
            <h3 class="font-serif text-lg text-dark mb-2">1. Consultation</h3>
            <p class="text-dark/60 text-sm">Detailed discussion about your vision, outfits, and preferences</p>
          </div>
          <div class="text-center" data-aos="fade-up" data-aos-delay="100">
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-xl">🎨</span>
            </div>
            <h3 class="font-serif text-lg text-dark mb-2">2. Trial Session</h3>
            <p class="text-dark/60 text-sm">Full makeup and hair trial to finalize your look</p>
          </div>
          <div class="text-center" data-aos="fade-up" data-aos-delay="200">
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-xl">👰</span>
            </div>
            <h3 class="font-serif text-lg text-dark mb-2">3. Wedding Day</h3>
            <p class="text-dark/60 text-sm">Professional application at your venue or our Vadodara salon</p>
          </div>
          <div class="text-center" data-aos="fade-up" data-aos-delay="300">
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-xl">✨</span>
            </div>
            <h3 class="font-serif text-lg text-dark mb-2">4. Touch-ups</h3>
            <p class="text-dark/60 text-sm">On-site touch-ups throughout your wedding events</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="section-padding bg-dark text-white">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="section-subtitle text-primary" data-aos="fade-up">Why HairBar Vadodara</p>
          <h2 class="section-title text-white" data-aos="fade-up" data-aos-delay="100">Best Bridal Makeup in Vadodara</h2>
          <div class="gold-divider mt-6" data-aos="fade-up" data-aos-delay="200"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (reason of whyReasons; track reason.title) {
            <div class="bg-white/5 p-6 rounded-xl backdrop-blur-sm" data-aos="fade-up">
              <div class="text-2xl mb-3">{{ reason.icon }}</div>
              <h3 class="font-serif text-lg text-white mb-2">{{ reason.title }}</h3>
              <p class="text-white/60 text-sm">{{ reason.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="section-subtitle" data-aos="fade-up">FAQ</p>
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Bridal Makeup Services FAQs</h2>
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
        <h2 class="font-serif text-3xl text-white font-bold mb-6" data-aos="fade-up">Book Your Bridal Makeup in Vadodara</h2>
        <p class="text-white/80 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Schedule a consultation at our Waghodia Road salon in Vadodara. Let us create the perfect bridal look that reflects your personality and enhances your natural beauty.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
          <a routerLink="/appointment" class="btn-primary bg-white text-dark hover:bg-dark hover:text-white">
            Book Bridal Consultation
          </a>
          <a href="tel:+917861935860" class="btn-secondary border-white text-white hover:bg-white hover:text-dark">
            Call: +91 78619 35860
          </a>
          <a routerLink="/wedding-season" class="btn-secondary border-white text-white hover:bg-white hover:text-dark">
            Wedding Season Offers
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
export class BridalMakeupVadodaraComponent {
  private metaService = inject(MetaService);

  bridalPackages = [
    {
      icon: '👰',
      title: 'Basic Bridal Package',
      description: 'Perfect for intimate weddings or engagement ceremonies in Vadodara.',
      price: '₹7,999',
      features: [
        'Bridal Makeup Application',
        'Simple Hairstyling',
        'Basic Trial Session',
        'Lasts 6-8 Hours',
        'Touch-up Kit'
      ]
    },
    {
      icon: '💫',
      title: 'Premium Bridal Package',
      description: 'Our most popular package for Gujarati and North Indian weddings in Vadodara.',
      price: '₹14,999',
      features: [
        'Complete Bridal Makeup',
        'Elaborate Hairstyling',
        '2 Trial Sessions',
        'Lasts 12+ Hours',
        'On-site Touch-ups',
        'Bridal Assistant'
      ]
    },
    {
      icon: '✨',
      title: 'Luxury Bridal Package',
      description: 'Ultimate bridal experience with multiple events and premium services.',
      price: '₹24,999',
      features: [
        'Complete Bridal Makeup',
        'Expert Hairstyling',
        '3 Trial Sessions',
        'Multiple Events Coverage',
        'Personal Makeup Artist',
        'Premium Products',
        'Emergency Kit',
        'Pre-wedding Skincare'
      ]
    }
  ];

  whyReasons = [
    {
      icon: '🎨',
      title: 'Expert Makeup Artists',
      description: 'Our Vadodara artists specialize in Gujarati and North Indian bridal looks with 8+ years experience.'
    },
    {
      icon: '💎',
      title: 'Premium Products',
      description: 'We use MAC, Bobbi Brown, Dior, and other luxury brands for flawless, long-lasting results.'
    },
    {
      icon: '📸',
      title: 'Photography-Friendly',
      description: 'Makeup designed to look perfect in photos and videos, with HD-friendly formulas.'
    },
    {
      icon: '🌡️',
      title: 'Long-Lasting Formulas',
      description: 'Special techniques and products that withstand Vadodara climate and long wedding hours.'
    },
    {
      icon: '👗',
      title: 'Outfit Coordination',
      description: 'We coordinate makeup and hair with your wedding outfits, jewelry, and theme.'
    },
    {
      icon: '📍',
      title: 'Convenient Vadodara Location',
      description: 'Easy access from all Vadodara areas with spacious facilities for bridal parties.'
    }
  ];

  faqs = [
    {
      question: 'How far in advance should I book bridal makeup in Vadodara?',
      answer: 'We recommend booking 3-6 months in advance, especially for peak wedding seasons (Nov-Feb). Early booking ensures availability of your preferred artist at our Waghodia Road salon.'
    },
    {
      question: 'Do you offer trial sessions for bridal makeup?',
      answer: 'Yes! All packages include trial sessions at our Vadodara salon. This allows you to test makeup looks, discuss changes, and ensure complete satisfaction before your wedding day.'
    },
    {
      question: 'Can you match traditional Gujarati bridal aesthetics?',
      answer: 'Absolutely! Our Vadodara artists are experts in Gujarati bridal looks including traditional reds, gold accents, and elaborate hairstyles that complement your jewelry and outfits.'
    },
    {
      question: 'What products do you use for bridal makeup?',
      answer: 'We use premium professional brands: MAC, Bobbi Brown, Dior, Estée Lauder, NARS, and Makeup Forever. All products are long-lasting, photography-friendly, and suitable for sensitive skin.'
    },
    {
      question: 'Do you travel to wedding venues in Vadodara?',
      answer: 'Yes, our artists travel to venues across Vadodara and surrounding areas. Travel charges may apply based on distance from our Waghodia Road salon.'
    }
  ];

  constructor() {
    this.metaService.updateSeoData({
      title: 'Bridal Makeup & Hairstyling in Vadodara | HairBar Unisex Salon',
      description: 'Complete bridal makeup packages in Vadodara for Gujarati and North Indian weddings. Expert artists, premium products, and personalized consultations at HairBar Salon.',
      ogTitle: 'Best Bridal Makeup in Vadodara | HairBar Salon',
      ogDescription: 'Professional bridal makeup and hairstyling services in Vadodara. Premium packages, expert artists, and traditional/contemporary styles.',
      canonicalUrl: 'https://hairbarsalon.in/bridal-makeup-vadodara',
    });
  }
}