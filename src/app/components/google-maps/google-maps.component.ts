import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
import { environment } from '../../../environments/environment';

export interface MapLocation {
  latitude: number;
  longitude: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  placeId?: string;
}

@Component({
  selector: 'app-google-maps',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  template: `
    <div class="google-maps-container">
      <!-- Simple Google Maps Iframe -->
      <div class="simple-map-container">
        <iframe
          [src]="getSimpleMapUrl() | safeUrl"
          width="100%"
          height="400"
          style="border:0;"
          [attr.aria-label]="'Google Map showing location of ' + location.name"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="strict-origin-when-cross-origin"
          title="Google Maps Location of HairBar Unisex Salon in Vadodara"
        ></iframe>
      </div>

      <!-- Contact Information -->
      <div class="contact-info">
        <div class="info-grid">
          <div class="info-item">
            <div class="info-icon">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="info-content">
              <p class="info-label">Address</p>
              <p class="info-value">{{ location.address }}</p>
            </div>
          </div>
          
          <div class="info-item">
            <div class="info-icon">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="info-content">
              <p class="info-label">Phone</p>
              <p class="info-value">
                <a [href]="'tel:' + location.phone" class="text-primary hover:underline">
                  {{ location.phone }}
                </a>
              </p>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="info-content">
              <p class="info-label">Hours</p>
              <p class="info-value">{{ location.hours }}</p>
            </div>
          </div>
        </div>

        <!-- Simple Action Buttons -->
        <div class="action-buttons">
          <a 
            [href]="getDirectionsUrl()" 
            target="_blank" 
            rel="noopener noreferrer"
            class="action-btn btn-directions"
          >
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
            </svg>
            Get Directions
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .google-maps-container {
      @apply rounded-xl overflow-hidden shadow-lg;
    }

    .simple-map-container {
      @apply w-full;
    }

    .contact-info {
      @apply bg-white p-6;
    }

    .info-grid {
      @apply grid grid-cols-1 md:grid-cols-3 gap-6 mb-6;
    }

    .info-item {
      @apply flex items-start gap-3;
    }

    .info-icon {
      @apply text-primary flex-shrink-0 mt-0.5;
    }

    .info-content {
      @apply flex-1;
    }

    .info-label {
      @apply text-dark/50 text-xs uppercase tracking-wider mb-1;
    }

    .info-value {
      @apply text-dark text-sm;
    }

    .action-buttons {
      @apply flex justify-center;
    }

    .action-btn {
      @apply inline-flex items-center px-6 py-3 bg-primary text-white 
             text-sm font-medium rounded-lg hover:bg-primary/90 
             transition-colors duration-300;
    }

    /* Responsive adjustments */
    @media (max-width: 640px) {
      .info-grid {
        @apply grid-cols-1 gap-4;
      }
      
      .contact-info {
        @apply p-4;
      }
    }
  `]
})
export class GoogleMapsComponent {
  @Input() location: MapLocation = {
    latitude: environment.googleMaps.location.latitude,
    longitude: environment.googleMaps.location.longitude,
    name: environment.business.name,
    address: environment.business.address.full,
    phone: environment.business.primaryPhone,
    hours: environment.business.workingHours.map(wh => `${wh.day}: ${wh.time}`).join(', '),
    placeId: environment.googleMaps.location.placeId
  };

  @Input() zoom: number = environment.googleMaps.defaultZoom;

  getSimpleMapUrl(): string {
    // Simple Google Maps embed URL - no API key needed for basic embed
    const params = new URLSearchParams({
      pb: '!1m18!1m12!1m3!1d3691.612075785352!2d73.2367180750691!3d22.292679979692092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc56922678acd%3A0xb5c0c78ce6ecc29d!2sHair%20Bar%20Unisex%20Salon!5e0!3m2!1sen!2sin!4v1792689357935!5m2!1sen!2sin',
      q: encodeURIComponent(this.location.address),
      z: this.zoom.toString(),
      t: 'm', // map type
      output: 'embed',
      hl: 'en',
      ie: 'UTF8'
    });

    return `https://www.google.com/maps/embed/v1/place?${params.toString()}`;
  }

  getDirectionsUrl(): string {
    const destination = encodeURIComponent(this.location.address);
    return `https://www.google.com/maps/dir/?api=1&destination=${destination}&travelmode=driving`;
  }
}
