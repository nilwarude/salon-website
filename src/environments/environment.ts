export const environment = {
  production: false,
  business: {
    name: 'Hairbar Unisex Salon',
    shortName: 'Hairbar',
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
    email: 'contact@hairbar.in',
    emailDisplay: 'contact@hairbar.in',

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
    website: 'https://hairbar.in',
    domain: 'hairbar.in',
    canonical: 'https://hairbar.in',
  },
};