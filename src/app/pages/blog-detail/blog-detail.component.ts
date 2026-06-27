import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from '../../services/meta.service';
import { BlogCardComponent, BlogPost } from '../../components/blog-card/blog-card.component';
import { RouterLink } from '@angular/router';

const ALL_BLOG_POSTS: BlogPost[] = [
  { image: '/assets/images/blog/blog-1.svg', title: '2025 Hair Color Trends: What\'s In This Season', excerpt: 'Discover the hottest hair color trends taking over salons this season, from lived-in brunettes to vibrant coppers.', date: 'January 15, 2025', category: 'Trends', slug: '2025-hair-color-trends' },
  { image: '/assets/images/blog/blog-2.svg', title: 'The Ultimate Guide to Hair Care at Home', excerpt: 'Expert tips and product recommendations for maintaining salon-fresh hair between appointments.', date: 'January 10, 2025', category: 'Care Tips', slug: 'ultimate-hair-care-guide' },
  { image: '/assets/images/blog/blog-3.svg', title: 'Bridal Hair: Planning Your Perfect Wedding Look', excerpt: 'Everything you need to know about planning your bridal hair, from consultations to the big day.', date: 'January 5, 2025', category: 'Bridal', slug: 'bridal-hair-planning-guide' },
  { image: '/assets/images/blog/blog-4.svg', title: 'Winter Hair Protection Tips', excerpt: 'Keep your hair healthy and hydrated during the cold winter months with these expert tips.', date: 'December 28, 2024', category: 'Care Tips', slug: 'winter-hair-protection' },
  { image: '/assets/images/blog/blog-5.svg', title: 'The Art of Balayage: Everything You Need to Know', excerpt: 'Learn about the balayage technique, maintenance, and why it\'s the most requested coloring service.', date: 'December 20, 2024', category: 'Color', slug: 'balayage-guide' },
  { image: '/assets/images/blog/blog-6.svg', title: 'Top 10 Hairstyles for the Holiday Season', excerpt: 'From elegant updos to glamorous waves, find your perfect holiday party look.', date: 'December 15, 2024', category: 'Styling', slug: 'holiday-hairstyles' },
];

const BLOG_CONTENT: Record<string, { content: string[]; author: string; authorRole: string; readTime: string; relatedSlugs: string[] }> = {
  '2025-hair-color-trends': {
    content: [
      'The world of hair color is constantly evolving, and 2025 brings an exciting array of trends that cater to every style and personality. At Hairbar Unisex Salon, our expert colorists have been following these trends closely and are ready to help you achieve your perfect look.',
      'This year, we\'re seeing a shift towards more natural, lived-in colors that require less maintenance while still making a statement. From rich brunettes with subtle dimension to vibrant coppers that catch the light, there\'s something for everyone.',
      'One of the biggest trends for 2025 is "brunette dimension" — multi-tonal brown hair that incorporates warm caramel, honey, and chestnut highlights. This technique adds depth and movement without the high maintenance of traditional highlights.',
      'On the more adventurous side, "copper chroma" is taking center stage. This vibrant, fiery shade ranges from soft strawberry blonde to intense, almost metallic copper. It\'s the perfect choice for those who want to make a bold statement.',
      'For those who prefer cooler tones, "ash latte" is a beautiful option. This cool-toned brunette with subtle silver and beige undertones creates a sophisticated, modern look that\'s incredibly flattering on many skin tones.',
      '"Expensive blonde" continues to evolve with even more natural-looking root smudging and face-framing brightness. The key is creating a seamless blend that grows out beautifully, meaning fewer trips to the salon.',
      'At Hairbar, we use premium color products from L\'Oréal and Wella to ensure your color not only looks stunning but also maintains the health and integrity of your hair. Our colorists will work with you to find the perfect shade and technique for your lifestyle.',
      'Ready to transform your look? Book a consultation with our color team today and discover the perfect hair color trend for 2025.',
    ],
    author: 'Hairbar Color Team',
    authorRole: 'Senior Colorists',
    readTime: '5 min read',
    relatedSlugs: ['balayage-guide', 'ultimate-hair-care-guide', 'winter-hair-protection'],
  },
  'ultimate-hair-care-guide': {
    content: [
      'Maintaining salon-fresh hair between appointments doesn\'t have to be complicated. With the right routine and products, you can keep your hair looking its best every day. Our expert stylists at Hairbar Unisex Salon have compiled their top tips for at-home hair care.',
      'First and foremost, know your hair type. Whether you have straight, wavy, curly, or coily hair, using products formulated for your specific hair type makes a significant difference in how your hair looks and feels.',
      'Start with a proper washing routine. Most people wash their hair too frequently, which strips natural oils and can lead to dryness and damage. We recommend washing 2-3 times per week for most hair types, using lukewarm water and focusing shampoo on the scalp rather than the ends.',
      'Conditioning is crucial. Always apply conditioner from mid-length to ends, avoiding the roots. Leave it on for 2-3 minutes before rinsing with cool water to seal the cuticle and add shine. Consider using a deep conditioning treatment once a week for extra nourishment.',
      'Heat protection is non-negotiable. Before using any hot tools, apply a heat protectant spray or serum. This creates a barrier between your hair and the heat, preventing damage and keeping your hair healthy. Always use the lowest effective temperature setting.',
      'Regular trims are essential for maintaining healthy hair. Even if you\'re growing your hair out, getting a trim every 6-8 weeks prevents split ends from traveling up the hair shaft and keeps your style looking fresh.',
      'Don\'t forget about your scalp! A healthy scalp is the foundation for healthy hair growth. Gentle exfoliation once a week and using a scalp treatment can improve circulation and promote stronger, healthier hair.',
      'Finally, protect your hair while sleeping. Silk or satin pillowcases reduce friction and prevent breakage. For longer hair, try a loose braid or pineapple ponytail to prevent tangles and maintain your style overnight.',
    ],
    author: 'Hairbar Styling Team',
    authorRole: 'Expert Stylists',
    readTime: '6 min read',
    relatedSlugs: ['2025-hair-color-trends', 'winter-hair-protection', 'holiday-hairstyles'],
  },
  'bridal-hair-planning-guide': {
    content: [
      'Your wedding day is one of the most photographed days of your life, and your hair plays a crucial role in your overall bridal look. Planning your bridal hair in advance ensures everything comes together perfectly on the big day.',
      'Start early — we recommend beginning your bridal hair journey 3-6 months before your wedding. This allows ample time for consultations, trial sessions, and any necessary hair treatments or color adjustments.',
      'Gather inspiration. Create a Pinterest board or save photos of bridal hairstyles you love. Consider your dress style, veil, headpiece, and overall wedding theme when choosing your look. Your stylist can help you determine what will work best with your hair type and length.',
      'Schedule a consultation with your stylist at least 2-3 months before the wedding. During this meeting, discuss your vision, hair type, and any concerns. Bring photos and be open to professional suggestions based on what will work best for your hair.',
      'A trial session is essential. This is your opportunity to try out your chosen hairstyle and make any adjustments. Wear a white top similar to your dress neckline and bring any hair accessories you plan to use. Take photos from all angles to ensure you love the look.',
      'Consider your hair health. In the months leading up to your wedding, invest in regular deep conditioning treatments and trims to ensure your hair is in optimal condition. Avoid making drastic color changes too close to the wedding day.',
    ],
    author: 'Sophie Laurent',
    authorRole: 'Bridal & Editorial Stylist',
    readTime: '4 min read',
    relatedSlugs: ['2025-hair-color-trends', 'ultimate-hair-care-guide', 'holiday-hairstyles'],
  },
  'winter-hair-protection': {
    content: [
      'Winter can be harsh on your hair. Cold temperatures, dry air, and indoor heating can leave your hair dry, brittle, and prone to breakage. At Hairbar Unisex Salon, we\'ve prepared our top tips for keeping your hair healthy and hydrated throughout the winter months.',
      'The key to winter hair care is moisture, moisture, and more moisture. Switch to a more hydrating shampoo and conditioner formula, and consider incorporating a leave-in conditioner or hair oil into your daily routine.',
      'Reduce heat styling when possible. Winter hair is already more fragile due to dry conditions, so giving your hair a break from hot tools can prevent additional damage. Embrace air-drying or low-heat styling methods.',
      'Don\'t go outside with wet hair. Not only is this uncomfortable, but wet hair can freeze and become brittle, leading to breakage. Make sure your hair is completely dry before heading out into cold weather.',
      'Protect your hair from the elements. Wear a hat or scarf when outside, but choose silk or satin-lined options to prevent friction and static. Avoid wool hats directly on your hair as they can cause breakage and frizz.',
      'Increase your omega-3 intake. Foods rich in omega-3 fatty acids, like salmon, walnuts, and flaxseeds, help support scalp health and hair hydration from the inside out. Staying hydrated by drinking plenty of water is equally important.',
      'Use a humidifier in your home. Indoor heating can significantly reduce humidity levels, which dries out your hair. A humidifier adds moisture back into the air, benefiting both your hair and skin.',
    ],
    author: 'Hairbar Care Team',
    authorRole: 'Hair Specialists',
    readTime: '5 min read',
    relatedSlugs: ['ultimate-hair-care-guide', '2025-hair-color-trends', 'holiday-hairstyles'],
  },
  'balayage-guide': {
    content: [
      'Balayage has become one of the most requested coloring techniques in salons worldwide, and for good reason. This freehand painting technique creates natural, sun-kissed highlights that grow out beautifully with minimal maintenance.',
      'The word "balayage" comes from the French word meaning "to sweep" or "to paint." Unlike traditional foil highlighting, balayage involves painting color directly onto the hair in a sweeping motion, creating soft, natural-looking results.',
      'One of the biggest advantages of balayage is its low maintenance nature. Because the color is applied in a way that creates a gradual transition from darker roots to lighter ends, regrowth is much less noticeable than with traditional highlights.',
      'Balayage works on all hair colors and types. Whether you have dark brown, blonde, red, or even gray hair, your colorist can customize the technique to enhance your natural color and complement your skin tone.',
      'The process typically takes 1.5 to 3 hours depending on your hair length, thickness, and desired result. Your colorist will begin by sectioning your hair and painting the color in a sweeping motion, focusing more color on the mid-lengths and ends.',
      'Aftercare is essential for maintaining your balayage. Use color-safe, sulfate-free shampoos and conditioners to preserve your color. Purple shampoo can help keep blonde and highlighted hair from turning brassy between appointments.',
      'Book a gloss treatment every 4-6 weeks to refresh your color and add shine. This quick service can extend the life of your balayage and keep it looking salon-fresh.',
    ],
    author: 'James Mitchell',
    authorRole: 'Senior Colorist',
    readTime: '6 min read',
    relatedSlugs: ['2025-hair-color-trends', 'ultimate-hair-care-guide', 'winter-hair-protection'],
  },
  'holiday-hairstyles': {
    content: [
      'The holiday season is the perfect time to experiment with glamorous hairstyles. Whether you\'re attending a office party, family gathering, or New Year\'s Eve celebration, these top 10 hairstyles will ensure you look your best.',
      '1. The Sleek Low Ponytail: This chic, polished look works for any formal occasion. Smooth your hair back with a styling gel and secure at the nape of your neck. Wrap a small section of hair around the elastic to conceal it for a sophisticated finish.',
      '2. Voluminous Hollywood Waves: Classic and timeless, soft Hollywood waves add instant glamour to any look. Use a large barrel curling iron and brush out the curls for soft, flowing waves. A shine spray will give you that red carpet finish.',
      '3. The Elegant Chignon: A low, twisted bun is perfect for formal events. Create a deep side part, gather your hair at the nape, twist into a bun, and secure with pins. Pull out a few face-framing pieces for a soft, romantic feel.',
      '4. Textured High Ponytail: Add volume and texture to a high ponytail by backcombing the crown before securing. Wrap a section of hair around the base and let the ponytail cascade down. This look is both fun and sophisticated.',
      '5. Half-Up Crown Braid: This bohemian-inspired style is perfect for holiday parties. Create a Dutch or French braid from each temple, meeting at the back, and secure with pins. Leave the rest of your hair down in loose waves.',
      '6. The Modern Bubble Ponytail: A fun twist on the classic ponytail. Section your ponytail and add small elastic bands every 2-3 inches, gently pulling each section to create "bubbles." This modern look is surprisingly easy to achieve.',
      'Book your holiday appointment at Hairbar early, as our schedule fills up quickly during the festive season. Our stylists will help you find the perfect look for every celebration.',
    ],
    author: 'Hairbar Styling Team',
    authorRole: 'Expert Stylists',
    readTime: '7 min read',
    relatedSlugs: ['2025-hair-color-trends', 'bridal-hair-planning-guide', 'ultimate-hair-care-guide'],
  },
};

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [RouterLink, BlogCardComponent],
  template: `
    @if (post) {
      <article>
        <!-- Hero Section -->
        <section class="relative pt-32 pb-20 bg-dark overflow-hidden">
          <div class="absolute inset-0 opacity-20" style="background: linear-gradient(135deg, #C8A96A 0%, transparent 50%, #C8A96A 100%);"></div>
          <div class="container-custom relative z-10">
            <div class="max-w-4xl mx-auto">
              <a routerLink="/blog" class="inline-flex items-center gap-2 text-primary text-sm font-sans uppercase tracking-[0.15em] mb-6 hover:text-primary-600 transition-colors" aria-label="Back to blog">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                </svg>
                Back to Blog
              </a>
              <p class="font-sans text-sm text-primary uppercase tracking-[0.25em] mb-4" data-aos="fade-up">{{ post.category }}</p>
              <h1 class="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight" data-aos="fade-up" data-aos-delay="100">{{ post.title }}</h1>
              <div class="w-16 h-0.5 bg-primary mt-6 mb-6" data-aos="fade-up" data-aos-delay="200"></div>
              <div class="flex flex-wrap items-center gap-4 text-white/60 text-sm" data-aos="fade-up" data-aos-delay="300">
                <span class="flex items-center gap-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  {{ post.date }}
                </span>
                <span class="flex items-center gap-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  {{ contentData?.readTime }}
                </span>
                <span class="flex items-center gap-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                  {{ contentData?.author }}
                </span>
              </div>
            </div>
          </div>
        </section>

        <!-- Featured Image -->
        <section class="bg-white">
          <div class="container-custom">
            <div class="max-w-4xl mx-auto -mt-16 relative z-10" data-aos="fade-up">
              <div class="aspect-[16/9] overflow-hidden shadow-premium-lg">
                <img
                  [src]="post.image"
                  [alt]="'Featured image for ' + post.title"
                  class="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        <!-- Content -->
        <section class="section-padding bg-white">
          <div class="container-custom">
            <div class="max-w-3xl mx-auto">
              @for (paragraph of contentData?.content; track paragraph; let i = $index) {
                <p class="text-dark/70 text-lg leading-relaxed mb-6" [class.font-medium]="i === 0" [class.text-dark]="i === 0" data-aos="fade-up">
                  {{ paragraph }}
                </p>
              }

              <!-- Author Box -->
              <div class="mt-12 p-8 bg-section border-l-4 border-primary" data-aos="fade-up">
                <div class="flex items-center gap-4">
                  <div class="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <span class="text-primary font-serif text-2xl font-bold">{{ contentData?.author?.charAt(0) }}</span>
                  </div>
                  <div>
                    <p class="font-serif text-lg text-dark">{{ contentData?.author }}</p>
                    <p class="text-dark/50 text-sm">{{ contentData?.authorRole }}</p>
                  </div>
                </div>
              </div>

              <!-- Share -->
              <div class="mt-8 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4" data-aos="fade-up">
                <p class="font-sans text-sm text-dark/60 uppercase tracking-[0.15em]">Share this article</p>
                <div class="flex gap-3">
                  <a [href]="'https://www.facebook.com/sharer/sharer.php?u=' + encodedUrl" target="_blank" rel="noopener noreferrer" class="w-10 h-10 border border-dark/20 flex items-center justify-center text-dark/50 hover:text-primary hover:border-primary transition-all duration-300" aria-label="Share on Facebook">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                  </a>
                  <a [href]="'https://twitter.com/intent/tweet?text=' + encodedTitle + '&url=' + encodedUrl" target="_blank" rel="noopener noreferrer" class="w-10 h-10 border border-dark/20 flex items-center justify-center text-dark/50 hover:text-primary hover:border-primary transition-all duration-300" aria-label="Share on Twitter">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  </a>
                  <a [href]="'https://wa.me/?text=' + encodedTitle + '%20' + encodedUrl" target="_blank" rel="noopener noreferrer" class="w-10 h-10 border border-dark/20 flex items-center justify-center text-dark/50 hover:text-primary hover:border-primary transition-all duration-300" aria-label="Share on WhatsApp">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Related Posts -->
        @if (relatedPosts.length > 0) {
          <section class="section-padding bg-section">
            <div class="container-custom">
              <div class="text-center max-w-3xl mx-auto mb-16">
                <p class="section-subtitle" data-aos="fade-up">Related Articles</p>
                <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">You May Also Like</h2>
                <div class="gold-divider mt-6" data-aos="fade-up" data-aos-delay="200"></div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                @for (related of relatedPosts; track related.slug) {
                  <app-blog-card [post]="related" />
                }
              </div>
            </div>
          </section>
        }
      </article>
    } @else {
      <!-- 404 fallback -->
      <section class="relative pt-32 pb-20 bg-dark min-h-screen flex items-center">
        <div class="container-custom text-center">
          <h1 class="font-serif text-6xl text-primary font-bold mb-4">404</h1>
          <p class="text-white/70 text-xl mb-8">Blog post not found.</p>
          <a routerLink="/blog" class="btn-primary">Back to Blog</a>
        </div>
      </section>
    }
  `,
  styles: [`
    .btn-primary {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem 1.5rem;
      background: #C8A96A;
      color: white;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      transition: all 0.3s ease;
    }
    .btn-primary:hover {
      background: #A8833E;
      box-shadow: 0 4px 20px rgba(200, 169, 106, 0.3);
    }
    .section-padding {
      padding: 5rem 0;
    }
    .section-subtitle {
      font-family: 'Poppins', sans-serif;
      font-size: 0.875rem;
      color: rgba(17, 17, 17, 0.7);
      text-transform: uppercase;
      letter-spacing: 0.2em;
      margin-bottom: 0.5rem;
    }
    .section-title {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 2.5rem;
      color: #111111;
      margin-bottom: 1rem;
    }
    .gold-divider {
      width: 4rem;
      height: 2px;
      background: #C8A96A;
      margin: 1.5rem auto;
    }
    .container-custom {
      max-width: 80rem;
      margin: 0 auto;
      padding: 0 1rem;
    }
    @media (min-width: 640px) {
      .container-custom { padding: 0 1.5rem; }
    }
    @media (min-width: 1024px) {
      .container-custom { padding: 0 2rem; }
    }
  `]
})
export class BlogDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private metaService = inject(MetaService);

  post: BlogPost | null = null;
  contentData: { content: string[]; author: string; authorRole: string; readTime: string; relatedSlugs: string[] } | null = null;
  relatedPosts: BlogPost[] = [];
  encodedUrl = '';
  encodedTitle = '';

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug') || '';
    this.post = ALL_BLOG_POSTS.find(p => p.slug === slug) || null;
    this.contentData = BLOG_CONTENT[slug] || null;

    if (this.post && this.contentData) {
      // SEO
      this.metaService.updateSeoData({
        title: `${this.post.title} | Hairbar Unisex Salon Blog`,
        description: this.post.excerpt,
        ogTitle: this.post.title,
        ogDescription: this.post.excerpt,
        ogImage: this.post.image,
      });

      // Breadcrumb structured data
      this.metaService.addStructuredData({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hairbar.in/' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://hairbar.in/blog' },
          { '@type': 'ListItem', position: 3, name: this.post.title, item: `https://hairbar.in/blog/${slug}` },
        ],
      });

      // BlogPosting structured data
      this.metaService.addStructuredData({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: this.post.title,
        description: this.post.excerpt,
        image: this.post.image,
        datePublished: this.post.date,
        author: {
          '@type': 'Person',
          name: this.contentData.author,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Hairbar Unisex Salon',
        },
      });

      // Related posts
      this.relatedPosts = this.contentData.relatedSlugs
        .map(s => ALL_BLOG_POSTS.find(p => p.slug === s))
        .filter((p): p is BlogPost => p !== undefined && p.slug !== slug);

      this.encodedUrl = encodeURIComponent(`https://hairbar.in/blog/${slug}`);
      this.encodedTitle = encodeURIComponent(this.post.title);
    }
  }
}