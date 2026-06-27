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
  private reviewsSignal = signal<GoogleReview[]>([]);
  private loadingSignal = signal<boolean>(false);
  private errorSignal = signal<string | null>(null);
  private averageRatingSignal = signal<number>(0);
  private totalReviewsSignal = signal<number>(0);

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
        this.reviewsSignal.set(response.reviews || []);
        this.averageRatingSignal.set(response.averageRating || 0);
        this.totalReviewsSignal.set(response.totalReviews || 0);
        this.loadingSignal.set(false);
      },
      error: (error) => {
        this.errorSignal.set('Failed to load reviews');
        this.loadingSignal.set(false);
        console.error('Error fetching Google reviews:', error);
      },
    });
  }
}