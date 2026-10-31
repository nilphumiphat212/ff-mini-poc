// CR-013 / SPEC-016: persistent asset cache. Bump CACHE only to force-evict everything.
const CACHE = 'ffm-cache-v1';
const HASHED = /\/assets\/[^/]*-[\w-]{8}\.(js|css)$/;

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

async function fetchAndStore(request) {
  const response = await fetch(request);
  if (response.ok && response.status === 200) {
    const cache = await caches.open(CACHE);
    await cache.put(request, response.clone());
  }
  return response;
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET' || request.headers.has('range')) return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    // Pages: network first so updates ship; cache is the offline fallback.
    event.respondWith(fetchAndStore(request).catch(() => caches.match(request)));
    return;
  }

  if (HASHED.test(url.pathname)) {
    // Content-hashed bundles never change: cache first.
    event.respondWith(caches.match(request).then((hit) => hit || fetchAndStore(request)));
    return;
  }

  if (url.pathname.includes('/assets/')) {
    // Models, textures, audio keep their names: serve the cache, refresh in the background.
    event.respondWith(
      caches.match(request).then((hit) => {
        const refresh = fetchAndStore(request).catch(() => hit);
        return hit || refresh;
      })
    );
  }
});
