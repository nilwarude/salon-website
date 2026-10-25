/**
 * Sitemap Generation Script
 *
 * Generates a sitemap.xml for all prerendered routes.
 * Run: node scripts/generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://hairbarsalon.in';
const OUTPUT_DIR = path.resolve(__dirname, '..', 'public');

// All routes that are prerendered (matches angular.json prerender routes + service details)
const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  
  // Local SEO Service Pages
  { path: '/haircut-and-styling-vadodara', priority: '0.9', changefreq: 'monthly' },
  { path: '/hair-colour-vadodara', priority: '0.9', changefreq: 'monthly' },
  { path: '/hair-spa-vadodara', priority: '0.9', changefreq: 'monthly' },
  { path: '/bridal-makeup-vadodara', priority: '0.9', changefreq: 'monthly' },
  
  // Main Pages
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/services', priority: '0.9', changefreq: 'weekly' },
  
  // Service Detail Pages
  { path: '/services/mens-grooming', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/hair-color', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/hair-spa', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/facial-treatment', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/bridal-makeup', priority: '0.8', changefreq: 'monthly' },
  
  // Gallery Pages
  { path: '/gallery', priority: '0.7', changefreq: 'monthly' },
  { path: '/gallery/groom', priority: '0.6', changefreq: 'monthly' },
  { path: '/gallery/bridal', priority: '0.6', changefreq: 'monthly' },
  
  // Pricing & Appointment
  { path: '/pricing', priority: '0.8', changefreq: 'weekly' },
  { path: '/appointment', priority: '0.9', changefreq: 'monthly' },
  
  // Testimonials & Team
  { path: '/testimonials', priority: '0.6', changefreq: 'monthly' },
  { path: '/team', priority: '0.6', changefreq: 'monthly' },
  
  // Blog
  { path: '/blog', priority: '0.8', changefreq: 'weekly' },
  
  // Contact
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  
  // Special Offers
  { path: '/wedding-season', priority: '0.7', changefreq: 'monthly' },
  { path: '/festival-offers', priority: '0.7', changefreq: 'monthly' },
  
  // 404 Page
  { path: '/404', priority: '0.1', changefreq: 'yearly' },
  
  // Legal Pages
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms', priority: '0.3', changefreq: 'yearly' },
  { path: '/cookie-policy', priority: '0.3', changefreq: 'yearly' },
];

// Get today's date in W3C format
const today = new Date().toISOString().split('T')[0];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

for (const route of routes) {
  sitemap += `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`;
}

sitemap += `</urlset>
`;

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const outputPath = path.join(OUTPUT_DIR, 'sitemap.xml');
fs.writeFileSync(outputPath, sitemap);
console.log(`✅ Sitemap generated at: ${outputPath}`);
console.log(`   Routes included: ${routes.length}`);