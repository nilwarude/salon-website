import { Component } from '@angular/core';
import { TestimonialSliderComponent, Testimonial } from '../../components/testimonial-slider/testimonial-slider.component';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';
import { GoogleReviewsComponent } from '../../components/google-reviews/google-reviews.component';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [TestimonialSliderComponent, CtaBannerComponent, GoogleReviewsComponent],
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

    <!-- Google Reviews Widget -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <app-google-reviews />
      </div>
    </section>

    <!-- Local Testimonials -->
    <section class="section-padding bg-section">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="section-subtitle" data-aos="fade-up">Featured Reviews</p>
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Client Testimonials</h2>
          <div class="gold-divider mt-6" data-aos="fade-up" data-aos-delay="200"></div>
        </div>
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
    { name: 'Neha Sharma', role: 'Bridal Client', image: '/assets/images/testimonials/client-1.svg', content: 'I cannot thank the Hairbar team enough for my wedding look! The bridal makeup was absolutely flawless and lasted the entire day without a single touch-up. The hair styling was elegant and exactly what I had envisioned. My entire family was so impressed with the professionalism and attention to detail. Truly the best bridal salon in Vadodara!', rating: 5 },
    { name: 'Anita Desai', role: 'Bridal Client', image: '/assets/images/testimonials/client-2.svg', content: 'My bridal makeup and hairstyle were absolutely stunning! The trial session was so thorough and they captured exactly what I envisioned. On the wedding day, the team arrived on time and made me feel like a queen. The makeup lasted through all the ceremonies without fading. Highly recommended for all brides-to-be!', rating: 5 },
    { name: 'Riya Patel', role: 'Bridal Party Client', image: '/assets/images/testimonials/client-3.svg', content: 'We booked the complete bridal package for my sister\'s wedding and the entire bridal party of 8 looked gorgeous. The team managed everyone seamlessly, from makeup to hair styling, with different looks for each of us. Every single person felt special and looked stunning. Outstanding coordination and exceptional service!', rating: 5 },
    { name: 'Priya Sharma', role: 'Haircut Client', image: '/assets/images/testimonials/client-4.svg', content: 'Best haircut experience in Vadodara! The stylist took time to understand my face shape and hair texture before suggesting the perfect cut. The precision layering is exactly what I wanted and the blow-dry was flawless. My hair has never looked this good. I\'ve finally found my go-to salon for haircuts!', rating: 5 },
    { name: 'Vikram Joshi', role: 'Men\'s Haircut Client', image: '/assets/images/testimonials/client-5.svg', content: 'Hands down the best men\'s haircut I\'ve ever had in Vadodara. The stylist consulted with me about my lifestyle and hair type before recommending a style. The precision fade and neck trim are flawless every single time. The hot towel wrap and head massage during the wash are incredible extras. Worth every rupee!', rating: 5 },
    { name: 'Arjun Mehta', role: 'Men\'s Grooming Client', image: '/assets/images/testimonials/client-6.svg', content: 'Finally found a barber who truly understands what I want. The precision haircut and beard shaping are top-class. The beard grooming service uses premium products and the finish is always clean and sharp. The hot towel treatment and straight razor neck shave are absolute game changers. Highly recommended for all men looking for quality grooming!', rating: 5 },
    { name: 'Meera Reddy', role: 'Facial Client', image: '/assets/images/testimonials/client-1.svg', content: 'The gold facial I got at Hairbar was pure luxury! My skin was glowing for days after the treatment. The esthetician was very knowledgeable, explained each step, and recommended the perfect products for my skin type. The facial massage was so relaxing. A must-try facial experience for anyone in Vadodara!', rating: 5 },
    { name: 'Sneha Kapoor', role: 'Facial & Skin Care Client', image: '/assets/images/testimonials/client-2.svg', content: 'The hydrating facial was exactly what my skin needed! The products used were gentle yet incredibly effective. My skin felt rejuvenated and looked radiant for weeks. The facial massage and steam treatment were so relaxing I almost fell asleep. I will definitely be coming back every month for skin care treatments!', rating: 5 },
    { name: 'Deepa Nair', role: 'Hair Treatment Client', image: '/assets/images/testimonials/client-3.svg', content: 'My hair was severely damaged from repeated coloring and styling, but the hair treatment at Hairbar brought it back to life! The keratin smoothing treatment left my hair silky smooth and frizz-free for months. The consultation was thorough and the results truly speak for themselves. My hair feels healthier than ever before!', rating: 5 },
    { name: 'Amit Khanna', role: 'Men\'s Grooming Client', image: '/assets/images/testimonials/client-4.svg', content: 'Best men\'s salon in town without a doubt! The haircut is always precise and the stylist remembers my preferences every time I visit. The beard shaping service is exceptional with attention to every detail. The atmosphere is welcoming and the staff is extremely professional. Highly recommended for all men in Vadodara!', rating: 5 },
    { name: 'Rahul Patel', role: 'Regular Client', image: '/assets/images/testimonials/client-5.svg', content: 'Great unisex salon with a really welcoming atmosphere. The stylists listen carefully to what you want and always deliver exactly that. I love the beard grooming service — they shape it perfectly and the finish is always clean. A truly premium grooming experience without the premium price tag!', rating: 5 },
    { name: 'Aarav Mehta', role: 'Men\'s Haircut Client', image: '/assets/images/testimonials/client-6.svg', content: 'I\'ve been to many salons in Vadodara but Hairbar is by far the best for men\'s haircuts. The precision work on the fade is incredible and the stylist gave me great advice on a style that suits my face shape. The atmosphere is very welcoming and not intimidating at all. My new go-to place for haircuts!', rating: 5 },
  ];
}