import { Component, OnInit, inject } from '@angular/core';
import { BlogCardComponent, BlogPost } from '../../components/blog-card/blog-card.component';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [BlogCardComponent],
  template: `
    <section class="relative pt-32 pb-20 bg-dark overflow-hidden">
      <div class="absolute inset-0 opacity-20" style="background: linear-gradient(135deg, #C8A96A 0%, transparent 50%, #C8A96A 100%);"></div>
      <div class="container-custom relative z-10">
        <div class="max-w-3xl">
          <p class="font-sans text-sm text-primary uppercase tracking-[0.25em] mb-4" data-aos="fade-up">Blog</p>
          <h1 class="font-serif text-4xl md:text-5xl lg:text-heading text-white font-bold" data-aos="fade-up" data-aos-delay="100">Our Journal</h1>
          <div class="w-16 h-0.5 bg-primary mt-6 mb-6" data-aos="fade-up" data-aos-delay="200"></div>
          <p class="text-white/70 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="300">Expert tips, trends, and stories from our salon.</p>
        </div>
      </div>
    </section>
    <section class="section-padding">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (post of blogPosts; track post.title) {
            <app-blog-card [post]="post" />
          }
        </div>
      </div>
    </section>
  `,
})
export class BlogComponent implements OnInit {
  private metaService = inject(MetaService);

  blogPosts: BlogPost[] = [
    { image: '/assets/images/blog/blog-1.svg', title: '2025 Hair Color Trends: What\'s In This Season', excerpt: 'Discover the hottest hair color trends taking over salons this season, from lived-in brunettes to vibrant coppers.', date: 'January 15, 2025', category: 'Trends', slug: '2025-hair-color-trends' },
    { image: '/assets/images/blog/blog-2.svg', title: 'The Ultimate Guide to Hair Care at Home', excerpt: 'Expert tips and product recommendations for maintaining salon-fresh hair between appointments.', date: 'January 10, 2025', category: 'Care Tips', slug: 'ultimate-hair-care-guide' },
    { image: '/assets/images/blog/blog-3.svg', title: 'Bridal Hair: Planning Your Perfect Wedding Look', excerpt: 'Everything you need to know about planning your bridal hair, from consultations to the big day.', date: 'January 5, 2025', category: 'Bridal', slug: 'bridal-hair-planning-guide' },
    { image: '/assets/images/blog/blog-4.svg', title: 'Winter Hair Protection Tips', excerpt: 'Keep your hair healthy and hydrated during the cold winter months with these expert tips.', date: 'December 28, 2024', category: 'Care Tips', slug: 'winter-hair-protection' },
    { image: '/assets/images/blog/blog-5.svg', title: 'The Art of Balayage: Everything You Need to Know', excerpt: 'Learn about the balayage technique, maintenance, and why it\'s the most requested coloring service.', date: 'December 20, 2024', category: 'Color', slug: 'balayage-guide' },
    { image: '/assets/images/blog/blog-6.svg', title: 'Top 10 Hairstyles for the Holiday Season', excerpt: 'From elegant updos to glamorous waves, find your perfect holiday party look.', date: 'December 15, 2024', category: 'Styling', slug: 'holiday-hairstyles' },
  ];

  ngOnInit(): void {
    this.metaService.updateSeoData({
      title: 'Blog | Hairbar Unisex Salon',
      description: 'Read our latest articles on hair care tips, styling trends, and salon news from Hairbar Unisex Salon.',
      ogTitle: 'Hairbar Salon Blog | Hair Care Tips & Trends',
      ogDescription: 'Expert tips, trends, and stories from Hairbar Unisex Salon. Discover hair care guides, bridal planning, and styling inspiration.',
    });

    // BreadcrumbList structured data
    this.metaService.addStructuredData({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hairbar.in/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://hairbar.in/blog' },
      ],
    });
  }
}