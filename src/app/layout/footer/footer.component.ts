import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-dark text-white">
      <!-- Main Footer -->
      <div class="container-custom section-padding">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <!-- Brand -->
          <div class="lg:col-span-1">
            <a routerLink="/" class="inline-block mb-6">
              <div class="font-serif text-2xl font-bold tracking-wider">
                <span class="text-primary">✦</span> LUXURY
                <span class="block text-xs tracking-[0.3em] font-sans font-light text-white/60">SALON</span>
              </div>
            </a>
            <p class="text-white/60 text-sm leading-relaxed mb-6">
              Experience the pinnacle of luxury hair care and beauty treatments. 
              Where artistry meets elegance.
            </p>
            <!-- Social Links -->
            <div class="flex gap-3">
              @for (social of socialLinks; track social.name) {
                <a
                  [href]="social.url"
                  class="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-all duration-300"
                  [attr.aria-label]="social.name"
                >
                  <svg class="w-4 h-4" fill="currentColor" [attr.viewBox]="social.viewBox">
                    <path [attr.d]="social.path"/>
                  </svg>
                </a>
              }
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="font-serif text-lg mb-6 text-primary">Quick Links</h4>
            <ul class="space-y-3">
              @for (link of quickLinks; track link.path) {
                <li>
                  <a
                    [routerLink]="link.path"
                    class="text-white/60 text-sm hover:text-primary transition-colors duration-300"
                  >
                    {{ link.label }}
                  </a>
                </li>
              }
            </ul>
          </div>

          <!-- Services -->
          <div>
            <h4 class="font-serif text-lg mb-6 text-primary">Services</h4>
            <ul class="space-y-3">
              @for (service of services; track service.name) {
                <li>
                  <a
                    routerLink="/services"
                    class="text-white/60 text-sm hover:text-primary transition-colors duration-300"
                  >
                    {{ service.name }}
                  </a>
                </li>
              }
            </ul>
          </div>

          <!-- Newsletter & Hours -->
          <div>
            <h4 class="font-serif text-lg mb-6 text-primary">Newsletter</h4>
            <p class="text-white/60 text-sm mb-4">
              Subscribe for exclusive offers and updates.
            </p>
            <form class="flex flex-col gap-3" (submit)="$event.preventDefault(); subscribe()">
              <input
                type="email"
                placeholder="Your email address"
                class="w-full px-4 py-3 bg-white/10 border border-white/20 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                class="btn-primary w-full text-center text-xs"
              >
                Subscribe
              </button>
            </form>

            <!-- Working Hours -->
            <div class="mt-8">
              <h4 class="font-serif text-lg mb-4 text-primary">Hours</h4>
              <div class="space-y-2 text-sm">
                @for (hour of workingHours; track hour.day) {
                  <div class="flex justify-between text-white/60">
                    <span>{{ hour.day }}</span>
                    <span>{{ hour.time }}</span>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-white/10">
        <div class="container-custom">
          <div class="flex flex-col md:flex-row items-center justify-between py-6 gap-4">
            <p class="text-white/40 text-xs">
              &copy; {{ currentYear }} Luxury Salon. All rights reserved.
            </p>
            <div class="flex gap-6">
              <a href="#" class="text-white/40 text-xs hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" class="text-white/40 text-xs hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" class="text-white/40 text-xs hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    :host {
      display: block;
    }

    .btn-primary {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem 1.5rem;
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
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socialLinks = [
    {
      name: 'Facebook',
      url: '#',
      viewBox: '0 0 24 24',
      path: 'M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z'
    },
    {
      name: 'Instagram',
      url: '#',
      viewBox: '0 0 24 24',
      path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
    },
    {
      name: 'Pinterest',
      url: '#',
      viewBox: '0 0 24 24',
      path: 'M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.696-2.43-2.878-2.43-4.646 0-3.784 2.749-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z'
    },
    {
      name: 'YouTube',
      url: '#',
      viewBox: '0 0 24 24',
      path: 'M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z'
    }
  ];

  quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/team', label: 'Our Team' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  services = [
    { name: 'Haircuts & Styling' },
    { name: 'Color & Highlights' },
    { name: 'Bridal Packages' },
    { name: 'Hair Treatments' },
    { name: 'Blowouts & Updos' },
    { name: 'Men\'s Grooming' },
  ];

  workingHours = [
    { day: 'Mon - Fri', time: '9:00 AM - 7:00 PM' },
    { day: 'Saturday', time: '9:00 AM - 5:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ];

  subscribe() {
    // Newsletter subscription logic
    console.log('Newsletter subscription triggered');
  }
}