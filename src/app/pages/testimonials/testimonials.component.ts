import { Component } from '@angular/core';
import { TestimonialSliderComponent, Testimonial } from '../../components/testimonial-slider/testimonial-slider.component';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [TestimonialSliderComponent, CtaBannerComponent],
  template: `
    <section class="relative pt-32 pb-20 bg-dark overflow-hidden">
      <div class="absolute inset-0 opacity-20" style="background: linear-gradient(135deg, #C8A96A 0%, transparent 50%, #C8A96A 100%);"></div>
      <div class="container-custom relative z-10">
        <div class="max-w-3xl">
          <p class="font-sans text-sm text-primary uppercase tracking-[0.25em] mb-4" data-aos="fade-up">Testimonials</p>
          <h1 class="font-serif text-4xl md:text-5xl lg:text-heading text-white font-bold" data-aos="fade-up" data-aos-delay="100">Client Stories</h1>
          <div class="w-16 h-0.5 bg-primary mt-6 mb-6" data-aos="fade-up" data-aos-delay="200"></div>
          <p class="text-white/70 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="300">Hear from our cherished clients about their experiences.</p>
        </div>
      </div>
    </section>
    <section class="section-padding">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (testimonial of testimonials; track testimonial.name) {
            <app-testimonial-slider [testimonial]="testimonial" />
          }
        </div>
      </div>
    </section>
    <app-cta-banner />
  `,
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    { name: 'Sarah Johnson', role: 'Regular Client', image: '/assets/images/testimonials/client-1.webp', content: 'The most luxurious salon experience I\'ve ever had.', rating: 5 },
    { name: 'Emily Davis', role: 'Bridal Client', image: '/assets/images/testimonials/client-2.webp', content: 'My wedding hair was absolutely perfect!', rating: 5 },
    { name: 'Michael Chen', role: 'Regular Client', image: '/assets/images/testimonials/client-3.webp', content: 'Finally found a salon that understands men\'s grooming.', rating: 5 },
    { name: 'Jessica Williams', role: 'Regular Client', image: '/assets/images/testimonials/client-4.webp', content: 'The color transformation was incredible. I\'ve never had so many compliments!', rating: 5 },
    { name: 'Daniel Martinez', role: 'Bridal Party', image: '/assets/images/testimonials/client-5.webp', content: 'They styled the entire bridal party and everyone looked stunning.', rating: 5 },
    { name: 'Amanda Taylor', role: 'Regular Client', image: '/assets/images/testimonials/client-6.webp', content: 'The scalp treatment was pure bliss. I left feeling like a new person.', rating: 5 },
  ];
}