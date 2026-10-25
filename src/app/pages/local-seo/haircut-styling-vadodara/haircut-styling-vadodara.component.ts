import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MetaService } from '../../../services/meta.service';

@Component({
  selector: 'app-haircut-styling-vadodara',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 bg-dark overflow-hidden">
      <div class="absolute inset-0 opacity-20" style="background: linear-gradient(135deg, #C8A96A 0%, transparent 50%, #C8A96A 100%);"></div>
      <div class="container-custom relative z-10">
        <div class="max-w-3xl">
          <p class="font-sans text-sm text-primary uppercase tracking-[0.25em] mb-4" data-aos="fade-up">Premium Hair Services</p>
          <h1 class="font-serif text-4xl md:text-5xl lg:text-heading text-white font-bold" data-aos="fade-up" data-aos-delay="100">
            Haircut & Styling Services in Vadodara
          </h1>
          <div class="w-16 h-0.5 bg-primary mt-6 mb-6" data-aos="fade-up" data-aos-delay="200"></div>
          <p class="text-white/70 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="300">
            Expert haircuts and styling for men and women at HairBar Unisex Salon. Precision cuts, modern styles, and personalized consultations in Vadodara.
          </p>
        </div>
      </div>
    </section>

    <!-- Service Overview -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 class="section-title mb-6">Premium Haircut Services in Vadodara</h2>
            <p class="text-dark/70 mb-6">
              At HairBar Unisex Salon in Vadodara, we specialize in precision haircuts and styling for both men and women. Our expert stylists analyze your face shape, hair texture, and lifestyle to create personalized cuts that enhance your natural beauty.
            </p>
            <p class="text-dark/70 mb-8">
              Located conveniently on Waghodia Road, we're Vadodara's go-to destination for premium haircuts, blowouts, and styling services using top-quality products like L'Oreal and Moroccanoil.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a routerLink="/appointment" class="btn-primary">Book Haircut Appointment</a>
              <a href="tel:+917861935860" class="btn-secondary">Call Now: +91 78619 35860</a>
            </div>
          </div>
          <div data-aos="fade-left" class="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <img 
              src="/assets/images/gallery/gallery-2.svg" 
              alt="Haircut and styling services at HairBar Salon Vadodara" 
              class="w-full h-full object-cover"
              loading="lazy"
              width="800"
              height="600"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Service Details -->
    <section class="section-padding bg-section">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="section-subtitle" data-aos="fade-up">Our Haircut Services</p>
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Comprehensive Hair Services</h2>
          <div class="gold-divider mt-6" data-aos="fade-up" data-aos-delay="200"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (service of haircutServices; track service.title) {
            <div class="bg-white p-8 rounded-2xl shadow-premium" data-aos="fade-up">
              <div class="text-4xl mb-4">{{ service.icon }}</div>
              <h3 class="font-serif text-xl text-dark mb-3">{{ service.title }}</h3>
              <p class="text-dark/60 text-sm mb-4">{{ service.description }}</p>
              <div class="flex justify-between items-center pt-4 border-t border-dark/10">
                <span class="font-serif text-primary font-bold">{{ service.duration }}</span>
                <span class="text-dark/70 text-sm">{{ service.price }}</span>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Why Choose Us for Haircuts -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="section-subtitle" data-aos="fade-up">Why HairBar Vadodara</p>
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Best Hair Salon in Vadodara</h2>
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

    <!-- Location & CTA -->
    <section class="section-padding bg-dark text-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 class="font-serif text-3xl text-white font-bold mb-6">Visit Our Vadodara Salon</h2>
            <p class="text-white/70 mb-6">
              Located at Waghodia Road, HairBar Unisex Salon is easily accessible from Parivar Char Rasta and surrounding areas. We offer ample parking and a luxurious, hygienic environment for all your haircare needs.
            </p>
            <div class="space-y-4 mb-8">
              <div class="flex items-center gap-3">
                <span class="text-primary text-xl">📍</span>
                <p class="text-white/70">Shop No-14, Harmony, Near Sai Baba Temple, Parivar Char Rasta, Waghodiya Road, Vadodara</p>
              </div>
              <div class="flex items-center gap-3">
                <span class="text-primary text-xl">📞</span>
                <p class="text-white/70">
                  <a href="tel:+917861935860" class="hover:text-primary transition-colors">+91 78619 35860</a>
                </p>
              </div>
              <div class="flex items-center gap-3">
                <span class="text-primary text-xl">🕐</span>
                <p class="text-white/70">Open 7 Days: 9:00 AM - 10:00 PM</p>
              </div>
            </div>
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/918291492821" target="_blank" rel="noopener noreferrer" class="btn-primary bg-[#25D366] hover:bg-[#1DA851]">
                WhatsApp for Appointment
              </a>
              <a routerLink="/contact" class="btn-secondary border-white text-white hover:bg-white hover:text-dark">
                Get Directions
              </a>
            </div>
          </div>
          <div data-aos="fade-left" class="aspect-[16/9] overflow-hidden rounded-2xl">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.612075785352!2d73.2367180750691!3d22.292679979692092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc56922678acd%3A0xb5c0c78ce6ecc29d!2sHair%20Bar%20Unisex%20Salon!5e0!3m2!1sen!2sin!4v1792689357935!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" title="HairBar Unisex Salon Location"></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="section-subtitle" data-aos="fade-up">FAQ</p>
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Haircut Services FAQs</h2>
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

    <!-- Related Services -->
    <section class="section-padding bg-section">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="section-subtitle" data-aos="fade-up">Explore More</p>
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Other Premium Services</h2>
          <div class="gold-divider mt-6" data-aos="fade-up" data-aos-delay="200"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          @for (service of relatedServices; track service.title) {
            <a [routerLink]="service.link" class="group" data-aos="fade-up">
              <div class="bg-white p-6 rounded-xl shadow-premium group-hover:shadow-gold transition-all duration-300">
                <div class="text-3xl mb-3">{{ service.icon }}</div>
                <h3 class="font-serif text-lg text-dark mb-2">{{ service.title }}</h3>
                <p class="text-dark/60 text-sm mb-4">{{ service.description }}</p>
                <span class="text-primary text-sm font-medium group-hover:underline">Explore Service →</span>
              </div>
            </a>
          }
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
export class HaircutStylingVadodaraComponent {
  private metaService = inject(MetaService);

  haircutServices = [
    {
      icon: '✂️',
      title: 'Precision Haircut',
      description: 'Expert haircut tailored to your face shape and hair texture for men and women.',
      duration: '45 min',
      price: '₹399+'
    },
    {
      icon: '💇‍♀️',
      title: 'Women\'s Haircut & Styling',
      description: 'Modern cuts, layers, and styling for women including consultation and wash.',
      duration: '1 hour',
      price: '₹499+'
    },
    {
      icon: '💇‍♂️',
      title: 'Men\'s Haircut & Grooming',
      description: 'Precision cuts, fades, and beard trimming for men with styling advice.',
      duration: '30 min',
      price: '₹349+'
    },
    {
      icon: '💫',
      title: 'Blow Dry & Styling',
      description: 'Professional blowouts and styling for special occasions or everyday wear.',
      duration: '45 min',
      price: '₹499+'
    },
    {
      icon: '👰',
      title: 'Bridal Hair Styling',
      description: 'Complete bridal hair styling including trials, accessories, and touch-ups.',
      duration: '2-3 hours',
      price: '₹2,999+'
    },
    {
      icon: '🎓',
      title: 'Student Haircut',
      description: 'Special rates for students with valid ID cards. Basic cut and wash included.',
      duration: '30 min',
      price: '₹299'
    }
  ];

  whyReasons = [
    {
      icon: '🎯',
      title: 'Expert Stylists in Vadodara',
      description: 'Our Vadodara-based stylists have 7+ years experience and stay updated with latest trends.'
    },
    {
      icon: '🏆',
      title: 'Beardo Award Winner',
      description: 'Recognized as one of the best salons in Vadodara for men\'s grooming services.'
    },
    {
      icon: '⭐',
      title: '4.7 Google Rating',
      description: '543+ happy reviews from Vadodara clients praising our haircut services.'
    },
    {
      icon: '🧴',
      title: 'Premium Products',
      description: 'We use L\'Oreal, Moroccanoil, and other professional brands for best results.'
    },
    {
      icon: '📍',
      title: 'Convenient Waghodia Road Location',
      description: 'Easy access from Parivar Char Rasta with ample parking facilities.'
    },
    {
      icon: '💯',
      title: 'Personalized Consultations',
      description: 'Every haircut includes a detailed consultation to understand your preferences.'
    }
  ];

  faqs = [
    {
      question: 'What is the best haircut for my face shape in Vadodara?',
      answer: 'Our expert stylists in Vadodara will analyze your face shape during consultation and recommend the most flattering cut. We consider oval, round, square, heart, and diamond face shapes.'
    },
    {
      question: 'Do I need to book an appointment for a haircut?',
      answer: 'While walk-ins are welcome at our Waghodia Road salon, we recommend booking an appointment to avoid wait times, especially on weekends. You can book online or call +91 78619 35860.'
    },
    {
      question: 'What products do you use for haircuts and styling?',
      answer: 'We use premium professional products including L\'Oreal Professionnel, Moroccanoil, Wella, and Schwarzkopf for cutting, styling, and finishing.'
    },
    {
      question: 'How long does a haircut service take?',
      answer: 'Basic haircuts take 30-45 minutes, while more complex cuts with consultation and styling may take 60-90 minutes. Bridal and special occasion styling takes 2-3 hours.'
    },
    {
      question: 'Do you offer haircut services for both men and women?',
      answer: 'Yes! HairBar is a premium unisex salon in Vadodara offering complete haircut and styling services for both men and women at our Waghodia Road location.'
    }
  ];

  relatedServices = [
    {
      icon: '🎨',
      title: 'Hair Color Vadodara',
      description: 'Premium hair coloring services including highlights, balayage, and root touch-ups.',
      link: '/hair-colour-vadodara'
    },
    {
      icon: '💎',
      title: 'Hair Spa Vadodara',
      description: 'Revitalizing hair treatments and spa services for healthy, nourished hair.',
      link: '/hair-spa-vadodara'
    },
    {
      icon: '👰',
      title: 'Bridal Makeup Vadodara',
      description: 'Complete bridal makeup and hairstyling packages for your special day.',
      link: '/bridal-makeup-vadodara'
    }
  ];



  constructor() {
    this.metaService.updateSeoData({
      title: 'Haircut & Styling Services in Vadodara | HairBar Unisex Salon',
      description: 'Expert haircuts and styling for men and women at HairBar Unisex Salon Vadodara. Precision cuts, modern styles, and personalized consultations on Waghodia Road. Book appointment today!',
      ogTitle: 'Best Haircut Services in Vadodara | HairBar Salon',
      ogDescription: 'Premium haircut and styling services for men and women in Vadodara. Expert stylists, Beardo Award Winner, 4.7 Google rating.',
      canonicalUrl: 'https://hairbarsalon.in/haircut-and-styling-vadodara',
    });
  }
}