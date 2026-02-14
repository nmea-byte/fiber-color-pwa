self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open("fiber-app").then(function(cache) {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./icons/icon-192.png",
        "./icons/icon-512.png"
      ]);
    })
  );
});
