import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormService, AppointmentFormData } from '../../services/form.service';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './appointment.component.html',
  styles: [`
    .btn-primary {
      display: inline-flex; align-items: center; justify-content: center;
      padding: 1rem 2rem; background: #C8A96A; color: white;
      font-family: 'Poppins', sans-serif; font-weight: 500;
      font-size: 0.875rem; text-transform: uppercase;
      letter-spacing: 0.15em; transition: all 0.3s ease;
    }
    .btn-primary:hover { background: #A8833E; box-shadow: 0 4px 20px rgba(200,169,106,0.3); }
    .btn-whatsapp {
      display: inline-flex; align-items: center; justify-content: center;
      padding: 1rem 2rem; background: #25D366; color: white;
      font-family: 'Poppins', sans-serif; font-weight: 500;
      font-size: 0.875rem; text-transform: uppercase;
      letter-spacing: 0.15em; transition: all 0.3s ease;
    }
    .btn-whatsapp:hover { background: #1DA851; box-shadow: 0 4px 20px rgba(37, 211, 102, 0.3); }
    .btn-payment {
      display: inline-flex; align-items: center; justify-content: center;
      padding: 1rem 2rem; background: #00BEEF; color: white;
      font-family: 'Poppins', sans-serif; font-weight: 500;
      font-size: 0.875rem; text-transform: uppercase;
      letter-spacing: 0.15em; transition: all 0.3s ease;
    }
    .btn-payment:hover { background: #0099CC; box-shadow: 0 4px 20px rgba(0, 190, 239, 0.3); }
  `]
})
export class AppointmentComponent {
  private formService = inject(FormService);
  private paymentService = inject(PaymentService);

  submitted = signal(false);
  submitting = signal(false);
  paying = signal(false);

  formData: AppointmentFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    stylist: '',
    date: '',
    time: '',
    notes: '',
  };

  get minDate(): string {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }

  errClass(valid: boolean | null, touched: boolean | undefined | null): string {
    if (valid) return 'border-dark/20';
    if (touched) return 'border-red-400';
    return 'border-dark/20';
  }

  onSubmit(): void {
    if (this.submitting()) return;
    this.submitting.set(true);

    this.formService.submitAppointment(this.formData).subscribe({
      next: () => {
        this.submitted.set(true);
        this.submitting.set(false);
      },
      error: () => {
        this.bookViaWhatsApp();
        this.submitted.set(true);
        this.submitting.set(false);
      },
    });
  }

  async payWithRazorpay(): Promise<void> {
    if (this.submitting() || this.paying()) return;
    
    this.paying.set(true);
    const success = await this.paymentService.openPaymentModal({
      amount: this.getServicePrice(this.formData.service),
      currency: 'INR',
      name: 'Hairbar Unisex Salon',
      description: `${this.formData.service} - ${this.formData.date} at ${this.formData.time}`,
      prefill: {
        name: `${this.formData.firstName} ${this.formData.lastName}`,
        email: this.formData.email,
        contact: this.formData.phone,
      },
    });

    if (success) {
      this.onSubmit();
    }
    this.paying.set(false);
  }

  private getServicePrice(service: string): number {
    const prices: Record<string, number> = {
      'Haircut and Styling': 500,
      'Hair Color and Highlights': 3000,
      'Blowouts and Hair Spa': 1500,
      'Hair Treatments': 1500,
      'Bridal and Party Makeup': 4999,
      "Men's Grooming": 180,
      'Skin and Facial Care': 2500,
      'Nails and Manicure': 600,
    };
    return prices[service] || 500;
  }

  bookViaWhatsApp(): void {
    const message = this.formService.generateBookingMessage(this.formData);
    const url = this.formService.getWhatsAppUrl(message);
    window.open(url, '_blank');
  }

  resetForm(): void {
    this.formData = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: '',
      stylist: '',
      date: '',
      time: '',
      notes: '',
    };
    this.submitted.set(false);
  }
}