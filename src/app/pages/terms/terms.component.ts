import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="relative pt-32 pb-20 bg-dark overflow-hidden">
      <div class="absolute inset-0 opacity-20" style="background: linear-gradient(135deg, #C8A96A 0%, transparent 50%, #C8A96A 100%);"></div>
      <div class="container-custom relative z-10">
        <div class="max-w-3xl">
          <p class="font-sans text-sm text-primary uppercase tracking-[0.25em] mb-4" data-aos="fade-up">Policies</p>
          <h1 class="font-serif text-4xl md:text-5xl lg:text-heading text-white font-bold" data-aos="fade-up" data-aos-delay="100">Terms of Service</h1>
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
              <h2 class="font-serif text-2xl text-dark mb-4">1. Appointment Booking</h2>
              <ul class="list-disc pl-6 space-y-2">
                <li>Appointments can be booked online, via phone, or in person at our salon.</li>
                <li>We recommend booking at least 24 hours in advance to secure your preferred time slot.</li>
                <li>Same-day appointments are subject to availability. Please call us for urgent bookings.</li>
                <li>For bridal packages, we recommend booking at least 2-3 months in advance.</li>
              </ul>
            </div>

            <div>
              <h2 class="font-serif text-2xl text-dark mb-4">2. Cancellation & Rescheduling</h2>
              <ul class="list-disc pl-6 space-y-2">
                <li>Cancellations must be made at least 24 hours before your scheduled appointment time.</li>
                <li>Late cancellations (less than 24 hours notice) may result in a 50% service charge.</li>
                <li>No-shows will be charged the full service amount for the booked services.</li>
                <li>Rescheduling is complimentary if done 24 hours in advance.</li>
                <li>We understand emergencies happen and handle them on a case-by-case basis.</li>
              </ul>
            </div>

            <div>
              <h2 class="font-serif text-2xl text-dark mb-4">3. Pricing & Payments</h2>
              <ul class="list-disc pl-6 space-y-2">
                <li>All prices are listed in Indian Rupees (INR) and are subject to applicable taxes.</li>
                <li>Prices may vary based on hair length, texture, and product usage.</li>
                <li>We accept cash, UPI, credit/debit cards, and digital wallets.</li>
                <li>Prices are subject to change without prior notice. Confirmed bookings are honored at the quoted price.</li>
                <li>Special promotional offers cannot be combined with other discounts.</li>
              </ul>
            </div>

            <div>
              <h2 class="font-serif text-2xl text-dark mb-4">4. Service Guarantee</h2>
              <p>We strive to provide the highest quality services. If you are not satisfied with your service, please let us know within 48 hours, and we will work with you to make it right. Color corrections and major adjustments may require a separate appointment.</p>
            </div>

            <div>
              <h2 class="font-serif text-2xl text-dark mb-4">5. Salon Policies</h2>
              <ul class="list-disc pl-6 space-y-2">
                <li>Children must be supervised by a parent or guardian at all times.</li>
                <li>We reserve the right to refuse service to anyone.</li>
                <li>Personal belongings are the responsibility of the client. We are not liable for lost or stolen items.</li>
                <li>Please inform us of any allergies or medical conditions before receiving services.</li>
                <li>Our salon is a fragrance-free zone to accommodate clients with sensitivities.</li>
              </ul>
            </div>

            <div>
              <h2 class="font-serif text-2xl text-dark mb-4">6. Intellectual Property</h2>
              <p>All content on this website, including text, images, logos, and designs, is the property of Hairbar Unisex Salon and is protected by applicable intellectual property laws. Unauthorized use or reproduction is prohibited.</p>
            </div>

            <div>
              <h2 class="font-serif text-2xl text-dark mb-4">7. Limitation of Liability</h2>
              <p>Hairbar Unisex Salon shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website, to the fullest extent permitted by law.</p>
            </div>

            <div>
              <h2 class="font-serif text-2xl text-dark mb-4">8. Contact</h2>
              <p>For questions about these terms, please contact us at:</p>
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
export class TermsComponent {}