// Conectta Esport · Futebol Society — service worker (network-first)
const CACHE = 'fs-v3';
const ASSETS = [
  './', './index.html', './manifest.webmanifest',
  './logo.png', './sp1.png', './sp2.png',
  './icon-192.png', './icon-512.png', './apple-touch-icon.png'
];
self.addEventListener('install', function(e){
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(ASSETS).catch(function(){}); }));
});
self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(ks){ return Promise.all(ks.filter(function(k){return k!==CACHE;}).map(function(k){return caches.delete(k);})); })
    .then(function(){ return self.clients.claim(); })
  );
});
self.addEventListener('fetch', function(e){
  if(e.request.method !== 'GET') return;
  if(e.request.headers.has('range')) return; // deixa o áudio (requisições Range) passarem direto
  e.respondWith(
    fetch(e.request).then(function(r){
      var cp = r.clone();
      caches.open(CACHE).then(function(c){ c.put(e.request, cp).catch(function(){}); });
      return r;
    }).catch(function(){
      return caches.match(e.request).then(function(m){ return m || caches.match('./index.html'); });
    })
  );
});
