import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section class="relative pt-32 pb-20 bg-dark overflow-hidden">
      <div class="absolute inset-0 opacity-20" style="background: linear-gradient(135deg, #C8A96A 0%, transparent 50%, #C8A96A 100%);"></div>
      <div class="container-custom relative z-10">
        <div class="max-w-3xl">
          <p class="font-sans text-sm text-primary uppercase tracking-[0.25em] mb-4" data-aos="fade-up">Contact</p>
          <h1 class="font-serif text-4xl md:text-5xl lg:text-heading text-white font-bold" data-aos="fade-up" data-aos-delay="100">Get In Touch</h1>
          <div class="w-16 h-0.5 bg-primary mt-6 mb-6" data-aos="fade-up" data-aos-delay="200"></div>
          <p class="text-white/70 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="300">We'd love to hear from you. Reach out to us for any inquiries or to book your appointment.</p>
        </div>
      </div>
    </section>
    <section class="section-padding">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <!-- Contact Form -->
          <div data-aos="fade-right">
            <h2 class="font-serif text-2xl text-dark mb-8">Send Us a Message</h2>
            <form class="space-y-6">
              <div class="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" class="w-full px-4 py-3 border border-dark/20 text-sm focus:outline-none focus:border-primary transition-colors bg-white">
                <input type="text" placeholder="Last Name" class="w-full px-4 py-3 border border-dark/20 text-sm focus:outline-none focus:border-primary transition-colors bg-white">
              </div>
              <input type="email" placeholder="Email Address" class="w-full px-4 py-3 border border-dark/20 text-sm focus:outline-none focus:border-primary transition-colors bg-white">
              <input type="tel" placeholder="Phone Number" class="w-full px-4 py-3 border border-dark/20 text-sm focus:outline-none focus:border-primary transition-colors bg-white">
              <select class="w-full px-4 py-3 border border-dark/20 text-sm focus:outline-none focus:border-primary transition-colors bg-white text-dark/60">
                <option value="" disabled selected>Select Service</option>
                <option>Haircut & Styling</option>
                <option>Color & Highlights</option>
                <option>Bridal Packages</option>
                <option>Hair Treatments</option>
                <option>Other</option>
              </select>
              <textarea rows="5" placeholder="Your Message" class="w-full px-4 py-3 border border-dark/20 text-sm focus:outline-none focus:border-primary transition-colors bg-white resize-none"></textarea>
              <button type="submit" class="btn-primary w-full text-center">Send Message</button>
            </form>
          </div>
          <!-- Contact Info -->
          <div data-aos="fade-left" class="space-y-8">
            <div>
              <h2 class="font-serif text-2xl text-dark mb-8">Contact Information</h2>
            </div>
            @for (item of contactInfo; track item.title) {
              <div class="flex gap-5">
                <div class="w-12 h-12 bg-section flex items-center justify-center flex-shrink-0">
                  <span class="text-xl">{{ item.icon }}</span>
                </div>
                <div>
                  <h4 class="font-serif text-base text-dark mb-1">{{ item.title }}</h4>
                  <p class="text-dark/60 text-sm">{{ item.detail }}</p>
                </div>
              </div>
            }
            <!-- Map -->
            <div class="mt-8 bg-dark/5 aspect-[16/9] flex items-center justify-center">
              <p class="text-dark/40 text-sm">Google Map Integration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .btn-primary {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.875rem 2rem;
      background: #C8A96A;
      color: white;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 0.875rem;
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
export class ContactComponent {
  contactInfo = [
    { icon: '📍', title: 'Address', detail: '123 Luxury Avenue, Beverly Hills, CA 90210' },
    { icon: '📞', title: 'Phone', detail: '+1 (555) 123-4567' },
    { icon: '✉️', title: 'Email', detail: 'contact@luxurysalon.com' },
    { icon: '🕐', title: 'Working Hours', detail: 'Mon-Fri: 9AM-7PM, Sat: 9AM-5PM, Sun: Closed' },
  ];
}