// ExamVerse Service Worker v2.0.0
// Reliable offline caching, fallback routing, and update handoff

const CACHE_VERSION = 'v2.0.0';
const ASSETS_CACHE = `examverse-assets-${CACHE_VERSION}`;
const DATA_CACHE = `examverse-data-${CACHE_VERSION}`;
const RUNTIME_CACHE = `examverse-runtime-${CACHE_VERSION}`;

const APP_SHELL_ASSETS = [
  '/',
  '/index.html',
  '/registration.html',
  '/login.html',
  '/subject.html',
  '/exam.html',
  '/report.html',
  '/dashboard.html',
  '/offline.html',
  '/index.css',
  '/style.css',
  '/registration.css',
  '/subjects.css',
  '/exam.css',
  '/report.css',
  '/dashboard.css',
  '/index.js',
  '/script.js',
  '/registration.js',
  '/subjects.js',
  '/exam.js',
  '/report.js',
  '/dashboard.js',
  '/user-profile.js',
  '/bubbles.js',
  '/pwa-init.js',
  '/manifest.json',
  '/questions.json',
  '/examverse_logo.png'
];

const CDN_ALLOWLIST = [
  'fonts.googleapis.com',
  'cdnjs.cloudflare.com',
  'cdn.jsdelivr.net'
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(ASSETS_CACHE);
    await Promise.allSettled(
      APP_SHELL_ASSETS.map((asset) => cache.add(new Request(asset, { cache: 'reload' })))
    );
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const cacheNames = await caches.keys();
    await Promise.all(
      cacheNames
        .filter((name) => name.startsWith('examverse-') && ![ASSETS_CACHE, DATA_CACHE, RUNTIME_CACHE].includes(name))
        .map((name) => caches.delete(name))
    );
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') {
    return;
  }

  const url = new URL(request.url);
  const isSameOrigin = url.origin === self.location.origin;
  const isAllowedCdn = CDN_ALLOWLIST.some((host) => url.hostname.includes(host));

  if (!isSameOrigin && !isAllowedCdn) {
    return;
  }

  if (request.mode === 'navigate' || request.destination === 'document') {
    event.respondWith(handleNavigationRequest(request));
    return;
  }

  if (isSameOrigin && url.pathname.endsWith('.json')) {
    event.respondWith(networkFirst(request, DATA_CACHE));
    return;
  }

  if (
    request.destination === 'script' ||
    request.destination === 'style' ||
    request.destination === 'image' ||
    request.destination === 'font'
  ) {
    event.respondWith(cacheFirstWithRefresh(request, isSameOrigin ? ASSETS_CACHE : RUNTIME_CACHE));
    return;
  }

  event.respondWith(networkFirst(request, isSameOrigin ? DATA_CACHE : RUNTIME_CACHE));
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

async function handleNavigationRequest(request) {
  try {
    const fresh = await fetch(request);
    const cache = await caches.open(ASSETS_CACHE);
    cache.put(request, fresh.clone());
    return fresh;
  } catch {
    const cachedPage = await caches.match(request);
    if (cachedPage) {
      return cachedPage;
    }
    const fallbackPage = await caches.match('/offline.html');
    if (fallbackPage) {
      return fallbackPage;
    }
    return new Response('Offline', { status: 503, statusText: 'Offline' });
  }
}

async function networkFirst(request, cacheName) {
  try {
    const response = await fetch(request);
    if (response && response.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    if (cached) {
      return cached;
    }
    return new Response('Offline - content unavailable', { status: 503, statusText: 'Offline' });
  }
}

async function cacheFirstWithRefresh(request, cacheName) {
  const cached = await caches.match(request);
  if (cached) {
    fetch(request)
      .then(async (response) => {
        if (response && response.ok) {
          const cache = await caches.open(cacheName);
          cache.put(request, response.clone());
        }
      })
      .catch(() => {});
    return cached;
  }

  const response = await fetch(request);
  if (response && response.ok) {
    const cache = await caches.open(cacheName);
    cache.put(request, response.clone());
  }
  return response;
}
