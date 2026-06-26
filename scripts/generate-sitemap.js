/**
 * Sitemap Generation Script
 *
 * Generates a sitemap.xml for all prerendered routes.
 * Run: node scripts/generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://hairbar.in';
const OUTPUT_DIR = path.resolve(__dirname, '..', 'public');

// All routes that are prerendered (matches angular.json prerender routes + service details)
const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/services', priority: '0.9', changefreq: 'weekly' },
  { path: '/services/mens-grooming', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/hair-color', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/hair-spa', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/facial-treatment', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/bridal-makeup', priority: '0.8', changefreq: 'monthly' },
  { path: '/gallery', priority: '0.7', changefreq: 'monthly' },
  { path: '/pricing', priority: '0.8', changefreq: 'weekly' },
  { path: '/team', priority: '0.6', changefreq: 'monthly' },
  { path: '/testimonials', priority: '0.6', changefreq: 'monthly' },
  { path: '/blog', priority: '0.8', changefreq: 'weekly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/appointment', priority: '0.9', changefreq: 'monthly' },
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