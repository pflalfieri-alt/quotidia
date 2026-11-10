self.addEventListener('install',function(){self.skipWaiting()});self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});self.addEventListener('fetch',function(){});
/* PUSH_11NOV */
self.addEventListener('push',function(e){var d={};try{d=e.data?e.data.json():{}}catch(x){d={title:'Quotidia',body:e.data?e.data.text():''}}
e.waitUntil(self.registration.showNotification(d.title||'Quotidia',{body:d.body||'',icon:'icon-192.png',badge:'icon-192.png',data:{url:d.url||'./'},lang:'it'}))});
self.addEventListener('notificationclick',function(e){e.notification.close();var u=(e.notification.data&&e.notification.data.url)||'./';
e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(function(L){for(var i=0;i<L.length;i++){if('focus' in L[i]){L[i].navigate&&L[i].navigate(u);return L[i].focus()}}return self.clients.openWindow(u)}))});
