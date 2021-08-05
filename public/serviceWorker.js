var cacheName = 'Calculator-pwa';
var filesToCache = [
    '/',
    '/Calculator.html',
    '/index.html',
    '/css/style.css',
    '/js/main.js'
];
/*start our service worker, and caceh all of our app content*/
self.addEventListener('install', function(e){
    e.waitUntil(
        caches.open(cacheName).then(function(cache){
            return cache.addAll(filesToCache);
        })
    );
    self.skipWaiting();
});
/*serve cached content when offline */
self.addEventListener('fetch', function(e){
    e.respondWith(
        caches.match(e.request).then(function(response){
            return response || fetch(e.request);
        })
    );
});

self.addEventListener('notificationclick',function(e){
    var notification = e.notification;
    var primaryKey = notification.data.primaryKey;
    var action = e.action;

  if (action === 'close') {
    notification.close();
  } else {
    clients.openWindow('http://www.google.com');
    console.log(primaryKey);
    notification.close();
  }
});
