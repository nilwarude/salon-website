import { Component } from '@angular/core';
import { GalleryCardComponent, GalleryItem } from '../../components/gallery-card/gallery-card.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [GalleryCardComponent],
  template: `
    <section class="relative pt-32 pb-20 bg-dark overflow-hidden">
      <div class="absolute inset-0 opacity-20" style="background: linear-gradient(135deg, #C8A96A 0%, transparent 50%, #C8A96A 100%);"></div>
      <div class="container-custom relative z-10">
        <p class="font-sans text-sm text-primary uppercase tracking-[0.25em] mb-4" data-aos="fade-up">Gallery</p>
        <h1 class="font-serif text-4xl md:text-5xl lg:text-heading text-white font-bold" data-aos="fade-up" data-aos-delay="100">Our Portfolio</h1>
        <div class="w-16 h-0.5 bg-primary mt-6 mb-6" data-aos="fade-up" data-aos-delay="200"></div>
        <p class="text-white/70 text-lg leading-relaxed max-w-2xl" data-aos="fade-up" data-aos-delay="300">Browse our collection of stunning transformations.</p>
      </div>
    </section>
    <section class="section-padding">
      <div class="container-custom">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          @for (item of galleryItems; track item.title) {
            <app-gallery-card [item]="item" />
          }
        </div>
      </div>
    </section>
  `,
})
export class GalleryComponent {
  galleryItems: GalleryItem[] = Array.from({ length: 16 }, (_, i) => ({
    image: `/assets/images/gallery/gallery-${i + 1}.webp`,
    title: ['Balayage Masterpiece', 'Precision Cut', 'Bridal Elegance', 'Blowout Perfection', 'Color Melt', 'Editorial Styling', 'Treatment Transformation', "Men's Grooming", 'Vintage Waves', 'Modern Bob', 'Platinum Blonde', 'Textured Layers', 'Curly Cut', 'Root Touch-up', 'Formal Updo', 'Beard Sculpting'][i],
    category: ['Color', 'Cutting', 'Bridal', 'Styling', 'Color', 'Editorial', 'Treatment', 'Grooming', 'Styling', 'Cutting', 'Color', 'Cutting', 'Cutting', 'Color', 'Styling', 'Grooming'][i],
  }));
}