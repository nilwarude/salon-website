import { Component, input } from '@angular/core';

export interface GalleryItem {
  image: string;
  title: string;
  category: string;
}

@Component({
  selector: 'app-gallery-card',
  standalone: true,
  template: `
    <div
      class="group relative overflow-hidden cursor-pointer"
      data-aos="fade-up"
    >
      <div class="aspect-[4/5] overflow-hidden">
        <img
          [src]="item().image"
          [alt]="item().title"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      <!-- Overlay on Hover -->
      <div class="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
        <div class="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h4 class="font-serif text-xl text-white mb-2">{{ item().title }}</h4>
          <span class="font-sans text-xs uppercase tracking-[0.2em] text-primary">{{ item().category }}</span>
        </div>
      </div>
    </div>
  `,
})
export class GalleryCardComponent {
  item = input.required<GalleryItem>();
}