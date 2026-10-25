import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl',
  standalone: true,
})
export class SafeUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  /**
   * Transform a URL into a safe resource URL for iframe src attributes
   * @param url The URL to sanitize
   * @returns SafeResourceUrl that can be used in iframe src
   */
  transform(url: string): SafeResourceUrl {
    if (!url) {
      return this.sanitizer.bypassSecurityTrustResourceUrl('');
    }
    
    // Check if it's a Google Maps URL (allow specific patterns)
    const isGoogleMapsUrl = 
      url.includes('google.com/maps') || 
      url.includes('maps.google.com') ||
      url.includes('maps.googleapis.com');
    
    if (!isGoogleMapsUrl) {
      console.warn('SafeUrlPipe: Non-Google Maps URL detected, use with caution:', url);
    }
    
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  /**
   * Transform URL for HTML binding (safe HTML)
   */
  transformHtml(url: string): SafeResourceUrl {
    return this.transform(url);
  }

  /**
   * Transform URL for style binding (safe style)
   */
  transformStyle(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${url})`);
  }
}