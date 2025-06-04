const CACHE_NAME = 'sem-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/logo.png',
  '/sem4.png',
  '/pq2.png',
  '/manifest.json',
  '/favicon.ico',
  '/static/js/bundle.js',
  // puedes agregar más si sabes los nombres exactos
];

// Instala el Service Worker y guarda archivos en caché
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// Activa el nuevo SW y limpia cachés viejas si es necesario
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(name => {
          if (name !== CACHE_NAME) return caches.delete(name);
        })
      )
    )
  );
  self.clients.claim();
});

// Intercepta peticiones y responde con caché si está disponible
self.addEventListener('fetch', event => {
  const request = event.request;

  // Si es una imagen, se cachea dinámicamente
  if (request.destination === 'image') {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache =>
        cache.match(request).then(response => {
          return (
            response ||
            fetch(request).then(networkResponse => {
              cache.put(request, networkResponse.clone());
              return networkResponse;
            })
          );
        })
      )
    );
    return;
  }

  // Para otros recursos
  event.respondWith(
    caches.match(request).then(response => response || fetch(request))
  );
});