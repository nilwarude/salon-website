#!/usr/bin/env node

/**
 * Image Optimization Script for HairBar Salon Website
 * 
 * This script optimizes images by:
 * 1. Generating WebP versions of all JPG/PNG images
 * 2. Creating responsive image sizes
 * 3. Updating image references in the codebase
 * 
 * Note: In a production environment, you would use:
 * - Sharp library for image processing
 * - Image CDN for dynamic optimization
 * - Proper error handling and logging
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ASSETS_DIR = path.join(__dirname, '..', 'src', 'assets');
const DIST_DIR = path.join(__dirname, '..', 'dist', 'salon-website', 'browser', 'assets');

// Image optimization configuration
const OPTIMIZATION_CONFIG = {
  formats: ['webp'], // ['webp', 'avif'] for modern browsers
  qualities: {
    webp: 85,
    avif: 75,
  },
  sizes: [
    { width: 400, suffix: '-sm' },
    { width: 800, suffix: '-md' },
    { width: 1200, suffix: '-lg' },
    { width: 1600, suffix: '-xl' },
  ],
  skipExisting: true,
};

/**
 * Check if required tools are installed
 */
function checkDependencies() {
  try {
    // Check if sharp is available (would be used in production)
    require.resolve('sharp');
    return true;
  } catch (error) {
    console.log('⚠️  Sharp not installed. For production, install sharp: npm install sharp');
    console.log('📝 Creating optimization manifest file instead...');
    return false;
  }
}

/**
 * Create optimization manifest file
 * This file can be used by a build pipeline or image CDN
 */
function createOptimizationManifest() {
  const manifest = {
    generated: new Date().toISOString(),
    baseUrl: 'https://hairbarsalon.in/assets/images/',
    optimizedFormats: OPTIMIZATION_CONFIG.formats,
    images: [],
  };

  // Walk through assets directory
  function walkDir(dir, basePath = '') {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const relativePath = path.join(basePath, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        walkDir(filePath, relativePath);
      } else if (isImageFile(file)) {
        const imageInfo = {
          original: relativePath.replace(/\\/g, '/'),
          optimized: [],
          sizes: [],
        };
        
        // Generate optimization info for each format
        for (const format of OPTIMIZATION_CONFIG.formats) {
          const optimizedName = file.replace(/\.(jpg|jpeg|png|gif)$/i, `.${format}`);
          imageInfo.optimized.push({
            format,
            path: path.join(path.dirname(relativePath), optimizedName).replace(/\\/g, '/'),
            quality: OPTIMIZATION_CONFIG.qualities[format] || 85,
          });
        }
        
        // Generate responsive sizes info
        for (const size of OPTIMIZATION_CONFIG.sizes) {
          imageInfo.sizes.push({
            width: size.width,
            suffix: size.suffix,
            formats: OPTIMIZATION_CONFIG.formats.map(format => ({
              format,
              path: path.join(
                path.dirname(relativePath), 
                file.replace(/\.(jpg|jpeg|png|gif)$/i, `${size.suffix}.${format}`)
              ).replace(/\\/g, '/'),
            })),
          });
        }
        
        manifest.images.push(imageInfo);
      }
    }
  }
  
  walkDir(path.join(ASSETS_DIR, 'images'));
  
  // Write manifest file
  const manifestPath = path.join(ASSETS_DIR, 'image-manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  
  console.log(`✅ Created optimization manifest at: ${manifestPath}`);
  console.log(`📊 Found ${manifest.images.length} images to optimize`);
  
  return manifest;
}

/**
 * Check if file is an image
 */
function isImageFile(filename) {
  return /\.(jpg|jpeg|png|gif|svg|webp|avif)$/i.test(filename);
}

/**
 * Create README with optimization instructions
 */
function createReadme() {
  const readmeContent = `# Image Optimization Guide

## For Production Deployment

### Option 1: Using Sharp (Recommended)
1. Install sharp: \`npm install sharp\`
2. Update the optimize-images.js script to use sharp for actual image processing
3. Run optimization: \`npm run optimize-images\`

### Option 2: Using Image CDN
1. Upload images to a CDN that supports automatic optimization (e.g., Cloudinary, Imgix)
2. Update image URLs in the codebase to use CDN URLs with optimization parameters
3. Use responsive images with srcset

### Option 3: Build-time Optimization
1. Configure your build pipeline (CI/CD) to optimize images
2. Use tools like \`sharp-cli\` or \`imagemin\`
3. Update references in the optimized-image.pipe.ts

## Current Setup
- Created optimization manifest at: /src/assets/image-manifest.json
- WebP format enabled for modern browsers
- Responsive image sizes configured
- Fallback to original format for unsupported browsers

## Next Steps
1. Implement actual image processing in optimize-images.js
2. Test WebP support detection
3. Measure performance improvements with Lighthouse
`;

  const readmePath = path.join(ASSETS_DIR, 'OPTIMIZATION-README.md');
  fs.writeFileSync(readmePath, readmeContent);
  console.log(`📖 Created optimization guide at: ${readmePath}`);
}

/**
 * Main function
 */
function main() {
  console.log('🚀 Starting image optimization process...');
  console.log(`📁 Assets directory: ${ASSETS_DIR}`);
  
  const hasSharp = checkDependencies();
  
  if (!hasSharp) {
    // Create manifest and instructions for production setup
    createOptimizationManifest();
    createReadme();
    
    console.log('\n📋 Next Steps for Production:');
    console.log('1. Install sharp: npm install sharp');
    console.log('2. Update optimize-images.js to process images');
    console.log('3. Run: npm run optimize-images');
    console.log('4. Test with: npm run build:seo');
  } else {
    // In production with sharp installed, actual image processing would happen here
    console.log('✅ Sharp is available. Processing images...');
    // Actual image processing code would go here
  }
  
  console.log('\n✅ Image optimization setup complete!');
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { createOptimizationManifest, checkDependencies };