import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cookie-policy',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="relative pt-32 pb-20 bg-dark overflow-hidden">
      <div class="absolute inset-0 opacity-20" style="background: linear-gradient(135deg, #C8A96A 0%, transparent 50%, #C8A96A 100%);"></div>
      <div class="container-custom relative z-10">
        <div class="max-w-3xl">
          <p class="font-sans text-sm text-primary uppercase tracking-[0.25em] mb-4" data-aos="fade-up">Policies</p>
          <h1 class="font-serif text-4xl md:text-5xl lg:text-heading text-white font-bold" data-aos="fade-up" data-aos-delay="100">Cookie Policy</h1>
          <div class="w-16 h-0.5 bg-primary mt-6 mb-6" data-aos="fade-up" data-aos-delay="200"></div>
          <p class="text-white/70 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="300">Last updated: January 2026</p>
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="space-y-8 text-dark/70 leading-relaxed">

            <div>
              <h2 class="font-serif text-2xl text-dark mb-4">1. What Are Cookies</h2>
              <p>Cookies are small text files that are placed on your device when you visit a website. They help us improve your browsing experience by remembering your preferences, understanding how you use our site, and enabling certain functionality.</p>
            </div>

            <div>
              <h2 class="font-serif text-2xl text-dark mb-4">2. How We Use Cookies</h2>
              <p>We use cookies for the following purposes:</p>
              <ul class="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly. These cannot be disabled.</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website through Google Analytics.</li>
                <li><strong>Preference Cookies:</strong> Remember your preferences and settings for future visits.</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and measure their effectiveness.</li>
              </ul>
            </div>

            <div>
              <h2 class="font-serif text-2xl text-dark mb-4">3. Types of Cookies We Use</h2>
              <div class="overflow-x-auto">
                <table class="w-full text-sm border-collapse">
                  <thead>
                    <tr class="bg-section">
                      <th class="text-left p-3 font-sans font-medium">Cookie Type</th>
                      <th class="text-left p-3 font-sans font-medium">Purpose</th>
                      <th class="text-left p-3 font-sans font-medium">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b border-dark/10">
                      <td class="p-3">_ga</td>
                      <td class="p-3">Google Analytics - distinguish users</td>
                      <td class="p-3">2 years</td>
                    </tr>
                    <tr class="border-b border-dark/10">
                      <td class="p-3">_gid</td>
                      <td class="p-3">Google Analytics - distinguish users</td>
                      <td class="p-3">24 hours</td>
                    </tr>
                    <tr class="border-b border-dark/10">
                      <td class="p-3">_gat</td>
                      <td class="p-3">Google Analytics - throttle requests</td>
                      <td class="p-3">1 minute</td>
                    </tr>
                    <tr>
                      <td class="p-3">session</td>
                      <td class="p-3">Maintain session state</td>
                      <td class="p-3">Session</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 class="font-serif text-2xl text-dark mb-4">4. Managing Cookies</h2>
              <p>You can control and manage cookies in several ways:</p>
              <ul class="list-disc pl-6 space-y-2 mt-4">
                <li>Most browsers allow you to block or delete cookies through your browser settings.</li>
                <li>You can opt-out of Google Analytics tracking by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener" class="text-primary hover:underline">Google Analytics Opt-out Browser Add-on</a>.</li>
                <li>Disabling cookies may affect some features of our website.</li>
              </ul>
            </div>

            <div>
              <h2 class="font-serif text-2xl text-dark mb-4">5. Third-Party Cookies</h2>
              <p>We may use third-party services, such as Google Analytics and social media platforms, that set their own cookies. These are governed by the respective third-party privacy policies.</p>
            </div>

            <div>
              <h2 class="font-serif text-2xl text-dark mb-4">6. Updates to This Policy</h2>
              <p>We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
            </div>

            <div>
              <h2 class="font-serif text-2xl text-dark mb-4">7. Contact Us</h2>
              <p>If you have questions about our use of cookies, please contact us at:</p>
              <p class="mt-2">
                <strong>Email:</strong> contact&#64;hairbar.in<br>
                <strong>Phone:</strong> +91 78619 35860
              </p>
            </div>

          </div>

          <div class="mt-12 pt-8 border-t border-dark/10 text-center">
            <a routerLink="/" class="btn-primary text-sm">Back to Home</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .btn-primary {
      display: inline-flex; align-items: center; justify-content: center;
      padding: 0.875rem 2rem; background: #C8A96A; color: white;
      font-family: 'Poppins', sans-serif; font-weight: 500;
      font-size: 0.875rem; text-transform: uppercase;
      letter-spacing: 0.15em; transition: all 0.3s ease;
    }
    .btn-primary:hover { background: #A8833E; box-shadow: 0 4px 20px rgba(200,169,106,0.3); }
  `]
})
export class CookiePolicyComponent {}