// service-worker.js
// Um arquivo Service Worker simples
const CACHE_NAME = 'cotacao-cripto-cache-v1';
const urlsToCache = [
    '/',
    '/cripto.html',
    '/manifest.json'
    // Adicione os seus ícones aqui
    // '/icon-192.png',
    // '/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});