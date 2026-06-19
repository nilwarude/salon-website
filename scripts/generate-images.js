const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '..', 'src', 'assets', 'images');

// Helper to create SVG file
function createSvg(filePath, content) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content);
  console.log(`Created: ${filePath}`);
}

// Salon-themed color palette
const gold = '#C8A96A';
const dark = '#1A1A1A';
const white = '#FFFFFF';
const cream = '#F5F0E8';

// ============================================================
// HERO BACKGROUND
// ============================================================
createSvg(path.join(assetsDir, 'hero-bg.svg'), `<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080">
  <defs>
    <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#2D2D2D"/>
      <stop offset="100%" style="stop-color:#1A1A1A"/>
    </linearGradient>
  </defs>
  <rect width="1920" height="1080" fill="url(#heroGrad)"/>
  <!-- Decorative circles -->
  <circle cx="300" cy="200" r="400" fill="${gold}" opacity="0.03"/>
  <circle cx="1600" cy="800" r="350" fill="${gold}" opacity="0.03"/>
  <circle cx="1000" cy="500" r="200" fill="${gold}" opacity="0.02"/>
  <!-- Salon chair silhouette -->
  <g transform="translate(1150, 250)" opacity="0.08">
    <rect x="0" y="0" width="80" height="200" rx="10" fill="${gold}"/>
    <rect x="-20" y="-30" width="120" height="60" rx="30" fill="${gold}"/>
    <rect x="80" y="50" width="60" height="15" rx="5" fill="${gold}"/>
    <rect x="80" y="100" width="60" height="15" rx="5" fill="${gold}"/>
    <rect x="-60" y="50" width="60" height="15" rx="5" fill="${gold}"/>
    <rect x="-60" y="100" width="60" height="15" rx="5" fill="${gold}"/>
    <circle cx="60" cy="-60" r="40" fill="${gold}"/>
  </g>
  <!-- Hair icon decorative -->
  <g transform="translate(200, 700)" opacity="0.06">
    <path d="M0,0 C50,-100 150,-120 200,-50 C250,20 200,100 150,120 C100,140 50,100 30,60" fill="none" stroke="${gold}" stroke-width="3"/>
    <path d="M30,0 C80,-80 170,-100 220,-30 C270,40 220,120 170,140" fill="none" stroke="${gold}" stroke-width="2"/>
  </g>
  <!-- Text overlay area -->
  <rect x="100" y="350" width="700" height="40" rx="20" fill="${gold}" opacity="0.15"/>
  <rect x="100" y="410" width="500" height="20" rx="10" fill="${gold}" opacity="0.1"/>
</svg>`);

// ============================================================
// LOGO
// ============================================================
createSvg(path.join(assetsDir, 'logo.svg'), `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="60" viewBox="0 0 200 60">
  <text x="10" y="38" font-family="Georgia, serif" font-size="28" font-weight="bold" fill="${gold}">HAIRBAR</text>
  <text x="12" y="55" font-family="Arial, sans-serif" font-size="9" fill="${dark}" letter-spacing="3">UNISEX SALON</text>
  <line x1="120" y1="15" x2="120" y2="50" stroke="${gold}" stroke-width="0.5"/>
  <circle cx="155" cy="28" r="8" fill="none" stroke="${gold}" stroke-width="1.5"/>
  <path d="M155,22 C158,25 158,31 155,34" fill="none" stroke="${gold}" stroke-width="1"/>
  <path d="M155,22 C152,25 152,31 155,34" fill="none" stroke="${gold}" stroke-width="0.8"/>
</svg>`);

// ============================================================
// ABOUT IMAGES
// ============================================================
createSvg(path.join(assetsDir, 'about-preview.svg'), `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="750" viewBox="0 0 600 750">
  <rect width="600" height="750" fill="${cream}"/>
  <rect x="50" y="50" width="500" height="650" rx="10" fill="${dark}" opacity="0.9"/>
  <!-- Decorative gold lines -->
  <line x1="100" y1="250" x2="500" y2="250" stroke="${gold}" stroke-width="1" opacity="0.3"/>
  <line x1="100" y1="450" x2="500" y2="450" stroke="${gold}" stroke-width="1" opacity="0.3"/>
  <!-- Mirror outline -->
  <ellipse cx="300" cy="350" rx="120" ry="150" fill="none" stroke="${gold}" stroke-width="2" opacity="0.4"/>
  <rect x="270" y="500" width="60" height="80" fill="${gold}" opacity="0.2"/>
  <!-- Text -->
  <text x="300" y="650" text-anchor="middle" font-family="Georgia, serif" font-size="16" fill="${gold}">Hairbar Unisex Salon</text>
</svg>`);

createSvg(path.join(assetsDir, 'about-story.svg'), `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="750" viewBox="0 0 600 750">
  <rect width="600" height="750" fill="${dark}"/>
  <rect x="30" y="30" width="540" height="690" rx="5" fill="none" stroke="${gold}" stroke-width="1" opacity="0.3"/>
  <!-- Scissors icon -->
  <g transform="translate(200, 200)" opacity="0.15">
    <circle cx="50" cy="150" r="50" fill="none" stroke="${gold}" stroke-width="2"/>
    <path d="M50,150 L100,50" stroke="${gold}" stroke-width="3"/>
    <circle cx="150" cy="50" r="20" fill="none" stroke="${gold}" stroke-width="2"/>
    <path d="M50,150 L100,220" stroke="${gold}" stroke-width="3"/>
    <circle cx="150" cy="220" r="20" fill="none" stroke="${gold}" stroke-width="2"/>
  </g>
  <!-- Comb -->
  <g transform="translate(350, 400)" opacity="0.12">
    <rect x="0" y="0" width="120" height="200" rx="10" fill="none" stroke="${gold}" stroke-width="2"/>
    <line x1="0" y1="40" x2="120" y2="40" stroke="${gold}" stroke-width="1"/>
    <line x1="0" y1="80" x2="120" y2="80" stroke="${gold}" stroke-width="1"/>
    <line x1="0" y1="120" x2="120" y2="120" stroke="${gold}" stroke-width="1"/>
    <line x1="0" y1="160" x2="120" y2="160" stroke="${gold}" stroke-width="1"/>
  </g>
  <text x="300" y="650" text-anchor="middle" font-family="Georgia, serif" font-size="18" fill="${gold}">Our Story</text>
</svg>`);

// ============================================================
// OG IMAGE
// ============================================================
createSvg(path.join(assetsDir, 'og-image.svg'), `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${dark}"/>
  <rect x="0" y="0" width="1200" height="4" fill="${gold}"/>
  <circle cx="150" cy="150" r="200" fill="${gold}" opacity="0.04"/>
  <circle cx="1050" cy="480" r="250" fill="${gold}" opacity="0.04"/>
  <text x="600" y="260" text-anchor="middle" font-family="Georgia, serif" font-size="72" font-weight="bold" fill="${gold}">HAIRBAR</text>
  <text x="600" y="320" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" fill="white" letter-spacing="8">UNISEX SALON</text>
  <line x1="450" y1="350" x2="750" y2="350" stroke="${gold}" stroke-width="1"/>
  <text x="600" y="390" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="rgba(255,255,255,0.6)" letter-spacing="4">HAIR · SKIN · NAILS · MAKEUP</text>
  <text x="600" y="480" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="rgba(255,255,255,0.4)" letter-spacing="2">Waghodiya Road, Vadodara</text>
</svg>`);

// ============================================================
// GALLERY IMAGES (1-16)
// ============================================================
const galleryTitles = [
  'Balayage Masterpiece', 'Precision Cut', 'Bridal Elegance', 'Blowout Perfection',
  'Color Melt', 'Editorial Styling', 'Treatment Transformation', "Men's Grooming",
  'Vintage Waves', 'Modern Bob', 'Platinum Blonde', 'Textured Layers',
  'Curly Cut', 'Root Touch-up', 'Formal Updo', 'Beard Sculpting'
];

galleryTitles.forEach((title, i) => {
  const num = i + 1;
  createSvg(path.join(assetsDir, 'gallery', `gallery-${num}.svg`), `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="700" viewBox="0 0 600 700">
    <defs>
      <linearGradient id="g${num}Grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#${['2D2D2D','3A3A3A','252525','303030','282828','353535','202020','383838','2A2A2A','3C3C3C','222222','333333','2E2E2E','404040','262626','363636'][i]}"/>
        <stop offset="100%" style="stop-color:#1A1A1A"/>
      </linearGradient>
    </defs>
    <rect width="600" height="700" fill="url(#g${num}Grad)"/>
    <rect x="20" y="20" width="560" height="660" rx="8" fill="none" stroke="${gold}" stroke-width="0.5" opacity="0.2"/>
    <text x="300" y="340" text-anchor="middle" font-family="Georgia, serif" font-size="22" fill="${gold}" opacity="0.8">${title}</text>
    <line x1="220" y1="370" x2="380" y2="370" stroke="${gold}" stroke-width="1" opacity="0.3"/>
    <text x="300" y="400" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="rgba(255,255,255,0.4)" letter-spacing="3">${['Color','Cutting','Bridal','Styling','Color','Editorial','Treatment','Grooming','Styling','Cutting','Color','Cutting','Cutting','Color','Styling','Grooming'][i]}</text>
    <!-- Decorative hair stroke -->
    <path d="M${100 + i * 20},${120 + i * 10} C${200 + i * 5},${80 + i * 5} ${300 + i * 3},${150 + i * 8} ${400 - i * 5},${100 + i * 6}" fill="none" stroke="${gold}" stroke-width="1" opacity="0.15"/>
  </svg>`);
});

// ============================================================
// TEAM IMAGES (1-8)
// ============================================================
const teamMembers = [
  { name: 'Isabella Rossi', role: 'Master Stylist & Creative Director' },
  { name: 'James Mitchell', role: 'Senior Colorist' },
  { name: 'Sophie Laurent', role: 'Bridal & Editorial Stylist' },
  { name: 'David Park', role: 'Master Barber' },
  { name: 'Maria Garcia', role: 'Senior Stylist' },
  { name: 'Alex Thompson', role: 'Color Specialist' },
  { name: 'Olivia Chen', role: 'Esthetician' },
  { name: 'Ryan Brooks', role: 'Nail Artist' },
];

teamMembers.forEach((member, i) => {
  const num = i + 1;
  createSvg(path.join(assetsDir, 'team', `team-${num}.svg`), `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500" viewBox="0 0 400 500">
    <rect width="400" height="500" fill="${cream}"/>
    <!-- Head silhouette -->
    <circle cx="200" cy="180" r="80" fill="${dark}" opacity="0.15"/>
    <!-- Body silhouette -->
    <path d="M120,280 C120,380 280,380 280,280" fill="${dark}" opacity="0.12"/>
    <!-- Gold border accent -->
    <rect x="10" y="10" width="380" height="480" rx="5" fill="none" stroke="${gold}" stroke-width="1" opacity="0.3"/>
    <text x="200" y="420" text-anchor="middle" font-family="Georgia, serif" font-size="16" fill="${dark}">${member.name}</text>
    <text x="200" y="445" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="rgba(26,26,26,0.6)" letter-spacing="2">${member.role.toUpperCase()}</text>
    <line x1="160" y1="460" x2="240" y2="460" stroke="${gold}" stroke-width="1" opacity="0.5"/>
  </svg>`);
});

// ============================================================
// TESTIMONIAL CLIENT IMAGES (1-6)
// ============================================================
const clientNames = ['Priya Sharma', 'Rahul Patel', 'Anita Desai', 'Jessica Williams', 'Daniel Martinez', 'Amanda Taylor'];

clientNames.forEach((name, i) => {
  const num = i + 1;
  createSvg(path.join(assetsDir, 'testimonials', `client-${num}.svg`), `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="50" fill="${['#2D2D2D','#3A3A3A','#252525','#303030','#282828','#353535'][i]}"/>
    <circle cx="50" cy="38" r="18" fill="${gold}" opacity="0.3"/>
    <path d="M30,65 C30,85 70,85 70,65" fill="${gold}" opacity="0.2"/>
    <circle cx="50" cy="50" r="46" fill="none" stroke="${gold}" stroke-width="1" opacity="0.3"/>
  </svg>`);
});

// ============================================================
// BLOG IMAGES (1-6)
// ============================================================
const blogTitles = [
  '2025 Hair Color Trends',
  'Ultimate Hair Care Guide',
  'Bridal Hair Planning Guide',
  'Winter Hair Protection Tips',
  'The Art of Balayage',
  'Top 10 Holiday Hairstyles'
];

blogTitles.forEach((title, i) => {
  const num = i + 1;
  createSvg(path.join(assetsDir, 'blog', `blog-${num}.svg`), `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
    <defs>
      <linearGradient id="b${num}Grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#${['2D2D2D','3A3A3A','252525','303030','282828','353535'][i]}"/>
        <stop offset="100%" style="stop-color:#1A1A1A"/>
      </linearGradient>
    </defs>
    <rect width="800" height="500" fill="url(#b${num}Grad)"/>
    <!-- Decorative -->
    <path d="M${100 + i * 30},${80 + i * 10} Q${300 + i * 20},${30 + i * 5} ${500 + i * 10},${100 + i * 8} Q${650 + i * 5},${150 + i * 10} ${700 - i * 10},${80}" fill="none" stroke="${gold}" stroke-width="1" opacity="0.15"/>
    <text x="400" y="260" text-anchor="middle" font-family="Georgia, serif" font-size="24" fill="${gold}" opacity="0.8">${title}</text>
    <rect x="330" y="280" width="140" height="1" fill="${gold}" opacity="0.3"/>
    <text x="400" y="310" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="rgba(255,255,255,0.4)" letter-spacing="2">HAIRBAR SALON · BLOG</text>
  </svg>`);
});

// ============================================================
// INSTAGRAM FEED IMAGES (1-6)
// ============================================================
const instagramColors = ['#2D2D2D', '#3A3A3A', '#252525', '#303030', '#282828', '#353535'];
instagramColors.forEach((color, i) => {
  const num = i + 1;
  createSvg(path.join(assetsDir, 'instagram', `insta-${num}.svg`), `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
    <rect width="400" height="400" fill="${color}"/>
    <!-- Instagram-like grid -->
    <rect x="20" y="20" width="170" height="170" fill="${gold}" opacity="0.08" rx="5"/>
    <rect x="210" y="20" width="170" height="170" fill="${gold}" opacity="0.05" rx="5"/>
    <rect x="20" y="210" width="170" height="170" fill="${gold}" opacity="0.05" rx="5"/>
    <rect x="210" y="210" width="170" height="170" fill="${gold}" opacity="0.08" rx="5"/>
    <circle cx="200" cy="200" r="30" fill="none" stroke="${gold}" stroke-width="1" opacity="0.2"/>
  </svg>`);
});

// ============================================================
// FAVICON
// ============================================================
createSvg(path.join(assetsDir, 'favicon.svg'), `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <rect width="32" height="32" fill="${dark}" rx="4"/>
  <text x="16" y="22" text-anchor="middle" font-family="Georgia, serif" font-size="14" font-weight="bold" fill="${gold}">H</text>
</svg>`);

console.log('\n✅ All placeholder images generated successfully!');
console.log('📁 Location: src/assets/images/');