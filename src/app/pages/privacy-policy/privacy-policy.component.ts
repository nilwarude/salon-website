import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="relative pt-32 pb-20 bg-dark overflow-hidden">
      <div class="absolute inset-0 opacity-20" style="background: linear-gradient(135deg, #C8A96A 0%, transparent 50%, #C8A96A 100%);"></div>
      <div class="container-custom relative z-10">
        <div class="max-w-3xl">
          <p class="font-sans text-sm text-primary uppercase tracking-[0.25em] mb-4" data-aos="fade-up">Policies</p>
          <h1 class="font-serif text-4xl md:text-5xl lg:text-heading text-white font-bold" data-aos="fade-up" data-aos-delay="100">Privacy Policy</h1>
          <div class="w-16 h-0.5 bg-primary mt-6 mb-6" data-aos="fade-up" data-aos-delay="200"></div>
          <p class="text-white/70 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="300">Last updated: January 2026</p>
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto prose prose-lg">
          <div class="space-y-8 text-dark/70 leading-relaxed">

            <div>
              <h2 class="font-serif text-2xl text-dark mb-4">1. Introduction</h2>
              <p>Hairbar Unisex Salon ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
            </div>

            <div>
              <h2 class="font-serif text-2xl text-dark mb-4">2. Information We Collect</h2>
              <h3 class="font-serif text-xl text-dark mb-2">Personal Information</h3>
              <ul class="list-disc pl-6 space-y-2">
                <li>Name and contact details (email address, phone number, mailing address)</li>
                <li>Appointment history and service preferences</li>
                <li>Payment information (processed securely through our payment partners)</li>
                <li>Communication preferences</li>
              </ul>
              <h3 class="font-serif text-xl text-dark mt-6 mb-2">Automatically Collected Information</h3>
              <ul class="list-disc pl-6 space-y-2">
                <li>IP address and browser type</li>
                <li>Pages visited and time spent on our website</li>
                <li>Device information and operating system</li>
                <li>Referring URL and exit pages</li>
              </ul>
            </div>

            <div>
              <h2 class="font-serif text-2xl text-dark mb-4">3. How We Use Your Information</h2>
              <ul class="list-disc pl-6 space-y-2">
                <li>To process and manage your salon appointments</li>
                <li>To send appointment confirmations and reminders</li>
                <li>To improve our services and customer experience</li>
                <li>To send promotional offers and updates (with your consent)</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 class="font-serif text-2xl text-dark mb-4">4. Data Protection</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your data is stored securely and access is restricted to authorized personnel only.</p>
            </div>

            <div>
              <h2 class="font-serif text-2xl text-dark mb-4">5. Third-Party Services</h2>
              <p>We may share your information with trusted third-party service providers who assist us in operating our website and business, provided they agree to keep your information confidential. We use:</p>
              <ul class="list-disc pl-6 space-y-2">
                <li>Google Analytics for website usage analysis</li>
                <li>Payment processors for secure transaction handling</li>
                <li>WhatsApp and email services for communication</li>
              </ul>
            </div>

            <div>
              <h2 class="font-serif text-2xl text-dark mb-4">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul class="list-disc pl-6 space-y-2">
                <li>Access your personal data held by us</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent for marketing communications</li>
                <li>Lodge a complaint with relevant data protection authorities</li>
              </ul>
            </div>

            <div>
              <h2 class="font-serif text-2xl text-dark mb-4">7. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us at:</p>
              <p class="mt-2">
                <strong>Email:</strong> contact&#64;hairbar.in<br>
                <strong>Phone:</strong> +91 78619 35860<br>
                <strong>Address:</strong> Shop No-14, Harmony, Near Sai Baba Temple, Parivar Char Rasta, Waghodiya Road, Vadodara, Gujarat 390025
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
    .prose ul { color: rgba(17,17,17,0.7); }
  `]
})
export class PrivacyPolicyComponent {}