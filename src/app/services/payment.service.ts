import { Injectable, signal } from '@angular/core';

export interface PaymentOptions {
  amount: number;
  currency: string;
  name: string;
  description: string;
  orderId?: string;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  theme?: {
    color?: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private razorpayLoaded = signal(false);
  private razorpayKey = 'YOUR_RAZORPAY_KEY';

  loadRazorpay(): Promise<boolean> {
    return new Promise((resolve) => {
      if (this.razorpayLoaded()) {
        resolve(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        this.razorpayLoaded.set(true);
        resolve(true);
      };
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  }

  createOrder(amount: number, currency = 'INR'): Promise<{ orderId: string; success: boolean }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          orderId: 'order_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
          success: true,
        });
      }, 500);
    });
  }

  async openPaymentModal(options: PaymentOptions): Promise<boolean> {
    const loaded = await this.loadRazorpay();
    if (!loaded) {
      console.error('Failed to load Razorpay');
      return false;
    }

    const order = await this.createOrder(options.amount, options.currency);
    if (!order.success) {
      return false;
    }

    return new Promise((resolve) => {
      const rzp = new (window as any).Razorpay({
        key: this.razorpayKey,
        amount: options.amount * 100,
        currency: options.currency,
        name: options.name,
        description: options.description,
        order_id: order.orderId,
        handler: () => {
          resolve(true);
        },
        prefill: options.prefill || {},
        theme: options.theme || { color: '#C8A96A' },
        modal: {
          ondismiss: () => resolve(false),
        },
      });
      rzp.open();
    });
  }
}