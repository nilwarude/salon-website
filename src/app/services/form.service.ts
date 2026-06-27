import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface AppointmentFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  stylist: string;
  date: string;
  time: string;
  notes: string;
}

export interface FormSubmissionResult {
  success: boolean;
  message: string;
  referenceId?: string;
}

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private http = inject(HttpClient);
  private apiUrl = (environment as any).apiUrl || 'https://hairbar.in/api';

  /**
   * Submit contact form data.
   * Falls back to mailto: if API is unavailable.
   */
  submitContact(data: ContactFormData): Observable<FormSubmissionResult> {
    // Try API first
    return this.http.post<FormSubmissionResult>(`${this.apiUrl}/contact`, data);
  }

  /**
   * Submit appointment booking data.
   * Falls back to mailto: if API is unavailable.
   */
  submitAppointment(data: AppointmentFormData): Observable<FormSubmissionResult> {
    return this.http.post<FormSubmissionResult>(`${this.apiUrl}/appointments`, data);
  }

  /**
   * Generate WhatsApp booking URL
   */
  getWhatsAppUrl(message: string): string {
    const phone = (environment as any).business?.whatsappPhone || (environment as any).whatsappPhone || '918291492821';
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${phone}?text=${encoded}`;
  }

  /**
   * Generate a booking message for WhatsApp
   */
  generateBookingMessage(data: AppointmentFormData): string {
    return `Hi Hairbar! I'd like to book an appointment:

Name: ${data.firstName} ${data.lastName}
Phone: ${data.phone}
Email: ${data.email || 'Not provided'}
Service: ${data.service}
Stylist: ${data.stylist}
Date: ${data.date}
Time: ${data.time}
Notes: ${data.notes || 'None'}

Please confirm my booking. Thank you!`;
  }

  /**
   * Generate a contact message for WhatsApp
   */
  generateContactMessage(data: ContactFormData): string {
    return `Hi Hairbar! I have a query:

Name: ${data.firstName} ${data.lastName}
Phone: ${data.phone}
Email: ${data.email || 'Not provided'}
Service: ${data.service || 'General'}
Message: ${data.message}

Please get back to me. Thank you!`;
  }
}