import { Component, OnInit, Inject, PLATFORM_ID, signal, OnDestroy } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { Subject, filter, takeUntil } from 'rxjs';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { WhatsAppButtonComponent } from './components/whatsapp-button/whatsapp-button.component';
import { PromoPopupComponent } from './components/promo-popup/promo-popup.component';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, WhatsAppButtonComponent, PromoPopupComponent],
  template: `
    <div class="app-wrapper min-h-screen flex flex-col">
      <app-header />
      <main class="flex-1">
        <router-outlet />
      </main>
      <app-footer />

      <!-- WhatsApp Floating Button -->
      <app-whatsapp-button />

      <!-- Promotional Popup -->
      <app-promo-popup />

      <!-- Mobile Sticky Booking Bar -->
      <div class="mobile-sticky-bar">
        <div class="flex items-center justify-between px-4 py-3">
          <div class="flex items-center gap-3">
            <a href="tel:{{phoneNumber}}" class="flex items-center gap-2 text-white text-sm font-medium hover:text-primary transition-colors focus-ring" [attr.aria-label]="'Call us at ' + phoneNumber">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span class="hidden xs:inline">Call Now</span>
            </a>
            <span class="text-white/30" aria-hidden="true">|</span>
            <a [href]="whatsappUrl" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-white text-sm font-medium hover:text-[#25D366] transition-colors focus-ring" [attr.aria-label]="'Book via WhatsApp'">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span class="hidden xs:inline">WhatsApp</span>
            </a>
          </div>
          <a routerLink="/appointment" class="bg-primary text-white text-xs font-sans font-medium uppercase tracking-wider px-5 py-2.5 hover:bg-[#A8833E] transition-colors focus-ring">
            Book Now
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .app-wrapper {
      opacity: 0;
      animation: fadeIn 0.5s ease-out forwards;
    }

    @keyframes fadeIn {
      to { opacity: 1; }
    }

    .mobile-sticky-bar {
      display: none;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: #1A1A1A;
      z-index: 100;
      border-top: 1px solid rgba(255,255,255,0.1);
    }

    @media (max-width: 1023px) {
      .mobile-sticky-bar {
        display: block;
      }
    }
  `]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Hairbar Unisex Salon';
  isBrowser = signal(false);
  private destroy$ = new Subject<void>();

  phoneNumber = (environment as any).business?.primaryPhone || '+917861935860';

  get whatsappUrl(): string {
    const defaultMsg = encodeURIComponent('Hi Hairbar! I\'d like to book an appointment.');
    const phone = (environment as any).business?.whatsappPhone || (environment as any).whatsappPhone || '918291492821';
    return `https://wa.me/${phone}?text=${defaultMsg}`;
  }

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser.set(true);
    }
  }

  ngOnInit(): void {
    // Initialize AOS
    if (this.isBrowser()) {
      import('aos').then((AOS) => {
        AOS.default.init({
          duration: 800,
          easing: 'ease-out-cubic',
          once: true,
          offset: 120,
          delay: 100,
        });
      });
    }

    // Scroll to top on every navigation
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.viewportScroller.scrollToPosition([0, 0]);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}