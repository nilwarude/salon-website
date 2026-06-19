import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Luxury Salon | Premium Hair & Beauty Studio',
    data: {
      title: 'Home',
      description:
        'Experience premium hair styling and beauty treatments at our luxury salon. Book your appointment today.',
    },
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: 'About Us | Luxury Salon',
    data: {
      title: 'About',
      description:
        'Discover the story behind Luxury Salon. Our team of expert stylists brings decades of experience in premium hair care.',
    },
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services.component').then((m) => m.ServicesComponent),
    title: 'Our Services | Luxury Salon',
    data: {
      title: 'Services',
      description:
        'Explore our premium salon services including haircuts, coloring, styling, treatments, and bridal packages.',
    },
  },
  {
    path: 'gallery',
    loadComponent: () =>
      import('./pages/gallery/gallery.component').then((m) => m.GalleryComponent),
    title: 'Gallery | Luxury Salon',
    data: {
      title: 'Gallery',
      description:
        'Browse through our collection of stunning hair transformations and salon作品.',
    },
  },
  {
    path: 'pricing',
    loadComponent: () =>
      import('./pages/pricing/pricing.component').then((m) => m.PricingComponent),
    title: 'Pricing | Luxury Salon',
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
    title: 'Testimonials | Luxury Salon',
    data: {
      title: 'Testimonials',
      description:
        'Hear from our satisfied clients about their transformative experiences at Luxury Salon.',
    },
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./pages/blog/blog.component').then((m) => m.BlogComponent),
    title: 'Blog | Luxury Salon',
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
    title: 'Contact Us | Luxury Salon',
    data: {
      title: 'Contact',
      description:
        'Get in touch with Luxury Salon. Find our location, hours, and contact information.',
    },
  },
  {
    path: 'appointment',
    loadComponent: () =>
      import('./pages/appointment/appointment.component').then((m) => m.AppointmentComponent),
    title: 'Book Appointment | Luxury Salon',
    data: {
      title: 'Appointment',
      description:
        'Book your appointment at Luxury Salon. Choose your service, stylist, and preferred time.',
    },
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];