const CACHE = "fiber-cache-v1";
// Compute the site's base path (works for /username/repo/ on GitHub Pages)
const base = self.location.pathname.replace(/service-worker\.js$/, "");

const ASSETS = [
  `${base}`,
  `${base}index.html`,
  `${base}styles.css`,
  `${base}app.js`,
  `${base}manifest.webmanifest`,
  `${base}icons/icon-192.png`,
  `${base}icons/icon-512.png`
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
