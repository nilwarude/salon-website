/**
 * Static Deployment Build Script
 * 
 * This script:
 * 1. Builds the Angular app with prerendering for all routes
 * 2. Copies files to a deploy-ready folder
 * 3. Creates necessary server config files (404 fallback, redirects, etc.)
 * 
 * Run: node scripts/deploy-static.js
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const DEPLOY_DIR = 'deploy';

console.log('🚀 Starting deployment build...\n');

// Step 1: Build with prerendering
console.log('📦 Building Angular app with prerendering...');
try {
  execSync('npx ng build --configuration=production --prerender', {
    stdio: 'inherit',
    cwd: path.resolve(__dirname, '..'),
  });
  console.log('✅ Build complete!\n');
} catch (err) {
  console.error('❌ Build failed:', err.message);
  process.exit(1);
}

// Step 2: Create deployment directory
const distBrowser = path.resolve(__dirname, '..', 'dist', 'salon-website', 'browser');
const deployPath = path.resolve(__dirname, '..', DEPLOY_DIR);

if (fs.existsSync(deployPath)) {
  fs.rmSync(deployPath, { recursive: true });
}
fs.cpSync(distBrowser, deployPath, { recursive: true });
console.log(`✅ Copied static files to ${DEPLOY_DIR}/\n`);

// Step 3: Create .htaccess for Apache/cPanel
const htaccess = `<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # If the requested file or directory exists, serve it directly
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  
  # Otherwise, serve index.html (Angular SPA routing)
  RewriteRule ^(.*)$ index.html [L]
</IfModule>

# Enable Gzip compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Security headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "DENY"
  Header set X-XSS-Protection "1; mode=block"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
`;

fs.writeFileSync(path.join(deployPath, '.htaccess'), htaccess);
console.log('✅ Created .htaccess for Apache/cPanel\n');

// Step 4: Create _redirects for Netlify/Vercel
const redirects = `/*    /index.html    200
`;
fs.writeFileSync(path.join(deployPath, '_redirects'), redirects);
console.log('✅ Created _redirects for Netlify/Vercel\n');

// Step 5: Add 404.html (some hosts require this)
const notFoundHtml = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Page Not Found - Hairbar Unisex Salon</title>
  <meta http-equiv="refresh" content="0;url=/">
  <link rel="canonical" href="https://hairbar.in/">
</head>
<body>
  <script>window.location.href = "/";</script>
</body>
</html>`;
fs.writeFileSync(path.join(deployPath, '404.html'), notFoundHtml);
console.log('✅ Created 404.html fallback\n');

console.log('===========================================');
console.log('🎉 DEPLOYMENT READY!');
console.log('===========================================');
console.log('📂 Upload the ENTIRE "deploy" folder to your hosting.');
console.log('');
console.log('For cPanel:');
console.log('  1. Upload the "deploy" folder contents to public_html');
console.log('  2. The .htaccess file handles Angular routing automatically');
console.log('');
console.log('For Netlify:');
console.log('  1. Drag & drop the "deploy" folder to Netlify');
console.log('  2. Or run: npx netlify deploy --prod --dir=deploy');
console.log('');
console.log('For Vercel:');
console.log('  1. Install Vercel CLI: npm i -g vercel');
console.log('  2. Run: vercel --prod ./deploy');
console.log('');
console.log('✅ For Node.js SSR hosting, use: node dist/salon-website/server/server.mjs');
console.log('===========================================');
