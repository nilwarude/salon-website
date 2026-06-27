import { Component, input, inject, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { GoogleReviewsService, GoogleReview } from '../../services/google-reviews.service';

@Component({
  selector: 'app-google-reviews',
  standalone: true,
  template: `
    <div class="google-reviews-widget" role="region" aria-label="Customer Reviews">
      @if (reviews().length > 0) {
        <div class="reviews-header">
          <div class="flex items-center gap-3 mb-6">
            <img src="/assets/images/logo.jpeg" alt="Hairbar Salon Logo" class="w-12 h-12 rounded-full" loading="lazy" />
            <div>
              <h3 class="font-serif text-2xl text-dark">{{ businessName() }}</h3>
              <div class="flex items-center gap-2">
                <div class="flex items-center" role="img" [attr.aria-label]="averageRating() + ' out of 5 stars'">
                  @for (star of [1, 2, 3, 4, 5]; track star) {
                    <svg
                      class="w-5 h-5"
                      [class.text-primary]="star <= averageRating()"
                      [class.opacity-20]="star > averageRating()"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  }
                </div>
                <span class="text-dark/70 text-sm font-sans">{{ averageRating() }} ({{ totalReviews() }} reviews)</span>
              </div>
            </div>
          </div>
        </div>

        <div class="relative" #reviewsCarousel>
          <div class="swiper">
            <div class="swiper-wrapper">
              @for (review of reviews(); track review.author + review.date) {
                <div class="swiper-slide">
                  <div class="review-card h-full" role="listitem">
                    <div class="flex items-center gap-3 mb-4">
                      <img
                        [src]="review.authorPhoto"
                        [alt]="review.author + ' profile photo'"
                        class="w-12 h-12 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div>
                        <p class="font-serif text-base text-dark">{{ review.author }}</p>
                        <time class="text-dark/50 text-xs" [dateTime]="review.date">{{ review.relativeTime }}</time>
                      </div>
                    </div>
                    <div class="flex mb-3" role="img" [attr.aria-label]="review.rating + ' out of 5 stars'">
                      @for (star of [1, 2, 3, 4, 5]; track star) {
                        <svg
                          class="w-4 h-4"
                          [class.text-primary]="star <= review.rating"
                          [class.opacity-20]="star > review.rating"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      }
                    </div>
                    <p class="text-dark/80 text-base leading-relaxed line-clamp-4">{{ review.comment }}</p>
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

        <div class="text-center mt-8" data-aos="fade-up">
          <a
            [href]="googleReviewsUrl()"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-secondary inline-flex items-center gap-2"
            [attr.aria-label]="'View all reviews on Google'"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
            </svg>
            Read More Reviews on Google
          </a>
        </div>
      } @else if (loading()) {
        <div class="text-center py-12" [attr.aria-label]="'Loading reviews'">
          <div class="loading-spinner mx-auto mb-4"></div>
          <p class="text-dark/60">Loading reviews...</p>
        </div>
      } @else {
        <div class="text-center py-12">
          <p class="text-dark/60 mb-4">Reviews will appear here once configured.</p>
          <a
            [href]="googleReviewsUrl()"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary"
            [attr.aria-label]="'View reviews on Google'"
          >View Our Reviews</a>
        </div>
      }
    </div>
  `,
  styles: [`
    .google-reviews-widget {
      display: block;
      width: 100%;
    }
    .review-card {
      background: white;
      padding: 1.5rem;
      border: 1px solid rgba(200, 169, 106, 0.1);
      transition: all 0.3s ease;
    }
    .review-card:hover {
      border-color: rgba(200, 169, 106, 0.3);
      transform: translateY(-2px);
    }
    .loading-spinner {
      width: 2rem;
      height: 2rem;
      border: 2px solid #C8A96A;
      border-top-color: transparent;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `],
})
export class GoogleReviewsComponent implements OnInit, AfterViewInit {
  private reviewsService = inject(GoogleReviewsService);

  businessName = input('Hairbar Unisex Salon');
  googleReviewsUrl = input('https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID');

  @ViewChild('reviewsCarousel', { static: true }) carouselRef!: ElementRef;

  reviews = this.reviewsService.reviews;
  loading = this.reviewsService.loading;
  error = this.reviewsService.error;
  averageRating = this.reviewsService.averageRating;
  totalReviews = this.reviewsService.totalReviews;

  ngOnInit(): void {
    this.reviewsService.fetchReviews();
  }

  ngAfterViewInit() {
    if (this.reviews().length > 0) {
      new Swiper(this.carouselRef.nativeElement.querySelector('.swiper'), {
        modules: [Navigation, Pagination, Autoplay],
        loop: true,
        slidesPerView: 1,
        spaceBetween: 24,
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
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      });
    }
  }
}