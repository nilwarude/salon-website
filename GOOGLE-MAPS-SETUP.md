# Google Maps API Setup Guide for HairBar Salon

## Problem Identified
The website is getting **403 Forbidden** errors when trying to load Google Maps because no API key is configured.

## Solution
Follow these steps to set up Google Maps API:

## Step-by-Step Setup

### 1. Get Google Maps API Key

**a. Go to Google Cloud Console:**
- Open: https://console.cloud.google.com
- Sign in with Google account

**b. Create or Select Project:**
- Click project dropdown (top left)
- Click "New Project"
- Name: `hairbar-salon-website`
- Click "Create"

**c. Enable Required APIs:**
1. Go to "APIs & Services" → "Library"
2. Search and enable these APIs:
   - **Maps JavaScript API** (for interactive maps)
   - **Places API** (for business information)
   - **Static Maps API** (for static map images)

**d. Create API Key:**
1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "API Key"
3. Copy the generated API key

### 2. Configure API Key Restrictions

**Important:** Always restrict your API key for security!

1. Click "Restrict Key" on the API key page
2. **Application Restrictions:**
   - Select "HTTP referrers (web sites)"
   - Add: `https://hairbarsalon.in/*`
   - Add: `http://localhost:4200/*` (for development)

3. **API Restrictions:**
   - Select "Restrict key"
   - Enable only these 3 APIs:
     - Maps JavaScript API
     - Places API
     - Static Maps API

4. Click "Save"

### 3. Update Environment Files

**a. Copy example file:**
```bash
# Copy the example file to create your environment files
cp src/environments/environment.example.ts src/environments/environment.ts
cp src/environments/environment.example.ts src/environments/environment.prod.ts
```

**b. Edit environment files:**
Open `src/environments/environment.ts` and replace:
```typescript
apiKey: 'YOUR_GOOGLE_MAPS_API_KEY_HERE',
enableStaticMaps: false,
```
With your actual API key:
```typescript
apiKey: 'AIzaSyDxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // Your API key
enableStaticMaps: true, // Set to true when API key is added
```

**c. Also update `environment.prod.ts`** with the same API key.

### 4. Test the Configuration

**a. Build the project:**
```bash
npm run build
```

**b. Check for errors:**
- If build succeeds, the API key is working
- If you see 403 errors, double-check API key restrictions

### 5. Verify on Website

**Visit the contact page (`/contact`) and check:**
1. **Static maps should load** without errors
2. **Interactive maps** should work when clicking "View Interactive Map"
3. **No console errors** in browser developer tools

## Troubleshooting

### Common Issues & Solutions:

**1. Error: "403 Forbidden"**
- **Cause:** API key not configured or restricted incorrectly
- **Fix:** Check API key restrictions and enabled APIs

**2. Error: "RefererNotAllowed"**
- **Cause:** Domain not allowed in API key restrictions
- **Fix:** Add `https://hairbarsalon.in/*` to HTTP referrers

**3. Error: "API not enabled"**
- **Cause:** Required APIs not enabled
- **Fix:** Enable Maps JavaScript API, Places API, Static Maps API

**4. Static maps not loading**
- **Cause:** `enableStaticMaps` set to `false`
- **Fix:** Set `enableStaticMaps: true` in environment files

**5. Interactive maps not working**
- **Cause:** Maps JavaScript API not enabled
- **Fix:** Enable Maps JavaScript API in Google Cloud Console

## Cost Information

### Free Tier Limits (Monthly):
- **Static Maps:** 100,000 free requests/month
- **Dynamic Maps:** 28,500 free map loads/month
- **Places API:** 1,000 free requests/day

### For HairBar Salon:
- Estimated usage: 500-1,000 map views/month
- **Cost:** $0 (well within free tier)
- **Billing alert:** Set up at $10/month to prevent surprises

## Security Best Practices

1. **Never commit API keys** to public repositories
2. **Use environment variables** for production
3. **Restrict API keys** by domain and API
4. **Monitor usage** in Google Cloud Console
5. **Set up billing alerts**

## Maintenance

### Monthly Check:
1. Check API usage in Google Cloud Console
2. Verify billing is within free tier
3. Update API key if reaching limits

### Quarterly Check:
1. Review API key security settings
2. Update any changed domains
3. Check for new Google Maps features

## Support

### If You Need Help:
1. **Check documentation:** `/docs/google-business-profile-setup.md`
2. **Test API key:** https://developers.google.com/maps/documentation/javascript/examples/map-simple
3. **Google Support:** https://developers.google.com/maps/support

### Contact Developer:
- **For technical issues:** Check component logs
- **For API issues:** Google Cloud Console support

## Next Steps After Setup

1. ✅ **Test maps** on contact page
2. ✅ **Verify Google Business Profile** integration
3. ✅ **Check local SEO pages** have correct maps
4. ✅ **Monitor performance** for 1 week
5. ✅ **Set up analytics** to track map usage

---

**Last Updated:** October 2026  
**Status:** Ready for Implementation