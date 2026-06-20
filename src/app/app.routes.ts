import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Hairbar Unisex Salon | Premium Hair & Beauty Studio in Vadodara',
    data: {
      title: 'Home',
      description:
        'Vadodara\'s premium unisex salon offering expert haircuts, hair color, styling, skin care, nails, and makeup services. Beardo Award Winner with 4.7 stars on Google.',
    },
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: 'About Us | Hairbar Unisex Salon',
    data: {
      title: 'About',
      description:
        'Discover the story behind Hairbar Unisex Salon. Our team of expert stylists brings decades of experience in premium hair care.',
    },
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services.component').then((m) => m.ServicesComponent),
    title: 'Our Services | Hairbar Unisex Salon',
    data: {
      title: 'Services',
      description:
        'Explore our premium salon services including haircuts, coloring, styling, treatments, and bridal packages.',
    },
  },
  // Service Detail Routes
  {
    path: 'services/mens-grooming',
    loadComponent: () =>
      import('./pages/service-detail/service-detail.component').then((m) => m.ServiceDetailComponent),
    title: "Men's Grooming | Hairbar Unisex Salon",
    data: {
      title: "Men's Grooming",
      description: 'Premium men\'s grooming services including precision haircuts, beard styling, and facial treatments at Hairbar Unisex Salon.',
      serviceSlug: 'mens-grooming',
    },
  },
  {
    path: 'services/hair-color',
    loadComponent: () =>
      import('./pages/service-detail/service-detail.component').then((m) => m.ServiceDetailComponent),
    title: 'Hair Color & Highlights | Hairbar Unisex Salon',
    data: {
      title: 'Hair Color',
      description: 'Transformative hair color services using premium products for stunning, long-lasting results.',
      serviceSlug: 'hair-color',
    },
  },
  {
    path: 'services/hair-spa',
    loadComponent: () =>
      import('./pages/service-detail/service-detail.component').then((m) => m.ServiceDetailComponent),
    title: 'Hair Spa & Treatments | Hairbar Unisex Salon',
    data: {
      title: 'Hair Spa',
      description: 'Restorative hair spa treatments that revitalize and strengthen your hair from root to tip.',
      serviceSlug: 'hair-spa',
    },
  },
  {
    path: 'services/facial-treatment',
    loadComponent: () =>
      import('./pages/service-detail/service-detail.component').then((m) => m.ServiceDetailComponent),
    title: 'Facial Treatments | Hairbar Unisex Salon',
    data: {
      title: 'Facial Treatments',
      description: 'Rejuvenating facial treatments for glowing, radiant skin at Hairbar Unisex Salon.',
      serviceSlug: 'facial-treatment',
    },
  },
  {
    path: 'services/bridal-makeup',
    loadComponent: () =>
      import('./pages/service-detail/service-detail.component').then((m) => m.ServiceDetailComponent),
    title: 'Bridal Makeup | Hairbar Unisex Salon',
    data: {
      title: 'Bridal Makeup',
      description: 'Comprehensive bridal makeup packages for your special day, including trial sessions.',
      serviceSlug: 'bridal-makeup',
    },
  },
  {
    path: 'gallery',
    loadComponent: () =>
      import('./pages/gallery/gallery.component').then((m) => m.GalleryComponent),
    title: 'Gallery | Hairbar Unisex Salon',
    data: {
      title: 'Gallery',
      description:
        'Browse through our collection of stunning hair transformations and salon masterpieces.',
    },
  },
  {
    path: 'pricing',
    loadComponent: () =>
      import('./pages/pricing/pricing.component').then((m) => m.PricingComponent),
    title: 'Pricing | Hairbar Unisex Salon',
    data: {
      title: 'Pricing',
      description:
        'View our transparent pricing for all salon services. Premium quality at competitive prices.',
    },
  },
  {
    path: 'testimonials',
    loadComponent: () =>
      import('./pages/testimonials/testimonials.component').then((m) => m.TestimonialsComponent),
    title: 'Testimonials | Hairbar Unisex Salon',
    data: {
      title: 'Testimonials',
      description:
        'Hear from our satisfied clients about their transformative experiences at Hairbar Unisex Salon.',
    },
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./pages/blog/blog.component').then((m) => m.BlogComponent),
    title: 'Blog | Hairbar Unisex Salon',
    data: {
      title: 'Blog',
      description:
        'Read our latest articles on hair care tips, styling trends, and salon news.',
    },
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact Us | Hairbar Unisex Salon',
    data: {
      title: 'Contact',
      description:
        'Get in touch with Hairbar Unisex Salon. Find our location, hours, and contact information.',
    },
  },
  {
    path: 'appointment',
    loadComponent: () =>
      import('./pages/appointment/appointment.component').then((m) => m.AppointmentComponent),
    title: 'Book Appointment | Hairbar Unisex Salon',
    data: {
      title: 'Appointment',
      description:
        'Book your appointment at Hairbar Unisex Salon. Choose your service, stylist, and preferred time.',
    },
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
