import { Component, input } from '@angular/core';

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

@Component({
  selector: 'app-testimonial-slider',
  standalone: true,
  template: `
    <div class="bg-section p-10 relative" data-aos="fade-up">
      <!-- Quote Icon -->
      <div class="text-6xl font-serif text-primary/20 leading-none mb-4">&ldquo;</div>

      <!-- Stars -->
      <div class="flex gap-1 mb-6">
        @for (star of [1,2,3,4,5]; track star) {
          <svg class="w-5 h-5" [class.text-primary]="star <= testimonial().rating" [class]="star > testimonial().rating ? 'text-dark/20' : ''" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        }
      </div>

      <!-- Content -->
      <p class="text-dark/80 text-base leading-relaxed italic mb-8">&ldquo;{{ testimonial().content }}&rdquo;</p>

      <!-- Author -->
      <div class="flex items-center gap-4">
        <img [src]="testimonial().image" [alt]="testimonial().name" class="w-12 h-12 rounded-full object-cover" loading="lazy"/>
        <div>
          <h4 class="font-serif text-base text-dark">{{ testimonial().name }}</h4>
          <span class="text-xs text-primary font-sans uppercase tracking-[0.15em]">{{ testimonial().role }}</span>
        </div>
      </div>
    </div>
  `,
})
export class TestimonialSliderComponent {
  testimonial = input.required<Testimonial>();
}