import { Component, OnInit, Inject, PLATFORM_ID, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
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
export class AppComponent implements OnInit {
  title = 'salon-website';
  isBrowser = signal(false);

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
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
  }
}