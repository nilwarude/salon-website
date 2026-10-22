import { Injectable, signal } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

export interface SeoData {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
}

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  private siteName = 'Hairbar Unisex Salon';
  private defaultImage = '/assets/images/og-image.svg';
  private baseUrl = 'https://hairbar.in';

  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router
  ) {
    // Auto-update meta tags on navigation
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // If route data has title/description, they're already set via Angular's TitleStrategy.
        // We need to sync OG/Twitter tags with them.
        const currentTitle = this.title.getTitle();
        const currentDesc =
          this.meta.getTag('name="description"')?.getAttribute('content') || '';

        this.updateSocialTags({
          title: currentTitle,
          description: currentDesc,
          ogUrl: this.baseUrl + this.router.url,
        });
      });
  }

  /**
   * Update all SEO meta tags for a given route.
   * Call this from page components' ngOnInit.
   */
  updateSeoData(data: SeoData): void {
    const title = data.title || this.siteName;
    const description = data.description || '';
    const ogImage = data.ogImage || this.defaultImage;
    const canonicalUrl = data.canonicalUrl || this.baseUrl + this.router.url;

    // Primary tags
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'title', content: title });
    this.meta.updateTag({ name: 'description', content: description });

    // Canonical
    this.meta.updateTag({ rel: 'canonical', href: canonicalUrl });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: data.ogTitle || title });
    this.meta.updateTag({
      property: 'og:description',
      content: data.ogDescription || description,
    });
    this.meta.updateTag({ property: 'og:url', content: data.ogUrl || canonicalUrl });
    this.meta.updateTag({ property: 'og:image', content: ogImage });
    this.meta.updateTag({ property: 'og:site_name', content: this.siteName });

    // Twitter
    this.meta.updateTag({
      property: 'twitter:title',
      content: data.twitterTitle || data.ogTitle || title,
    });
    this.meta.updateTag({
      property: 'twitter:description',
      content: data.twitterDescription || data.ogDescription || description,
    });
    this.meta.updateTag({
      property: 'twitter:image',
      content: data.twitterImage || ogImage,
    });
  }

  /**
   * Quick update for social tags only (used during navigation sync).
   */
  private updateSocialTags(data: Partial<SeoData>): void {
    if (data.title) {
      this.meta.updateTag({ property: 'og:title', content: data.ogTitle || data.title });
      this.meta.updateTag({ property: 'twitter:title', content: data.twitterTitle || data.ogTitle || data.title });
    }
    if (data.description) {
      this.meta.updateTag({
        property: 'og:description',
        content: data.ogDescription || data.description,
      });
      this.meta.updateTag({
        property: 'twitter:description',
        content: data.twitterDescription || data.ogDescription || data.description,
      });
    }
    if (data.ogUrl) {
      this.meta.updateTag({ property: 'og:url', content: data.ogUrl });
    }
  }

  /**
   * Add structured data (JSON-LD) for the current page.
   * Removes any previously injected script first to avoid duplicates.
   */
  addStructuredData(jsonLd: Record<string, unknown>): void {
    // Remove existing script if any
    const existing = document.getElementById('seo-structured-data');
    if (existing) {
      existing.remove();
    }

    const script = document.createElement('script');
    script.id = 'seo-structured-data';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
  }
}