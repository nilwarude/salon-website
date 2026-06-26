import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface GalleryItem {
  image: string;
  title: string;
  category: string;
}

@Component({
  selector: 'app-groom-gallery',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Hero Banner -->
    <section class="relative pt-16 pb-4 bg-dark overflow-hidden">
      <div class="absolute inset-0 opacity-20" style="background: linear-gradient(135deg, #C8A96A 0%, transparent 50%, #C8A96A 100%);"></div>
      <div class="container-custom relative z-10">
        <p class="font-sans text-sm text-primary uppercase tracking-[0.25em] mb-4" data-aos="fade-up">Grooming</p>
        <h1 class="font-serif text-4xl md:text-5xl lg:text-heading text-white font-bold" data-aos="fade-up" data-aos-delay="100">Groom's Gallery</h1>
        <div class="w-16 h-0.5 bg-primary mt-6 mb-6" data-aos="fade-up" data-aos-delay="200"></div>
        <p class="text-white/70 text-lg leading-relaxed max-w-2xl" data-aos="fade-up" data-aos-delay="300">Explore our collection of grooming transformations for men.</p>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="py-8 bg-section">
      <div class="container-custom">
        <!-- Back Button -->
        <div class="mb-8">
          <a routerLink="/gallery" class="inline-flex items-center gap-2 font-sans text-sm uppercase tracking-[0.1em] text-dark/60 hover:text-primary transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            Back to Gallery
          </a>
        </div>

        <!-- Carousel -->
        <div class="carousel-wrapper" data-aos="fade-up">
          <!-- Prev Button -->
          <button class="carousel-btn carousel-btn-prev" (click)="prev()" [disabled]="currentIndex() === 0" aria-label="Previous">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>

          <!-- Viewport -->
          <div class="carousel-viewport">
            <div class="carousel-track" [style.transform]="'translateX(-' + currentIndex() * slideWidthPercent() + '%)'">
              @for (item of groomItems; track item.title; let i = $index) {
                <div class="carousel-slide group relative overflow-hidden cursor-pointer">
                  <div class="carousel-image-wrap overflow-hidden">
                    <img
                      [src]="item.image"
                      [alt]="item.title"
                      class="transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <!-- Overlay -->
                  <div class="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div class="absolute bottom-0 left-0 right-0 p-6">
                      <span class="bg-primary text-white text-xs font-sans uppercase tracking-[0.1em] px-3 py-1 mb-3 inline-block">
                        {{ item.category }}
                      </span>
                      <h3 class="font-serif text-xl text-white">{{ item.title }}</h3>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>

          <!-- Next Button -->
          <button class="carousel-btn carousel-btn-next" (click)="next()" [disabled]="currentIndex() >= maxIndex()" aria-label="Next">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        <!-- Dot Indicators -->
        <div class="flex justify-center gap-2 mt-6">
          @for (item of groomItems; track item.title; let i = $index) {
            <button
              class="dot"
              [class.dot-active]="i === currentIndex()"
              (click)="goTo(i)"
              [attr.aria-label]="'Go to slide ' + (i + 1)"
            ></button>
          }
        </div>

        <!-- Counter -->
        <p class="text-center font-sans text-sm text-dark/50 mt-3">
          {{ currentIndex() + 1 }} / {{ groomItems.length }}
        </p>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }

    .carousel-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .carousel-viewport {
      flex: 1;
      overflow: hidden;
      border-radius: 0.5rem;
    }

    .carousel-track {
      display: flex;
      gap: 1.5rem;
      transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .carousel-slide {
      flex-shrink: 0;
      width: calc((100% - 3rem) / 3);
      border-radius: 0.5rem;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      transition: transform 0.3s ease;
    }

    .carousel-slide:hover {
      transform: translateY(-4px);
    }

    .carousel-image-wrap {
      width: 100%;
      height: 320px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f9f9f9;
      overflow: hidden;
      border-radius: 0.25rem;
    }

    .carousel-image-wrap img {
      width: auto;
      height: 100%;
      max-width: 100%;
      object-fit: contain;
      object-position: center;
    }

    /* Show 2 slides on tablet */
    @media (max-width: 1024px) {
      .carousel-slide {
        width: calc((100% - 1.5rem) / 2);
      }
      .carousel-image-wrap {
        height: 350px;
      }
    }

    /* Show 1 slide on mobile */
    @media (max-width: 640px) {
      .carousel-slide {
        width: 100%;
      }
      .carousel-image-wrap {
        height: 300px;
      }
      .carousel-wrapper {
        gap: 0.5rem;
      }
    }

    .carousel-btn {
      flex-shrink: 0;
      width: 2.75rem;
      height: 2.75rem;
      border-radius: 50%;
      background: #fff;
      border: 1.5px solid #C8A96A;
      color: #C8A96A;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background 0.2s, color 0.2s, opacity 0.2s;
      z-index: 10;
    }

    .carousel-btn:hover:not(:disabled) {
      background: #C8A96A;
      color: #fff;
    }

    .carousel-btn:disabled {
      opacity: 0.3;
      cursor: default;
    }

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #C8A96A33;
      border: none;
      cursor: pointer;
      transition: background 0.3s, transform 0.3s;
      padding: 0;
    }

    .dot-active {
      background: #C8A96A;
      transform: scale(1.3);
    }
  `]
})
export class GroomGalleryComponent {
  groomItems: GalleryItem[] = [
    { image: '/assets/images/gallery/Groom/groom1.jpeg', title: 'Classic Fade Cut', category: 'Grooming' },
    { image: '/assets/images/gallery/Groom/groom2.jpeg', title: 'Beard Trim & Shape', category: 'Grooming' },
    { image: '/assets/images/gallery/Groom/groom3.jpeg', title: 'Pompadour Style', category: 'Grooming' },
    { image: '/assets/images/gallery/Groom/groom4.jpeg', title: 'Clean Shave Experience', category: 'Grooming' },
    { image: '/assets/images/gallery/Groom/groom5.jpeg', title: 'Modern Quiff', category: 'Grooming' },
    { image: '/assets/images/gallery/Groom/groom6.jpeg', title: 'Full Beard Styling', category: 'Grooming' },
    { image: '/assets/images/gallery/Groom/groom7.jpeg', title: 'Textured Crop', category: 'Grooming' },
    { image: '/assets/images/gallery/Groom/groom8.jpeg', title: 'Hot Towel Shave', category: 'Grooming' },
    { image: '/assets/images/gallery/Groom/groom9.jpeg', title: 'Side Part Style', category: 'Grooming' },
    { image: '/assets/images/gallery/Groom/groom10.jpeg', title: 'Grooming Package', category: 'Grooming' },
  ];

  // Show 3 slides at a time
  visibleCount = signal(3);
  currentIndex = signal(0);

  maxIndex = computed(() => Math.max(0, this.groomItems.length - this.visibleCount()));
  slideWidthPercent = computed(() => 100 / this.visibleCount());

  prev() {
    this.currentIndex.update(i => Math.max(0, i - 1));
  }

  next() {
    this.currentIndex.update(i => Math.min(this.maxIndex(), i + 1));
  }

  goTo(index: number) {
    this.currentIndex.set(Math.min(index, this.maxIndex()));
  }
}
