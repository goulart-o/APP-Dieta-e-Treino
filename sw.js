// Ficha Forte — cache para funcionar offline depois da primeira visita
const CACHE='ficha-forte-v1';
const FILES=['./','index.html','app.js','data.js','exart.js','manifest.webmanifest','garrafa-m.webp','garrafa-f.webp','macros.webp','mascote-m.webp','mascote-f.webp','icons/icon-192.png','icons/icon-512.png'];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{
    if(res.ok && (e.request.url.startsWith(self.location.origin)||/cdnjs|fonts\.(googleapis|gstatic)/.test(e.request.url))){ const cp=res.clone(); caches.open(CACHE).then(c=>c.put(e.request,cp)); }
    return res;
  }).catch(()=>caches.match('index.html'))));
});
