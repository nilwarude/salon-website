import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServiceCardComponent, ServiceItem } from '../../components/service-card/service-card.component';
import { GalleryCardComponent, GalleryItem } from '../../components/gallery-card/gallery-card.component';
import { TeamCardComponent, TeamMember } from '../../components/team-card/team-card.component';
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
    TeamCardComponent,
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
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Premium Hair & Beauty Services</h2>
          <div class="gold-divider mt-6" data-aos="fade-up" data-aos-delay="200"></div>
          <p class="text-dark/60 mt-6 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
            From precision cuts to transformative color, our master stylists bring artistry and expertise to every service.
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
            <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Where Excellence Meets Elegance</h2>
            <div class="w-16 h-0.5 bg-primary mt-6 mb-8" data-aos="fade-up" data-aos-delay="200"></div>
            <p class="text-dark/60 leading-relaxed mb-8" data-aos="fade-up" data-aos-delay="300">
              At Luxury Salon, we believe every client deserves a premium experience. Our team of internationally 
              trained stylists uses only the finest products and techniques to deliver exceptional results.
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
              <img src="/assets/images/about-preview.webp" alt="Luxury Salon Interior" class="w-full h-full object-cover" loading="lazy"/>
            </div>
            <!-- Floating Stat -->
            <div class="absolute -bottom-6 -left-6 bg-primary text-white p-6 shadow-gold-lg">
              <span class="font-serif text-3xl font-bold block">12+</span>
              <span class="text-xs font-sans uppercase tracking-[0.15em] opacity-80">Years Excellence</span>
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

    <!-- Team Preview -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="section-subtitle" data-aos="fade-up">Our Team</p>
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Meet Our Master Stylists</h2>
          <div class="gold-divider mt-6" data-aos="fade-up" data-aos-delay="200"></div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          @for (member of teamMembers; track member.name) {
            <app-team-card [member]="member" />
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
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">&#64;luxurysalon</h2>
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
      description: 'Expert cuts tailored to your face shape and lifestyle, executed with master-level precision.',
      duration: '45 min',
      price: '$85+',
    },
    {
      icon: '🎨',
      title: 'Color & Highlights',
      description: 'Transformative color services using premium products for stunning, long-lasting results.',
      duration: '2 hrs',
      price: '$150+',
    },
    {
      icon: '💫',
      title: 'Blowouts & Styling',
      description: 'Perfect blowouts and elegant styling for any occasion, from casual to red carpet.',
      duration: '1 hr',
      price: '$65+',
    },
    {
      icon: '💎',
      title: 'Hair Treatments',
      description: 'Restorative treatments that revitalize and strengthen your hair from root to tip.',
      duration: '1 hr',
      price: '$95+',
    },
    {
      icon: '👰',
      title: 'Bridal Packages',
      description: 'Comprehensive bridal beauty packages for your special day, including trials.',
      duration: '3 hrs',
      price: '$350+',
    },
    {
      icon: '🧔',
      title: "Men's Grooming",
      description: 'Premium grooming services including cuts, beard trims, and facial treatments.',
      duration: '30 min',
      price: '$55+',
    },
  ];

  whyChooseUs = [
    { icon: '🏆', title: 'Award-Winning Team', description: 'Internationally trained stylists' },
    { icon: '🌿', title: 'Premium Products', description: 'Only the finest brands' },
    { icon: '✨', title: 'Luxury Experience', description: 'From welcome to farewell' },
    { icon: '💯', title: 'Satisfaction Guaranteed', description: 'We stand by our work' },
  ];

  statistics = [
    { number: '15,000+', label: 'Happy Clients' },
    { number: '12+', label: 'Years Experience' },
    { number: '50+', label: 'Awards Won' },
    { number: '98%', label: 'Satisfaction Rate' },
  ];

  galleryItems: GalleryItem[] = [
    { image: '/assets/images/gallery/gallery-1.webp', title: 'Balayage Masterpiece', category: 'Color' },
    { image: '/assets/images/gallery/gallery-2.webp', title: 'Precision Cut', category: 'Cutting' },
    { image: '/assets/images/gallery/gallery-3.webp', title: 'Bridal Elegance', category: 'Bridal' },
    { image: '/assets/images/gallery/gallery-4.webp', title: 'Blowout Perfection', category: 'Styling' },
    { image: '/assets/images/gallery/gallery-5.webp', title: 'Color Melt', category: 'Color' },
    { image: '/assets/images/gallery/gallery-6.webp', title: 'Editorial Styling', category: 'Editorial' },
    { image: '/assets/images/gallery/gallery-7.webp', title: 'Treatment Transformation', category: 'Treatment' },
    { image: '/assets/images/gallery/gallery-8.webp', title: "Men's Grooming", category: 'Grooming' },
  ];

  testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      role: 'Regular Client',
      image: '/assets/images/testimonials/client-1.webp',
      content: 'The most luxurious salon experience I\'ve ever had. From the moment I walked in, I felt pampered. My stylist listened to exactly what I wanted and delivered beyond my expectations.',
      rating: 5,
    },
    {
      name: 'Emily Davis',
      role: 'Bridal Client',
      image: '/assets/images/testimonials/client-2.webp',
      content: 'My wedding hair was absolutely perfect! The team made me feel like a queen on my special day. The trial session ensured we got every detail right.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Regular Client',
      image: '/assets/images/testimonials/client-3.webp',
      content: 'Finally found a salon that understands men\'s grooming. The atmosphere is sophisticated yet welcoming. My barber is incredibly skilled and professional.',
      rating: 5,
    },
  ];

  teamMembers: TeamMember[] = [
    {
      image: '/assets/images/team/team-1.webp',
      name: 'Isabella Rossi',
      role: 'Master Stylist & Creative Director',
      bio: '15+ years of expertise in precision cutting and creative coloring.',
      socials: [
        { icon: 'f', url: '#' },
        { icon: 'i', url: '#' },
      ],
    },
    {
      image: '/assets/images/team/team-2.webp',
      name: 'James Mitchell',
      role: 'Senior Colorist',
      bio: 'Specializing in balayage, ombre, and color correction techniques.',
      socials: [
        { icon: 'f', url: '#' },
        { icon: 'i', url: '#' },
      ],
    },
    {
      image: '/assets/images/team/team-3.webp',
      name: 'Sophie Laurent',
      role: 'Bridal & Editorial Stylist',
      bio: 'Paris-trained stylist with a passion for editorial and bridal hair.',
      socials: [
        { icon: 'f', url: '#' },
        { icon: 'i', url: '#' },
      ],
    },
    {
      image: '/assets/images/team/team-4.webp',
      name: 'David Park',
      role: 'Master Barber',
      bio: 'Expert in classic and contemporary men\'s grooming and beard styling.',
      socials: [
        { icon: 'f', url: '#' },
        { icon: 'i', url: '#' },
      ],
    },
  ];

  blogPosts: BlogPost[] = [
    {
      image: '/assets/images/blog/blog-1.webp',
      title: '2025 Hair Color Trends: What\'s In This Season',
      excerpt: 'Discover the hottest hair color trends taking over salons this season, from lived-in brunettes to vibrant coppers.',
      date: 'January 15, 2025',
      category: 'Trends',
      slug: '2025-hair-color-trends',
    },
    {
      image: '/assets/images/blog/blog-2.webp',
      title: 'The Ultimate Guide to Hair Care at Home',
      excerpt: 'Expert tips and product recommendations for maintaining salon-fresh hair between appointments.',
      date: 'January 10, 2025',
      category: 'Care Tips',
      slug: 'ultimate-hair-care-guide',
    },
    {
      image: '/assets/images/blog/blog-3.webp',
      title: 'Bridal Hair: Planning Your Perfect Wedding Look',
      excerpt: 'Everything you need to know about planning your bridal hair, from consultations to the big day.',
      date: 'January 5, 2025',
      category: 'Bridal',
      slug: 'bridal-hair-planning-guide',
    },
  ];

  instagramFeed = [
    { image: '/assets/images/instagram/insta-1.webp' },
    { image: '/assets/images/instagram/insta-2.webp' },
    { image: '/assets/images/instagram/insta-3.webp' },
    { image: '/assets/images/instagram/insta-4.webp' },
    { image: '/assets/images/instagram/insta-5.webp' },
    { image: '/assets/images/instagram/insta-6.webp' },
  ];
}