import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

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
        <div class="relative" #groomCarousel data-aos="fade-up">
          <div class="swiper">
<div class="swiper-wrapper">
              @for (item of groomItems; track item.title) {
                <div class="swiper-slide h-auto">
                  <div class="carousel-slide group relative overflow-hidden cursor-pointer h-full flex flex-col">
                    <div class="carousel-image-wrap w-full flex-shrink-0">
                      <img
                        [src]="item.image"
                        [alt]="item.title"
                        class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <!-- Overlay -->
                    <div class="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div class="absolute bottom-0 left-0 right-0 p-4">
                        <span class="bg-primary text-white text-xs font-sans uppercase tracking-[0.1em] px-2 py-1 mb-2 inline-block">
                          {{ item.category }}
                        </span>
                        <h3 class="font-serif text-lg text-white">{{ item.title }}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>

            <!-- Navigation Arrows -->
            <div class="swiper-button-next text-primary"></div>
            <div class="swiper-button-prev text-primary"></div>

            <!-- Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
    .swiper {
      padding-bottom: 3rem;
    }
    .carousel-slide {
      border-radius: 0.5rem;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      transition: transform 0.3s ease;
      height: 100%;
    }
    .carousel-slide:hover {
      transform: translateY(-4px);
    }
    .carousel-image-wrap {
      width: 100%;
      height: 320px;
      background: #f9f9f9;
    }
    @media (min-width: 640px) {
      .carousel-image-wrap {
        height: 360px;
      }
    }
    @media (min-width: 1024px) {
      .carousel-image-wrap {
        height: 400px;
      }
    }
  `],
})
export class GroomGalleryComponent implements AfterViewInit {
  @ViewChild('groomCarousel', { static: true }) carouselRef!: ElementRef;

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

  ngAfterViewInit() {
    const swiper = new Swiper(this.carouselRef.nativeElement.querySelector('.swiper'), {
      modules: [Navigation, Pagination, Autoplay],
      loop: true,
      slidesPerView: 1,
      spaceBetween: 16,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      },
    });
  }
}