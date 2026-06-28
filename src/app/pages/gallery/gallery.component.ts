import { Component, signal, computed } from '@angular/core';
import { NgClass } from '@angular/common';
import type { GalleryItem } from '../../components/gallery-card/gallery-card.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgClass],
  template: `
    <section class="relative pt-20 pb-10 bg-dark overflow-hidden">
      <div class="absolute inset-0 opacity-20" style="background: linear-gradient(135deg, #C8A96A 0%, transparent 50%, #C8A96A 100%);"></div>
      <div class="container-custom relative z-10">
        <p class="font-sans text-sm text-primary uppercase tracking-[0.25em] mb-4" data-aos="fade-up">Gallery</p>
        <h1 class="font-serif text-4xl md:text-5xl lg:text-heading text-white font-bold" data-aos="fade-up" data-aos-delay="100">Our Portfolio</h1>
        <div class="w-16 h-0.5 bg-primary mt-6 mb-6" data-aos="fade-up" data-aos-delay="200"></div>
        <p class="text-white/70 text-lg leading-relaxed max-w-2xl" data-aos="fade-up" data-aos-delay="300">Browse our collection of stunning transformations and salon masterpieces.</p>
      </div>
    </section>

    <!-- Category Filters -->
    <section class="py-8 bg-white border-b border-gray-100 sticky top-0 z-20">
      <div class="container-custom">
        <div class="flex flex-wrap gap-3 justify-center">
          @for (filter of filters; track filter.value) {
            <button
              (click)="activeFilter.set(filter.value)"
              class="px-6 py-2.5 font-sans text-sm uppercase tracking-[0.1em] transition-all duration-300"
              [ngClass]="{
                'bg-dark text-white': isActiveFilter(filter.value),
                'bg-section text-dark hover:bg-dark/10': !isActiveFilter(filter.value)
              }">
              {{ filter.label }}
            </button>
          }
        </div>
      </div>
    </section>

    <!-- Masonry Gallery Grid -->
    <section class="section-padding bg-section">
      <div class="container-custom">
        @if (filteredItems().length === 0) {
          <div class="text-center py-20">
            <p class="text-dark/50 text-lg">No images found in this category.</p>
          </div>
        } @else {
          <div class="masonry-grid">
            @for (item of filteredItems(); track item.title; let i = $index) {
              <div
                class="masonry-item group relative overflow-hidden cursor-pointer"
                [class.masonry-tall]="isMasonryTall(i)"
                [class.masonry-wide]="isMasonryWide(i)"
                (click)="openLightbox(i)"
                data-aos="fade-up"
              >
                <img
                  [src]="item.image"
                  [alt]="item.title"
                  class="w-full h-auto transition-transform duration-700 group-hover:scale-105 sm:h-full sm:object-cover"
                  loading="lazy"
                />
                <!-- Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div class="absolute bottom-0 left-0 right-0 p-6">
                    <span class="bg-primary text-white text-xs font-sans uppercase tracking-[0.1em] px-3 py-1 mb-3 inline-block">
                      {{ item.category }}
                    </span>
                    <h3 class="font-serif text-xl text-white">{{ item.title }}</h3>
                  </div>
                </div>
                <!-- Zoom Icon -->
                <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <div class="w-10 h-10 bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                    </svg>
                  </div>
                </div>
              </div>
            }
          </div>
        }
      </div>
    </section>

    <!-- Lightbox Modal -->
    @if (lightboxOpen()) {
      <div
        class="fixed inset-0 z-50 bg-dark/95 backdrop-blur-sm flex items-center justify-center"
        (click)="closeLightbox()"
      >
        <div class="relative max-w-5xl w-full mx-4" (click)="$event.stopPropagation()">
          <!-- Close Button -->
          <button
            (click)="closeLightbox()"
            class="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors z-10"
          >
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          <!-- Image -->
          <div class="aspect-[16/10] overflow-hidden">
            <img
              [src]="filteredItems()[currentIndex()].image"
              [alt]="filteredItems()[currentIndex()].title"
              class="w-full h-full object-contain"
            />
          </div>

          <!-- Info -->
          <div class="mt-4 flex items-center justify-between">
            <div>
              <span class="bg-primary text-white text-xs font-sans uppercase tracking-[0.1em] px-3 py-1">
                {{ filteredItems()[currentIndex()].category }}
              </span>
              <h3 class="font-serif text-xl text-white mt-2">{{ filteredItems()[currentIndex()].title }}</h3>
            </div>
            <span class="text-white/50 text-sm">{{ currentIndex() + 1 }} / {{ filteredItems().length }}</span>
          </div>

          <!-- Navigation -->
          <div class="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
            <button
              (click)="prevImage()"
              class="w-12 h-12 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary transition-colors pointer-events-auto"
              [class.opacity-50]="isFirstImage()"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            <button
              (click)="nextImage()"
              class="w-12 h-12 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary transition-colors pointer-events-auto"
              [class.opacity-50]="isLastImage()"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    :host { display: block; }

    .masonry-grid {
      columns: 1;
      column-gap: 1rem;
    }

    @media (min-width: 640px) {
      .masonry-grid {
        columns: 2;
      }
    }

    @media (min-width: 1024px) {
      .masonry-grid {
        columns: 3;
      }
    }

    @media (min-width: 1280px) {
      .masonry-grid {
        columns: 4;
      }
    }

    .masonry-item {
      break-inside: avoid;
      margin-bottom: 1rem;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      height: auto;
    }

    .masonry-item img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
    }

    .masonry-tall {
      break-inside: avoid-column;
    }

    .masonry-wide {
      break-inside: avoid-column;
    }
  `]
})
export class GalleryComponent {
  activeFilter = signal('all');
  lightboxOpen = signal(false);
  currentIndex = signal(0);

  filters = [
    { label: 'All', value: 'all' },
    { label: "Men's Grooming", value: 'grooming' },
    { label: 'Hair Styling', value: 'styling' },
    { label: 'Hair Color', value: 'color' },
    { label: 'Bridal Makeup', value: 'bridal' },
    { label: 'Skin Care', value: 'skin' },
  ];

  allItems: GalleryItem[] = [
    { image: '/assets/images/gallery/gallery-1.svg', title: 'Balayage Masterpiece', category: 'Color' },
    { image: '/assets/images/gallery/gallery-2.svg', title: 'Precision Cut', category: 'Cutting' },
    { image: '/assets/images/gallery/gallery-3.svg', title: 'Bridal Elegance', category: 'Bridal' },
    { image: '/assets/images/gallery/gallery-4.svg', title: 'Blowout Perfection', category: 'Styling' },
    { image: '/assets/images/gallery/gallery-5.svg', title: 'Color Melt', category: 'Color' },
    { image: '/assets/images/gallery/gallery-6.svg', title: 'Editorial Styling', category: 'Styling' },
    { image: '/assets/images/gallery/gallery-7.svg', title: 'Treatment Transformation', category: 'Treatment' },
    { image: '/assets/images/gallery/gallery-8.svg', title: "Men's Grooming", category: 'Grooming' },
    { image: '/assets/images/gallery/gallery-1.svg', title: 'Vintage Waves', category: 'Styling' },
    { image: '/assets/images/gallery/gallery-2.svg', title: 'Modern Bob', category: 'Cutting' },
    { image: '/assets/images/gallery/gallery-3.svg', title: 'Platinum Blonde', category: 'Color' },
    { image: '/assets/images/gallery/gallery-4.svg', title: 'Textured Layers', category: 'Cutting' },
    { image: '/assets/images/gallery/gallery-5.svg', title: 'Curly Cut', category: 'Cutting' },
    { image: '/assets/images/gallery/gallery-6.svg', title: 'Root Touch-up', category: 'Color' },
    { image: '/assets/images/gallery/gallery-7.svg', title: 'Formal Updo', category: 'Styling' },
    { image: '/assets/images/gallery/gallery-8.svg', title: 'Beard Sculpting', category: 'Grooming' },
  ];

  filteredItems = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'all') return this.allItems;
    return this.allItems.filter(item =>
      item.category.toLowerCase() === filter ||
      item.title.toLowerCase().includes(filter)
    );
  });

  isActiveFilter(value: string): boolean {
    return this.activeFilter() === value;
  }

  isMasonryTall(i: number): boolean {
    return i % 5 === 0 || i % 7 === 0;
  }

  isMasonryWide(i: number): boolean {
    return i % 3 === 0;
  }

  isFirstImage(): boolean {
    return this.currentIndex() === 0;
  }

  isLastImage(): boolean {
    return this.currentIndex() === this.filteredItems().length - 1;
  }

  openLightbox(index: number) {
    this.currentIndex.set(index);
    this.lightboxOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxOpen.set(false);
    document.body.style.overflow = '';
  }

  nextImage() {
    if (this.currentIndex() < this.filteredItems().length - 1) {
      this.currentIndex.update(i => i + 1);
    }
  }

  prevImage() {
    if (this.currentIndex() > 0) {
      this.currentIndex.update(i => i - 1);
    }
  }
}