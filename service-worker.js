// ExamVerse Service Worker v1.0.0
// Handles offline support, caching, and auto-updates

const CACHE_VERSION = 'examverse-v1';
const ASSETS_CACHE = 'examverse-assets-v1';
const API_CACHE = 'examverse-api-v1';

// Assets to cache on install (static files)
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/registration.html',
  '/login.html',
  '/subject.html',
  '/exam.html',
  '/report.html',
  '/dashboard.html',
  '/index.css',
  '/style.css',
  '/registration.css',
  '/subjects.css',
  '/exam.css',
  '/report.css',
  '/index.js',
  '/script.js',
  '/registration.js',
  '/subjects.js',
  '/exam.js',
  '/report.js',
  '/bubbles.js',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;800&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://cdn.jsdelivr.net/npm/flatpickr'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(ASSETS_CACHE).then((cache) => {
      console.log('Caching static assets');
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('Some assets failed to cache (expected for external CDNs):', err);
        // Don't fail install if some assets fail
      });
    }).then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches and check for updates
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== ASSETS_CACHE && cacheName !== API_CACHE && cacheName !== CACHE_VERSION) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - network-first for API, cache-first for assets
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Skip cross-origin requests (like analytics)
  if (url.origin !== location.origin && !url.href.includes('googleapis') && !url.href.includes('cdnjs') && !url.href.includes('cdn.jsdelivr')) {
    return;
  }

  // API endpoints - network first, fallback to cache
  if (url.pathname.includes('/api/') || url.pathname.endsWith('.json')) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (!response || response.status !== 200 || response.type === 'error') {
            return response;
          }
          const responseClone = response.clone();
          caches.open(API_CACHE).then((cache) => {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(() => {
          return caches.match(event.request).then((response) => {
            return response || new Response('Offline - please check your connection', { status: 503 });
          });
        })
    );
  } else {
    // Static assets - cache first, fallback to network
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request)
          .then((response) => {
            if (!response || response.status !== 200 || response.type === 'error') {
              return response;
            }
            const responseClone = response.clone();
            // Cache successful responses
            if (event.request.method === 'GET') {
              caches.open(ASSETS_CACHE).then((cache) => {
                cache.put(event.request, responseClone);
              });
            }
            return response;
          })
          .catch(() => {
            // Return offline page if available
            if (event.request.destination === 'document') {
              return caches.match('/index.html');
            }
          });
      })
    );
  }
});

// Auto-update check when connection is restored
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CHECK_UPDATE') {
    checkForUpdates();
  }
});

// Check for service worker updates
function checkForUpdates() {
  navigator.serviceWorker.getRegistration().then((registration) => {
    if (registration) {
      registration.update().then(() => {
        console.log('Service Worker update checked');
      });
    }
  });
}

// Periodically check for updates (every 60 minutes)
setInterval(() => {
  checkForUpdates();
}, 3600000);

console.log('ExamVerse Service Worker loaded');
