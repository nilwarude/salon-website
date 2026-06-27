import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface GoogleReview {
  author: string;
  authorPhoto: string;
  rating: number;
  comment: string;
  date: string;
  relativeTime: string;
}

export interface GoogleReviewsResponse {
  reviews: GoogleReview[];
  averageRating: number;
  totalReviews: number;
}

@Injectable({
  providedIn: 'root',
})
export class GoogleReviewsService {
  private apiUrl = '/api/google-reviews';
  private reviewsSignal = signal<GoogleReview[]>([
    {
      author: 'Neha Sharma',
      authorPhoto: '/assets/images/testimonials/client-1.svg',
      rating: 5,
      comment: 'Best salon in Vadodara! The bridal makeup was flawless and lasted all day. Amazing service!',
      date: '2025-01-15',
      relativeTime: '2 weeks ago',
    },
    {
      author: 'Vikram Joshi',
      authorPhoto: '/assets/images/testimonials/client-5.svg',
      rating: 5,
      comment: 'Hands down the best men\'s haircut I\'ve ever had. Precision work and great atmosphere.',
      date: '2025-01-10',
      relativeTime: '3 weeks ago',
    },
    {
      author: 'Priya Sharma',
      authorPhoto: '/assets/images/testimonials/client-4.svg',
      rating: 5,
      comment: 'Amazing haircut experience! The stylist really understood what I wanted. Will definitely return.',
      date: '2025-01-05',
      relativeTime: '1 month ago',
    },
    {
      author: 'Anita Desai',
      authorPhoto: '/assets/images/testimonials/client-2.svg',
      rating: 5,
      comment: 'My wedding makeup was perfect! The team made me feel like a queen on my special day.',
      date: '2025-01-01',
      relativeTime: '1 month ago',
    },
    {
      author: 'Arjun Mehta',
      authorPhoto: '/assets/images/testimonials/client-6.svg',
      rating: 5,
      comment: 'Finally found a barber who understands my style. Best men\'s grooming in town!',
      date: '2024-12-25',
      relativeTime: '2 months ago',
    },
    {
      author: 'Meera Reddy',
      authorPhoto: '/assets/images/testimonials/client-1.svg',
      rating: 5,
      comment: 'The gold facial was pure luxury! My skin was glowing for days after.',
      date: '2024-12-20',
      relativeTime: '2 months ago',
    },
  ]);
  private loadingSignal = signal<boolean>(false);
  private errorSignal = signal<string | null>(null);
  private averageRatingSignal = signal<number>(4.7);
  private totalReviewsSignal = signal<number>(543);

  reviews = this.reviewsSignal.asReadonly();
  loading = this.loadingSignal.asReadonly();
  error = this.errorSignal.asReadonly();
  averageRating = this.averageRatingSignal.asReadonly();
  totalReviews = this.totalReviewsSignal.asReadonly();

  constructor(private http: HttpClient) {}

  fetchReviews(): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);

    this.http.get<GoogleReviewsResponse>(this.apiUrl).subscribe({
      next: (response) => {
        if (response.reviews && response.reviews.length > 0) {
          this.reviewsSignal.set(response.reviews);
          this.averageRatingSignal.set(response.averageRating || 0);
          this.totalReviewsSignal.set(response.totalReviews || 0);
        }
        this.loadingSignal.set(false);
      },
      error: (error) => {
        this.loadingSignal.set(false);
        console.error('Error fetching Google reviews, using mock data:', error);
      },
    });
  }
}