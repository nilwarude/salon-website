import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-google-business-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="business-profile">
      <!-- Profile Header -->
      <div class="profile-header">
        <div class="profile-logo">
          <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
          </svg>
          <h3 class="profile-title">Business Information</h3>
        </div>
      </div>

      <!-- Business Information -->
      <div class="profile-content">
        <div class="info-grid">
          <div class="info-item">
            <span class="info-label">Business Name</span>
            <span class="info-value">{{ business.name }}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Address</span>
            <span class="info-value">{{ business.address.full }}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Phone</span>
            <span class="info-value">
              <a [href]="'tel:' + business.primaryPhone" class="text-primary hover:underline">
                {{ business.primaryPhoneDisplay }}
              </a>
            </span>
          </div>
          <div class="info-item">
            <span class="info-label">Website</span>
            <span class="info-value">
              <a [href]="business.website" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
                {{ business.domain }}
              </a>
            </span>
          </div>
          <div class="info-item">
            <span class="info-label">Rating</span>
            <span class="info-value">
              <span class="rating-stars">★★★★★</span>
              <span class="rating-text">{{ business.rating }}/5 ({{ business.totalReviews }} reviews)</span>
            </span>
          </div>
          <div class="info-item">
            <span class="info-label">Since</span>
            <span class="info-value">{{ business.since }}</span>
          </div>
        </div>

        <!-- Hours Section -->
        <div class="hours-section">
          <h4 class="hours-title">Operating Hours</h4>
          <div class="hours-table">
            <div class="hours-row" *ngFor="let hour of business.workingHours">
              <span class="hours-day">{{ hour.day }}</span>
              <span class="hours-time">{{ hour.time }}</span>
            </div>
          </div>
        </div>

        <!-- Action Button -->
        <div class="action-button">
          <a 
            [href]="getGoogleMapsUrl()" 
            target="_blank" 
            rel="noopener noreferrer"
            class="btn-view-profile"
          >
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/>
            </svg>
            View on Google Maps
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .business-profile {
      @apply bg-white rounded-xl shadow-lg p-5;
    }

    .profile-header {
      @apply flex items-center justify-between pb-4 mb-4 border-b border-gray-100;
    }

    .profile-logo {
      @apply flex items-center gap-2;
    }

    .profile-title {
      @apply font-serif text-lg text-dark font-medium;
    }

    .profile-content {
      @apply space-y-5;
    }

    .info-grid {
      @apply grid grid-cols-1 md:grid-cols-2 gap-4;
    }

    .info-item {
      @apply flex flex-col;
    }

    .info-label {
      @apply text-dark/50 text-xs uppercase tracking-wider mb-1;
    }

    .info-value {
      @apply text-dark text-sm;
    }

    .rating-stars {
      @apply text-yellow-500 text-sm mr-2;
    }

    .rating-text {
      @apply text-dark/70 text-sm;
    }

    .hours-section {
      @apply pt-4 border-t border-gray-100;
    }

    .hours-title {
      @apply text-dark text-sm font-medium mb-3;
    }

    .hours-table {
      @apply space-y-2;
    }

    .hours-row {
      @apply flex justify-between items-center;
    }

    .hours-day {
      @apply text-dark text-sm;
    }

    .hours-time {
      @apply text-dark/70 text-sm;
    }

    .action-button {
      @apply pt-4 border-t border-gray-100;
    }

    .btn-view-profile {
      @apply inline-flex items-center px-4 py-2 bg-primary text-white 
             text-sm font-medium rounded-lg hover:bg-primary/90 
             transition-colors duration-300 w-full justify-center;
    }

    /* Responsive adjustments */
    @media (max-width: 640px) {
      .business-profile {
        @apply p-4;
      }
      
      .info-grid {
        @apply grid-cols-1;
      }
    }
  `]
})
export class GoogleBusinessProfileComponent {
  business = environment.business;

  getGoogleMapsUrl(): string {
    return `https://www.google.com/maps/place/${encodeURIComponent(this.business.name)}/@${environment.googleMaps.location.latitude},${environment.googleMaps.location.longitude},17z`;
  }
}
