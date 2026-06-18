import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      [class.bg-white]="isScrolled()"
      [class.shadow-premium]="isScrolled()"
      [class.bg-transparent]="!isScrolled()"
    >
      <!-- Top Bar -->
      <div
        class="hidden lg:block border-b transition-all duration-300"
        [class]="isScrolled() ? 'border-primary/20' : 'border-white/20'"
      >
        <div class="container-custom">
          <div class="flex items-center justify-between h-10">
            <div class="flex items-center gap-6">
              <a
                href="tel:+917861935860"
                class="text-xs tracking-wider transition-colors"
                [class.text-dark-700]="isScrolled()"
                [class.text-white]="!isScrolled()"
              >
                <span class="font-sans">+91 78619 35860</span>
              </a>
              <span
                class="text-xs tracking-wider"
                [class]="isScrolled() ? 'text-dark-500' : 'text-white/60'"
              >
                Mon - Sun: 9AM - 10PM
              </span>
            </div>
            <div class="flex items-center gap-4">
              <a
                href="https://facebook.com/hairbarsaloon"
                target="_blank"
                rel="noopener"
                class="text-xs tracking-wider transition-colors hover:text-primary"
                [class.text-dark-700]="isScrolled()"
                [class.text-white]="!isScrolled()"
              >
                <svg class="w-4 h-4 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
                Facebook
              </a>
              <a
                href="https://instagram.com/hairbar.official"
                target="_blank"
                rel="noopener"
                class="text-xs tracking-wider transition-colors hover:text-primary"
                [class.text-dark-700]="isScrolled()"
                [class.text-white]="!isScrolled()"
              >
                <svg class="w-4 h-4 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Navigation -->
      <nav
        class="transition-all duration-300"
        [class.py-2]="isScrolled()"
        [class.py-4]="!isScrolled()"
      >
        <div class="container-custom">
          <div class="flex items-center justify-between">
            <!-- Logo -->
            <a
              routerLink="/"
              class="relative z-10"
              aria-label="Hairbar Unisex Salon Home"
            >
              <div
                class="font-serif text-2xl md:text-3xl font-bold tracking-wider transition-colors"
                [class.text-dark]="isScrolled()"
                [class.text-white]="!isScrolled()"
              >
                <span class="text-primary">✦</span> HAIRBAR
                <span
                  class="block text-xs tracking-[0.3em] font-sans font-light"
                  [class]="isScrolled() ? 'text-dark-600' : 'text-white/80'"
                >UNISEX SALON</span>
              </div>
            </a>

            <!-- Desktop Navigation -->
            <ul class="hidden lg:flex items-center gap-8">
              @for (link of navLinks; track link.path) {
                <li>
                  <a
                    [routerLink]="link.path"
                    routerLinkActive="text-primary"
                    [routerLinkActiveOptions]="{exact: true}"
                    class="relative text-sm font-sans font-medium uppercase tracking-[0.15em] transition-colors gold-border-animate pb-1"
                    [class.text-dark]="isScrolled()"
                    [class.text-white]="!isScrolled()"
                  >
                    {{ link.label }}
                  </a>
                </li>
              }
            </ul>

            <!-- Desktop CTA -->
            <div class="hidden lg:flex items-center gap-4">
              <a
                routerLink="/appointment"
                class="btn-primary text-xs px-6 py-2.5"
              >
                Book Appointment
              </a>
            </div>

            <!-- Mobile Menu Button -->
            <button
              class="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center"
              (click)="toggleMobileMenu()"
              aria-label="Toggle mobile menu"
            >
              <div class="w-6 flex flex-col gap-1.5">
                <span
                  class="block h-0.5 w-full transition-all duration-300"
                  [class.bg-dark]="isScrolled() || mobileMenuOpen()"
                  [class.bg-white]="!isScrolled() && !mobileMenuOpen()"
                  [class.rotate-45]="mobileMenuOpen()"
                  [class.translate-y-2]="mobileMenuOpen()"
                ></span>
                <span
                  class="block h-0.5 w-full transition-all duration-300"
                  [class.bg-dark]="isScrolled() || mobileMenuOpen()"
                  [class.bg-white]="!isScrolled() && !mobileMenuOpen()"
                  [class.opacity-0]="mobileMenuOpen()"
                ></span>
                <span
                  class="block h-0.5 w-full transition-all duration-300"
                  [class.bg-dark]="isScrolled() || mobileMenuOpen()"
                  [class.bg-white]="!isScrolled() && !mobileMenuOpen()"
                  [class.-rotate-45]="mobileMenuOpen()"
                  [class.-translate-y-2]="mobileMenuOpen()"
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      <!-- Mobile Menu Overlay -->
      @if (mobileMenuOpen()) {
        <div
          class="fixed inset-0 bg-black/50 z-40 lg:hidden"
          (click)="closeMobileMenu()"
        ></div>
      }

      <!-- Mobile Menu Drawer -->
      <div
        class="fixed top-0 right-0 h-full w-80 bg-white z-40 lg:hidden transform transition-transform duration-300 shadow-2xl"
        [class.translate-x-0]="mobileMenuOpen()"
        [class.translate-x-full]="!mobileMenuOpen()"
      >
        <div class="pt-24 px-8">
          <ul class="flex flex-col gap-6">
            @for (link of navLinks; track link.path) {
              <li>
                <a
                  [routerLink]="link.path"
                  (click)="closeMobileMenu()"
                  class="text-dark font-serif text-2xl tracking-wide transition-colors hover:text-primary block"
                >
                  {{ link.label }}
                </a>
              </li>
            }
          </ul>

          <div class="mt-10 pt-8 border-t border-dark/10">
            <a
              routerLink="/appointment"
              class="btn-primary w-full text-center"
              (click)="closeMobileMenu()"
            >
              Book Appointment
            </a>

            <div class="mt-6 space-y-3">
              <a href="tel:+917861935860" class="flex items-center gap-3 text-dark-600 hover:text-primary transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span class="font-sans text-sm">+91 78619 35860</span>
              </a>
              <a href="mailto:contact@hairbar.in" class="flex items-center gap-3 text-dark-600 hover:text-primary transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span class="font-sans text-sm">contact&#64;hairbar.in</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    :host {
      display: block;
    }

    .gold-border-animate::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: #C8A96A;
      transition: width 0.3s ease;
    }

    .gold-border-animate:hover::after {
      width: 100%;
    }

    .btn-primary {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.625rem 1.5rem;
      background: #C8A96A;
      color: white;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      transition: all 0.3s ease;
    }

    .btn-primary:hover {
      background: #A8833E;
      box-shadow: 0 4px 20px rgba(200, 169, 106, 0.3);
      transform: translateY(-0.5px);
    }
  `]
})
export class HeaderComponent {
  isScrolled = signal(false);
  mobileMenuOpen = signal(false);

  navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/contact', label: 'Contact' },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update((prev) => !prev);
    if (this.mobileMenuOpen()) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
    document.body.style.overflow = '';
  }
}