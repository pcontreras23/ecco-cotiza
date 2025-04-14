
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("ecco-cache").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/assets/css/style.css",
        "/js/app.js",
        "/assets/img/ecco_color.png",
        "/assets/img/grafico-de-acciones.png"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
