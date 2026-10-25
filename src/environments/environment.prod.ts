export const environment = {
  production: true,
  apiUrl: 'https://hairbarsalon.in/api',
  siteUrl: 'https://hairbarsalon.in',
  
  // Google Maps API Configuration
  googleMaps: {
    apiKey: 'AIzaSyBExxbSSJwAOOTCQMSg8ChbdYhZBBMyCY0', // Production Google Maps API key
    enableStaticMaps: true, // Static maps enabled
    defaultZoom: 16,
    defaultMapType: 'roadmap',
    location: {
      latitude: 22.292679979692092,
      longitude: 73.2367180750691,
      placeId: 'ChIJH9pvc8bG5zsR2d5p_c78ce6ecc29d'
    }
  },
};
