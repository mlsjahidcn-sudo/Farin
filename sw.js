const CACHE_NAME = 'farin-buddy-v1';
const urlsToCache = [
  '/',
  '/index.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) return response;
        return fetch(event.request);
      })
  );
});

self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  event.waitUntil(
    self.registration.showNotification(data.title || "Farin's Buddy 🌸", {
      body: data.body || 'A gentle reminder just for you 💜',
      icon: 'data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 192 192%27%3E%3Crect fill=%27%23e05780%27 width=%27192%27 height=%27192%27 rx=%2740%27/%3E%3Ctext x=%2796%27 y=%27120%27 font-size=%27100%27 text-anchor=%27middle%27%3E🌸%3C/text%3E%3C/svg%3E',
      badge: 'data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 192 192%27%3E%3Crect fill=%27%23e05780%27 width=%27192%27 height=%27192%27 rx=%2740%27/%3E%3Ctext x=%2796%27 y=%27120%27 font-size=%27100%27 text-anchor=%27middle%27%3E🌸%3C/text%3E%3C/svg%3E',
      tag: data.tag || 'reminder',
      requireInteraction: false
    })
  );
});
