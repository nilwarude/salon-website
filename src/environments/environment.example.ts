// Copy this file to environment.ts and environment.prod.ts
// Replace the API key placeholder with your actual Google Maps API key

export const environment = {
  production: false,
  business: {
    name: 'HairBar Unisex Salon',
    shortName: 'HairBar',
    tagline: 'Hair | Skin | Nails | Makeup',
    description: 'Vadodara\'s premium unisex salon offering expert haircuts, hair color, styling, skin care, nails, and makeup services.',
    since: 2018,
    rating: 4.7,
    totalReviews: 543,
    awards: 'Beardo Award Winner',

    // Contact
    phones: [
      { label: 'Appointments', number: '+917861935860', display: '+91 78619 35860' },
      { label: 'WhatsApp', number: '+918291492821', display: '+91 82914 92821' },
    ],
    primaryPhone: '+917861935860',
    primaryPhoneDisplay: '+91 78619 35860',
    whatsappPhone: '+918291492821',
    whatsappDisplay: '+91 82914 92821',
    email: 'contact@hairbarsalon.in',
    emailDisplay: 'contact@hairbarsalon.in',

    // Address
    address: {
      shopNo: 'Shop No-14, Harmony',
      area: 'Near Sai Baba Temple',
      landmark: 'Parivar Char Rasta',
      road: 'Waghodiya Road',
      city: 'Vadodara',
      state: 'Gujarat',
      pincode: '390025',
      country: 'India',
      full: 'Shop No-14, Harmony, Near Sai Baba Temple, Parivar Char Rasta, Waghodiya Road, Vadodara, Gujarat 390025',
      short: 'Waghodiya Road, Vadodara',
    },

    // Working Hours
    workingHours: [
      { day: 'Mon - Fri', time: '9:00 AM - 10:00 PM' },
      { day: 'Saturday', time: '9:00 AM - 10:00 PM' },
      { day: 'Sunday', time: '9:00 AM - 10:00 PM' },
    ],

    // Social Media
    social: {
      instagram: 'https://instagram.com/hairbar.official',
      facebook: 'https://facebook.com/hairbarsaloon',
      instagramHandle: '@hairbar.official',
    },

    // Website
    website: 'https://hairbarsalon.in',
    domain: 'hairbarsalon.in',
    canonical: 'https://hairbarsalon.in',
  },

  // =============================================
  // GOOGLE MAPS API CONFIGURATION
  // =============================================
  // GET YOUR API KEY:
  // 1. Go to: https://console.cloud.google.com
  // 2. Create a new project or select existing
  // 3. Enable these APIs:
  //    - Maps JavaScript API
  //    - Places API  
  //    - Static Maps API
  // 4. Create credentials → API Key
  // 5. Restrict API key to:
  //    - HTTP referrers: https://hairbarsalon.in/*
  //    - Enable only the 3 APIs above
  // 6. Copy the API key below
  // =============================================
  
  googleMaps: {
    // REPLACE THIS WITH YOUR ACTUAL API KEY
    apiKey: 'AIzaSyBExxbSSJwAOOTCQMSg8ChbdYhZBBMyCY0',
    
    // Set to true when API key is configured
    enableStaticMaps: true,
    
    // Map settings
    defaultZoom: 16,
    defaultMapType: 'roadmap',
    
    // Business location
    location: {
      latitude: 22.292679979692092,
      longitude: 73.2367180750691,
      placeId: 'ChIJH9pvc8bG5zsR2d5p_c78ce6ecc29d'
    }
  },
};

// After setting up the API key:
// 1. Copy this file to environment.ts (development)
// 2. Copy this file to environment.prod.ts (production)
// 3. Set enableStaticMaps: true in both files
// 4. Run: npm run build