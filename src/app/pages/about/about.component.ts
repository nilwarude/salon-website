import { Component } from '@angular/core';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CtaBannerComponent],
  template: `
    <!-- Page Header -->
    <section class="relative pt-32 pb-20 bg-dark overflow-hidden">
      <div class="absolute inset-0 opacity-20" style="background: linear-gradient(135deg, #C8A96A 0%, transparent 50%, #C8A96A 100%);"></div>
      <div class="container-custom relative z-10">
        <div class="max-w-3xl">
          <p class="font-sans text-sm text-primary uppercase tracking-[0.25em] mb-4" data-aos="fade-up">About Us</p>
          <h1 class="font-serif text-4xl md:text-5xl lg:text-heading text-white font-bold" data-aos="fade-up" data-aos-delay="100">Our Story</h1>
          <div class="w-16 h-0.5 bg-primary mt-6 mb-6" data-aos="fade-up" data-aos-delay="200"></div>
          <p class="text-white/70 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="300">
            Discover the passion and artistry behind Luxury Salon — where every strand tells a story.
          </p>
        </div>
      </div>
    </section>

    <!-- Story Section -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <div class="aspect-[4/5] overflow-hidden">
              <img src="/assets/images/about-story.webp" alt="Our Story" class="w-full h-full object-cover" loading="lazy"/>
            </div>
          </div>
          <div data-aos="fade-left">
            <p class="section-subtitle">Our Journey</p>
            <h2 class="section-title">A Legacy of Excellence</h2>
            <div class="w-16 h-0.5 bg-primary my-6"></div>
            <div class="space-y-4 text-dark/70 leading-relaxed">
              <p>Founded in 2013, Luxury Salon was born from a vision to create a sanctuary where hair artistry meets unparalleled luxury. Our founder, Isabella Rossi, brought together a team of internationally trained stylists who share a common passion for excellence.</p>
              <p>Over the past decade, we have grown from a small boutique studio into one of the most prestigious salons in the region, earning numerous awards and a loyal clientele who trust us with their most important moments.</p>
              <p>Every visit to Luxury Salon is designed to be an experience — from the moment you step through our doors to the final reveal. We use only the finest products and continuously invest in the latest techniques and technologies.</p>
            </div>
            <div class="grid grid-cols-3 gap-8 mt-10 pt-10 border-t border-dark/10">
              <div class="text-center">
                <span class="font-serif text-3xl text-primary font-bold">12+</span>
                <p class="text-xs text-dark/50 font-sans uppercase tracking-[0.1em] mt-1">Years</p>
              </div>
              <div class="text-center">
                <span class="font-serif text-3xl text-primary font-bold">50+</span>
                <p class="text-xs text-dark/50 font-sans uppercase tracking-[0.1em] mt-1">Awards</p>
              </div>
              <div class="text-center">
                <span class="font-serif text-3xl text-primary font-bold">15K+</span>
                <p class="text-xs text-dark/50 font-sans uppercase tracking-[0.1em] mt-1">Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="section-padding bg-section">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="section-subtitle" data-aos="fade-up">Our Values</p>
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">What Drives Us</h2>
          <div class="gold-divider mt-6" data-aos="fade-up" data-aos-delay="200"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          @for (value of values; track value.title) {
            <div class="text-center p-8" data-aos="fade-up">
              <span class="text-5xl block mb-6">{{ value.icon }}</span>
              <h3 class="font-serif text-xl text-dark mb-3">{{ value.title }}</h3>
              <p class="text-dark/60 text-sm leading-relaxed">{{ value.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <app-cta-banner />
  `,
})
export class AboutComponent {
  values = [
    { icon: '🎨', title: 'Artistry', description: 'Every haircut, color, and style is a work of art crafted with precision and creativity by our master stylists.' },
    { icon: '💎', title: 'Quality', description: 'We use only premium products and the latest techniques to ensure exceptional results every time.' },
    { icon: '🤝', title: 'Trust', description: 'Building lasting relationships with our clients through transparency, integrity, and exceptional service.' },
  ];
}