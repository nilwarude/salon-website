import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServiceCardComponent, ServiceItem } from '../../components/service-card/service-card.component';
import { GalleryCardComponent, GalleryItem } from '../../components/gallery-card/gallery-card.component';
import { TestimonialSliderComponent, Testimonial } from '../../components/testimonial-slider/testimonial-slider.component';
import { BlogCardComponent, BlogPost } from '../../components/blog-card/blog-card.component';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ServiceCardComponent,
    GalleryCardComponent,
    TestimonialSliderComponent,
    BlogCardComponent,
    CtaBannerComponent,
    RouterLink,
  ],
  template: `
    <!-- Hero Section -->
    <app-hero />

    <!-- Featured Services -->
    <section class="section-padding bg-section">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="section-subtitle" data-aos="fade-up">Our Services</p>
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Our Services</h2>
          <div class="gold-divider mt-6" data-aos="fade-up" data-aos-delay="200"></div>
          <p class="text-dark/60 mt-6 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
            From precision haircuts to bridal makeup, we offer a complete range of hair, skin, nails, and makeup services for men and women.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (service of services; track service.title) {
            <app-service-card [service]="service" />
          }
        </div>
        <div class="text-center mt-12" data-aos="fade-up">
          <a routerLink="/services" class="btn-secondary">View All Services</a>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Content -->
          <div>
            <p class="section-subtitle" data-aos="fade-up">Why Choose Us</p>
            <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Vadodara's Trusted Unisex Salon</h2>
            <div class="w-16 h-0.5 bg-primary mt-6 mb-8" data-aos="fade-up" data-aos-delay="200"></div>
            <p class="text-dark/60 leading-relaxed mb-8" data-aos="fade-up" data-aos-delay="300">
              At Hairbar Unisex Salon, we offer premium hair, skin, nails, and makeup services for both men and women. 
              Our expert team uses top-quality products to deliver exceptional results. Proud Beardo Award Winner with 4.7 stars on Google.
            </p>
            <div class="grid grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="400">
              @for (feature of whyChooseUs; track feature.title) {
                <div class="flex gap-4">
                  <span class="text-2xl">{{ feature.icon }}</span>
                  <div>
                    <h4 class="font-serif text-base text-dark">{{ feature.title }}</h4>
                    <p class="text-dark/60 text-sm mt-1">{{ feature.description }}</p>
                  </div>
                </div>
              }
            </div>
          </div>
          <!-- Image -->
          <div class="relative" data-aos="fade-left">
            <div class="aspect-[4/5] overflow-hidden">
              <img src="/assets/images/about-preview.svg" alt="Hairbar Unisex Salon Vadodara" class="w-full h-full object-cover" loading="lazy"/>
            </div>
            <!-- Floating Stat -->
            <div class="absolute -bottom-6 -left-6 bg-primary text-white p-6 shadow-gold-lg">
              <span class="font-serif text-3xl font-bold block">4.7</span>
              <span class="text-xs font-sans uppercase tracking-[0.15em] opacity-80">Google Rating ★</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics -->
    <section class="bg-dark py-16">
      <div class="container-custom">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          @for (stat of statistics; track stat.label) {
            <div class="text-center" data-aos="fade-up">
              <span class="font-serif text-4xl lg:text-5xl text-primary font-bold block">{{ stat.number }}</span>
              <span class="text-white/60 text-sm font-sans uppercase tracking-[0.15em] mt-2 block">{{ stat.label }}</span>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Gallery Preview -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="section-subtitle" data-aos="fade-up">Our Work</p>
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Featured Transformations</h2>
          <div class="gold-divider mt-6" data-aos="fade-up" data-aos-delay="200"></div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          @for (item of galleryItems; track item.title) {
            <app-gallery-card [item]="item" />
          }
        </div>
        <div class="text-center mt-12" data-aos="fade-up">
          <a routerLink="/gallery" class="btn-secondary">View Full Gallery</a>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section-padding bg-section">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="section-subtitle" data-aos="fade-up">Testimonials</p>
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">What Our Clients Say</h2>
          <div class="gold-divider mt-6" data-aos="fade-up" data-aos-delay="200"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (testimonial of testimonials; track testimonial.name) {
            <app-testimonial-slider [testimonial]="testimonial" />
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

    <!-- Instagram Feed -->
    <section class="py-16">
      <div class="container-custom">
        <div class="text-center mb-10">
          <p class="section-subtitle" data-aos="fade-up">Follow Us</p>
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">&#64;hairbar.official</h2>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2" data-aos="fade-up">
          @for (item of instagramFeed; track item.image) {
            <a href="#" class="aspect-square overflow-hidden group">
              <img [src]="item.image" alt="Instagram post" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy"/>
            </a>
          }
        </div>
      </div>
    </section>
  `,
})
export class HomeComponent {
  services: ServiceItem[] = [
    {
      icon: '✂️',
      title: 'Precision Haircuts',
      description: 'Expert cuts tailored to your face shape and lifestyle, executed with master-level precision for men and women.',
      duration: '45 min',
      price: '₹399+',
    },
    {
      icon: '🎨',
      title: 'Hair Color & Highlights',
      description: 'Transformative color services using premium products for stunning, long-lasting results.',
      duration: '2 hrs',
      price: '₹999+',
    },
    {
      icon: '💫',
      title: 'Blowouts & Styling',
      description: 'Perfect blowouts and elegant styling for any occasion, from casual to special events.',
      duration: '1 hr',
      price: '₹499+',
    },
    {
      icon: '💎',
      title: 'Hair Treatments & Spa',
      description: 'Restorative treatments that revitalize and strengthen your hair from root to tip.',
      duration: '1 hr',
      price: '₹699+',
    },
    {
      icon: '👰',
      title: 'Bridal & Party Makeup',
      description: 'Comprehensive bridal and party makeup packages for your special day, including trials.',
      duration: '3 hrs',
      price: '₹2,999+',
    },
    {
      icon: '🧔',
      title: "Men's Grooming",
      description: 'Premium grooming services including haircuts, beard trims, and facial treatments.',
      duration: '30 min',
      price: '₹349+',
    },
  ];

  whyChooseUs = [
    { icon: '🏆', title: 'Beardo Award Winner', description: 'Recognized for excellence' },
    { icon: '⭐', title: '4.7 Google Rating', description: '543+ happy reviews' },
    { icon: '✨', title: 'Premium Unisex Salon', description: 'Hair, skin, nails & makeup' },
    { icon: '💯', title: 'Expert Stylists', description: 'Skilled professionals' },
  ];

  statistics = [
    { number: '543+', label: 'Google Reviews' },
    { number: '7+', label: 'Years of Service' },
    { number: '4.7', label: 'Google Rating ★' },
    { number: '1000s', label: 'Happy Customers' },
  ];

  testimonials: Testimonial[] = [
    {
      name: 'Neha Sharma',
      role: 'Bridal Client',
      image: '/assets/images/testimonials/client-1.svg',
      content: 'I cannot thank the Hairbar team enough for my wedding look! The bridal makeup was absolutely flawless and lasted the entire day without a single touch-up. The hair styling was elegant and exactly what I had envisioned. My entire family was so impressed with the professionalism and attention to detail. Truly the best bridal salon in Vadodara!',
      rating: 5,
    },
    {
      name: 'Anita Desai',
      role: 'Bridal Client',
      image: '/assets/images/testimonials/client-2.svg',
      content: 'My bridal makeup and hairstyle were absolutely stunning! The trial session was so thorough and they captured exactly what I envisioned. On the wedding day, the team arrived on time and made me feel like a queen. The makeup lasted through all the ceremonies without fading. Highly recommended for all brides-to-be!',
      rating: 5,
    },
    {
      name: 'Riya Patel',
      role: 'Bridal Party Client',
      image: '/assets/images/testimonials/client-3.svg',
      content: 'We booked the complete bridal package for my sister\'s wedding and the entire bridal party of 8 looked gorgeous. The team managed everyone seamlessly, from makeup to hair styling, with different looks for each of us. Every single person felt special and looked stunning. Outstanding coordination and exceptional service!',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Haircut Client',
      image: '/assets/images/testimonials/client-4.svg',
      content: 'Best haircut experience in Vadodara! The stylist took time to understand my face shape and hair texture before suggesting the perfect cut. The precision layering is exactly what I wanted and the blow-dry was flawless. My hair has never looked this good. I\'ve finally found my go-to salon for haircuts!',
      rating: 5,
    },
    {
      name: 'Vikram Joshi',
      role: 'Men\'s Haircut Client',
      image: '/assets/images/testimonials/client-5.svg',
      content: 'Hands down the best men\'s haircut I\'ve ever had in Vadodara. The stylist consulted with me about my lifestyle and hair type before recommending a style. The precision fade and neck trim are flawless every single time. The hot towel wrap and head massage during the wash are incredible extras. Worth every rupee!',
      rating: 5,
    },
    {
      name: 'Arjun Mehta',
      role: 'Men\'s Grooming Client',
      image: '/assets/images/testimonials/client-6.svg',
      content: 'Finally found a barber who truly understands what I want. The precision haircut and beard shaping are top-class. The beard grooming service uses premium products and the finish is always clean and sharp. The hot towel treatment and straight razor neck shave are absolute game changers. Highly recommended for all men looking for quality grooming!',
      rating: 5,
    },
    {
      name: 'Meera Reddy',
      role: 'Facial Client',
      image: '/assets/images/testimonials/client-1.svg',
      content: 'The gold facial I got at Hairbar was pure luxury! My skin was glowing for days after the treatment. The esthetician was very knowledgeable, explained each step, and recommended the perfect products for my skin type. The facial massage was so relaxing. A must-try facial experience for anyone in Vadodara!',
      rating: 5,
    },
    {
      name: 'Sneha Kapoor',
      role: 'Facial & Skin Care Client',
      image: '/assets/images/testimonials/client-2.svg',
      content: 'The hydrating facial was exactly what my skin needed! The products used were gentle yet incredibly effective. My skin felt rejuvenated and looked radiant for weeks. The facial massage and steam treatment were so relaxing I almost fell asleep. I will definitely be coming back every month for skin care treatments!',
      rating: 5,
    },
    {
      name: 'Deepa Nair',
      role: 'Hair Treatment Client',
      image: '/assets/images/testimonials/client-3.svg',
      content: 'My hair was severely damaged from repeated coloring and styling, but the hair treatment at Hairbar brought it back to life! The keratin smoothing treatment left my hair silky smooth and frizz-free for months. The consultation was thorough and the results truly speak for themselves. My hair feels healthier than ever before!',
      rating: 5,
    },
    {
      name: 'Amit Khanna',
      role: 'Men\'s Grooming Client',
      image: '/assets/images/testimonials/client-4.svg',
      content: 'Best men\'s salon in town without a doubt! The haircut is always precise and the stylist remembers my preferences every time I visit. The beard shaping service is exceptional with attention to every detail. The atmosphere is welcoming and the staff is extremely professional. Highly recommended for all men in Vadodara!',
      rating: 5,
    },
    {
      name: 'Rahul Patel',
      role: 'Regular Client',
      image: '/assets/images/testimonials/client-5.svg',
      content: 'Great unisex salon with a really welcoming atmosphere. The stylists listen carefully to what you want and always deliver exactly that. I love the beard grooming service — they shape it perfectly and the finish is always clean. A truly premium grooming experience without the premium price tag!',
      rating: 5,
    },
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