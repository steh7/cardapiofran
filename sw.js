const CACHE = 'fran-bolos-v2';

const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// INSTALL
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
});

// ACTIVATE (limpa caches antigos)
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE)
            .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// FETCH (estratégia híbrida)
self.addEventListener('fetch', e => {

  // 🔹 HTML → sempre tenta online primeiro
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request)
        .then(response => {
          const clone = response.clone();
          caches.open(CACHE).then(cache => {
            cache.put('./index.html', clone);
          });
          return response;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // 🔹 Outros arquivos → cache primeiro
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;

      return fetch(e.request).then(response => {
        // salva no cache para próxima vez
        return caches.open(CACHE).then(cache => {
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});