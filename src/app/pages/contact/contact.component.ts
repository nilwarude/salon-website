import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormService, ContactFormData } from '../../services/form.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styles: [`
    .btn-primary {
      display: inline-flex; align-items: center; justify-content: center;
      padding: 0.875rem 2rem; background: #C8A96A; color: white;
      font-family: 'Poppins', sans-serif; font-weight: 500;
      font-size: 0.875rem; text-transform: uppercase;
      letter-spacing: 0.15em; transition: all 0.3s ease;
    }
    .btn-primary:hover { background: #A8833E; box-shadow: 0 4px 20px rgba(200, 169, 106, 0.3); }
    .btn-whatsapp {
      display: inline-flex; align-items: center; justify-content: center;
      padding: 0.875rem 2rem; background: #25D366; color: white;
      font-family: 'Poppins', sans-serif; font-weight: 500;
      font-size: 0.875rem; text-transform: uppercase;
      letter-spacing: 0.15em; transition: all 0.3s ease;
    }
    .btn-whatsapp:hover { background: #1DA851; box-shadow: 0 4px 20px rgba(37, 211, 102, 0.3); }
  `]
})
export class ContactComponent {
  private formService = inject(FormService);

  submitted = signal(false);
  submitting = signal(false);

  formData: ContactFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  };

  contactInfo = [
    { icon: '📍', title: 'Address', detail: 'Shop No-14, Harmony, Near Sai Baba Temple, Parivar Char Rasta, Waghodiya Road, Vadodara, Gujarat 390025' },
    { icon: '📞', title: 'Phone', detail: '+91 78619 35860' },
    { icon: '✉️', title: 'Email', detail: 'contact@hairbar.in' },
    { icon: '🕐', title: 'Working Hours', detail: 'Mon-Sun: 9AM-10PM' },
  ];

  errClass(valid: boolean | null, touched: boolean | undefined | null): string {
    if (valid) return 'border-dark/20';
    if (touched) return 'border-red-400';
    return 'border-dark/20';
  }

  onSubmit(): void {
    if (this.submitting()) return;
    this.submitting.set(true);

    this.formService.submitContact(this.formData).subscribe({
      next: () => {
        this.submitted.set(true);
        this.submitting.set(false);
      },
      error: () => {
        this.sendViaWhatsApp();
        this.submitted.set(true);
        this.submitting.set(false);
      },
    });
  }

  sendViaWhatsApp(): void {
    const message = this.formService.generateContactMessage(this.formData);
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
      message: '',
    };
    this.submitted.set(false);
  }
}