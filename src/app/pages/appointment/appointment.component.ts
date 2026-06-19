import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [],
  template: `
    <section class="relative pt-32 pb-20 bg-dark overflow-hidden">
      <div class="absolute inset-0 opacity-20" style="background: linear-gradient(135deg, #C8A96A 0%, transparent 50%, #C8A96A 100%);"></div>
      <div class="container-custom relative z-10">
        <div class="max-w-3xl">
          <p class="font-sans text-sm text-primary uppercase tracking-[0.25em] mb-4" data-aos="fade-up">Appointment</p>
          <h1 class="font-serif text-4xl md:text-5xl lg:text-heading text-white font-bold" data-aos="fade-up" data-aos-delay="100">Book Your Experience</h1>
          <div class="w-16 h-0.5 bg-primary mt-6 mb-6" data-aos="fade-up" data-aos-delay="200"></div>
          <p class="text-white/70 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="300">Schedule your visit and let us create magic.</p>
        </div>
      </div>
    </section>
    <section class="section-padding">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <!-- Form -->
            <div class="lg:col-span-3" data-aos="fade-right">
              <h2 class="font-serif text-2xl text-dark mb-8">Appointment Details</h2>
              <form class="space-y-6">
                <div class="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name *" class="w-full px-4 py-3 border border-dark/20 text-sm focus:outline-none focus:border-primary transition-colors" required>
                  <input type="text" placeholder="Last Name *" class="w-full px-4 py-3 border border-dark/20 text-sm focus:outline-none focus:border-primary transition-colors" required>
                </div>
                <input type="email" placeholder="Email Address *" class="w-full px-4 py-3 border border-dark/20 text-sm focus:outline-none focus:border-primary transition-colors" required>
                <input type="tel" placeholder="Phone Number *" class="w-full px-4 py-3 border border-dark/20 text-sm focus:outline-none focus:border-primary transition-colors" required>
                <select class="w-full px-4 py-3 border border-dark/20 text-sm focus:outline-none focus:border-primary transition-colors bg-white">
                  <option value="" disabled selected>Select Service *</option>
                  <option>Haircut & Styling</option>
                  <option>Hair Color & Highlights</option>
                  <option>Blowouts & Hair Spa</option>
                  <option>Hair Treatments</option>
                  <option>Bridal & Party Makeup</option>
                  <option>Men's Grooming</option>
                  <option>Skin & Facial Care</option>
                  <option>Nails & Manicure</option>
                </select>
                <select class="w-full px-4 py-3 border border-dark/20 text-sm focus:outline-none focus:border-primary transition-colors bg-white">
                  <option value="" disabled selected>Select Stylist</option>
                  <option>Any Stylist</option>
                </select>
                <div class="grid grid-cols-2 gap-4">
                  <input type="date" class="w-full px-4 py-3 border border-dark/20 text-sm focus:outline-none focus:border-primary transition-colors">
                  <input type="time" class="w-full px-4 py-3 border border-dark/20 text-sm focus:outline-none focus:border-primary transition-colors">
                </div>
                <textarea rows="4" placeholder="Special Requests or Notes" class="w-full px-4 py-3 border border-dark/20 text-sm focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
                <button type="submit" class="btn-primary w-full text-center text-sm py-4">Confirm Booking</button>
              </form>
            </div>
            <!-- Sidebar -->
            <div class="lg:col-span-2" data-aos="fade-left">
              <div class="bg-section p-8 space-y-6">
                <h3 class="font-serif text-xl text-dark">Booking Information</h3>
                <div class="space-y-4 text-sm text-dark/70">
                  <p>Please arrive 10 minutes before your appointment to complete any necessary forms.</p>
                  <p>Cancellations must be made at least 24 hours in advance to avoid charges.</p>
                  <p>We recommend booking at least one week in advance for weekend appointments.</p>
                </div>
                <div class="pt-6 border-t border-dark/10">
                  <h4 class="font-serif text-base text-dark mb-4">Quick Contact</h4>
                   <p class="text-sm text-dark/60">Call us: +91 78619 35860</p>
                   <p class="text-sm text-dark/60">Email: contact&#64;hairbar.in</p>
                </div>
                <div class="pt-6 border-t border-dark/10">
                  <h4 class="font-serif text-base text-dark mb-4">Working Hours</h4>
                  <div class="space-y-2 text-sm">
                     <div class="flex justify-between text-dark/60"><span>Mon - Sun</span><span>9AM - 10PM</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .btn-primary {
      display: inline-flex; align-items: center; justify-content: center;
      padding: 1rem 2rem; background: #C8A96A; color: white;
      font-family: 'Poppins', sans-serif; font-weight: 500;
      font-size: 0.875rem; text-transform: uppercase;
      letter-spacing: 0.15em; transition: all 0.3s ease;
    }
    .btn-primary:hover { background: #A8833E; box-shadow: 0 4px 20px rgba(200,169,106,0.3); }
  `]
})
export class AppointmentComponent {}