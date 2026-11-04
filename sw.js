const C="rit-v10c";
const ASSETS=["./manifest.webmanifest","./icons/icon-192.png","./icons/icon-512.png",
 "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>Promise.allSettled(ASSETS.map(a=>c.add(a)))).then(()=>self.skipWaiting()));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  const u=new URL(e.request.url);
  if(u.hostname.includes("supabase.co"))return;
  const esPagina=e.request.mode==="navigate"||u.pathname.endsWith("/")||u.pathname.endsWith("index.html");
  if(esPagina){
    // red primero (siempre la última versión); si no hay señal, la copia guardada
    e.respondWith(fetch(e.request).then(res=>{const cp=res.clone();caches.open(C).then(c=>c.put(e.request,cp));return res;}).catch(()=>caches.match(e.request,{ignoreSearch:true}).then(r=>r||caches.match("./index.html"))));
    return;
  }
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).then(res=>{if(res.ok){const cp=res.clone();caches.open(C).then(c=>c.put(e.request,cp));}return res;})));
});
