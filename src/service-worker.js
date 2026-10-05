/**
 * Hairbar Salon - Service Worker
 *
 * NOTE: Bump `CACHE_NAME` on every deploy. The cache is keyed by this name,
 * and `activate` deletes all older caches. Keeping the same name across
 * deploys makes the service worker serve a STALE index.html (referencing old,
 * deleted hashed bundles) — which shows blank pages in normal Chrome while
 * incognito (no service worker) loads fine.
 *
 * Strategy:
 *  - Navigations (HTML): NETWORK-FIRST  -> always fetch the latest index.html;
 *    cache is only an offline fallback. This is what fixes stale privacy-policy
 *    / SPA routes after a redeploy.
 *  - Static assets: CACHE-FIRST (they are content-hashed, so caching is safe).
 *  - API and cross-origin requests: untouched.
 */
const CACHE_NAME = 'hairbar-salon-v2';

// Same-origin assets to pre-cache on install.
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/assets/images/logo.jpeg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      // Ignore any sub-request failing (e.g. optional assets) so install succeeds.
      .catch(() => {})
  );
  // Activate as soon as possible so this (fixed) service worker takes control now.
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Delete every cache that isn't the current one.
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
      )
  );
  // Take control of already-open pages immediately.
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return; // leave cross-origin (fonts etc.) to the browser
  if (url.pathname.startsWith('/api/')) return;

  // ---- Navigation requests: NETWORK-FIRST ----
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() =>
          // Offline fallback: serve the last cached index.html.
          caches.match(request).then((cached) => cached || caches.match('/'))
        )
    );
    return;
  }

  // ---- Static assets: CACHE-FIRST ----
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request)
        .then((response) => {
          if (response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => cached);
    })
  );
});