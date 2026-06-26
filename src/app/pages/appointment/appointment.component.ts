import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormService, AppointmentFormData } from '../../services/form.service';

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
  `]
})
export class AppointmentComponent {
  private formService = inject(FormService);

  submitted = signal(false);
  submitting = signal(false);

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