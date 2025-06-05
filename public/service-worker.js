const CACHE_NAME = 'sem-cache-v2';
const STATIC_CACHE = 'sem-static-v2';
const DYNAMIC_CACHE = 'sem-dynamic-v2';

// Archivos esenciales que siempre queremos cachear
const ESSENTIAL_FILES = [
  '/',
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

  // Estrategia diferente según el tipo de recurso
  if (request.destination === 'document') {
    // Para documentos HTML: Network First, luego Cache
    event.respondWith(networkFirstStrategy(request));
  } else if (
    request.destination === 'script' || 
    request.destination === 'style' ||
    request.destination === 'image'
  ) {
    // Para assets estáticos: Cache First, luego Network
    event.respondWith(cacheFirstStrategy(request));
  } else {
    // Para otros recursos: Network First
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
          // Solo cachear respuestas exitosas
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
          // Si es una imagen, podrías retornar una imagen placeholder
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
      // Si la respuesta es exitosa, cachearla
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
      // Si falla la red, intentar desde caché
      return caches.match(request)
        .then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
          
          // Si es una navegación (documento HTML), servir la página principal desde caché
          if (request.mode === 'navigate') {
            return caches.match('/');
          }
          
          throw err;
        });
    });
}