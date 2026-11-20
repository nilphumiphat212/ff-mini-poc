// CR-013 / SPEC-016: persistent asset cache. Bump CACHE only to force-evict everything.
const CACHE = 'ffm-cache-v24'; // CHG-095: a v23 cache could hold index.html under a model URL (dev server answers a missing file with the page)
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
  // never keep an HTML answer for a js/css/model/texture/audio URL: the dev server and some hosts answer a missing file with index.html (200)
  const isPage = (response.headers.get('content-type') || '').includes('text/html');
  if (response.ok && response.status === 200 && !isPage) {
    const cache = await caches.open(CACHE);
    await cache.put(request, response.clone());
  }
  return response;
}

async function freshPage(request) {
  const response = await fetch(request.url, { cache: 'no-store', credentials: 'same-origin' });
  if (response.redirected) return fetchAndStore(request);
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
    // CHG-064: bypass the HTTP cache (GitHub Pages sends max-age=600), so a reload never runs an older index.html than the deploy.
    // A navigation Request cannot be copied with new options, so fetch its URL; a redirected answer falls back to the old path.
    event.respondWith(freshPage(request).catch(() => caches.match(request)));
    return;
  }

  if (HASHED.test(url.pathname)) {
    // Content-hashed bundles never change: cache first.
    event.respondWith(caches.match(request).then((hit) => hit || fetchAndStore(request)));
    return;
  }

  if (url.pathname.includes('/assets/')) {
    // Models, textures, audio: serve cache first, fetch and store on miss.
    event.respondWith(
      caches.match(request).then((hit) => {
        if (hit) return hit;
        return fetchAndStore(request);
      })
    );
  }
});
