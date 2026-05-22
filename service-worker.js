const CACHE='cosmic-roll-v1';
const FILES=[
  '/Cosmic-Roll/cosmic-roll-v4.html',
  '/Cosmic-Roll/manifest.json'
];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));
});
self.addEventListener('fetch',e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
