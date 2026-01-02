const CACHE_NAME = 'güvenli_çekim_v2';


// 1. Sadece ana iskeleti baştan yükle
const staticAssets = [
  './',
  './index.html',
  './face-api.min.js',
  './manifest.json'
];

self.addEventListener('install', async event => {
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll(staticAssets);
  return self.skipWaiting();
});

self.addEventListener('activate', event => {
  self.clients.claim();
});

// 2. İSTEK YAKALAMA (En Önemli Kısım)
self.addEventListener('fetch', event => {
  const req = event.request;
  
  // Sadece bizim sitemizden gelen ve 'http' ile başlayan istekleri yakala
  if (!req.url.startsWith('http')) return;

  event.respondWith(cacheFirst(req));
});

async function cacheFirst(req) {
  // A. Önce hafızaya (Cache) bak
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(req);

  if (cachedResponse) {
    return cachedResponse; // Hafızada varsa hemen ver (İnternetsiz çalışır)
  }

  // B. Hafızada yoksa internetten çek
  try {
    const networkResponse = await fetch(req);
    
    // C. İnternetten geleni hemen hafızaya kopyala (Gelecek sefer için)
    cache.put(req, networkResponse.clone());
    
    return networkResponse;
  } catch (error) {
    // İnternet yoksa ve cache'de de yoksa hata döner
    console.log("İnternet yok ve dosya cache'de bulunamadı:", req.url);
    throw error;
  }
}