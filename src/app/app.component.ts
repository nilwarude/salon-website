import { Component, OnInit, Inject, PLATFORM_ID, signal, OnDestroy } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { Subject, filter, takeUntil } from 'rxjs';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="app-wrapper min-h-screen flex flex-col">
      <app-header />
      <main class="flex-1">
        <router-outlet />
      </main>
      <app-footer />
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
  `]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Hairbar Unisex Salon';
  isBrowser = signal(false);
  private destroy$ = new Subject<void>();

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