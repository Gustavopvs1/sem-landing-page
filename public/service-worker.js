const CACHE_NAME = 'sem-cache-v2';
const STATIC_CACHE = 'sem-static-v2';
const DYNAMIC_CACHE = 'sem-dynamic-v2';

// Archivos esenciales que siempre queremos cachear
const ESSENTIAL_FILES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/logo.png',
  '/sem4.png',
  '/pq2.png'
];

// Instala el Service Worker
self.addEventListener('install', event => {
  console.log('SW: Install event');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('SW: Caching essential files');
        return cache.addAll(ESSENTIAL_FILES);
      })
      .catch(err => {
        console.error('SW: Error caching essential files:', err);
      })
  );
  self.skipWaiting();
});

// Activa el nuevo SW
self.addEventListener('activate', event => {
  console.log('SW: Activate event');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('SW: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Estrategia de caché mejorada
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Solo manejar requests del mismo origen
  if (url.origin !== location.origin) {
    return;
  }

  // Estrategia según tipo o extensión
  if (request.destination === 'document' || request.mode === 'navigate') {
    event.respondWith(networkFirstStrategy(request));
  } else if (
    request.destination === 'script' || 
    request.destination === 'style' ||
    request.destination === 'image' ||
    request.url.endsWith('.js') ||
    request.url.endsWith('.css') ||
    request.url.endsWith('.json') ||
    request.url.endsWith('.html')
  ) {
    event.respondWith(cacheFirstStrategy(request));
  } else {
    event.respondWith(networkFirstStrategy(request));
  }
});

// Estrategia Cache First (para assets estáticos)
function cacheFirstStrategy(request) {
  return caches.match(request)
    .then(response => {
      if (response) {
        console.log('SW: Serving from cache:', request.url);
        return response;
      }
      
      return fetch(request)
        .then(networkResponse => {
          if (networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(DYNAMIC_CACHE)
              .then(cache => {
                cache.put(request, responseClone);
              });
          }
          return networkResponse;
        })
        .catch(err => {
          console.log('SW: Network failed for:', request.url);
          if (request.destination === 'image') {
            return new Response('', { status: 204 });
          }
          throw err;
        });
    });
}

// Estrategia Network First (para HTML y APIs)
function networkFirstStrategy(request) {
  return fetch(request)
    .then(response => {
      if (response.status === 200) {
        const responseClone = response.clone();
        caches.open(DYNAMIC_CACHE)
          .then(cache => {
            cache.put(request, responseClone);
          });
      }
      return response;
    })
    .catch(err => {
      console.log('SW: Network failed, trying cache for:', request.url);
      return caches.match(request)
        .then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }

          if (request.mode === 'navigate') {
            return caches.match('/index.html');
          }

          throw err;
        });
    });
}
