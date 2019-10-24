const cacheName = "resturant-sit-v5"; 
const allUrl = [
    '/',
    'index.html',
    '/js/dbhelper.js',
    '/js/restaurant_info.js',
    '/data/restaurants.json',
    '/js/serviceWorker.js',
    'http://localhost:8000/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg',
    '/js/main.js',
    'restaurant.html',
    'http://localhost:8000/restaurant.html?id=1',
    'http://localhost:8000/restaurant.html?id=2',
    'http://localhost:8000/restaurant.html?id=3',
    'http://localhost:8000/restaurant.html?id=4',
    'http://localhost:8000/restaurant.html?id=5',
    'http://localhost:8000/restaurant.html?id=6',
    'http://localhost:8000/restaurant.html?id=7',
    'http://localhost:8000/restaurant.html?id=8',
    'http://localhost:8000/restaurant.html?id=9',
    'http://localhost:8000/restaurant.html?id=10',
    '/css/styles.css',
    
]


self.addEventListener("install",function(evt){
    // console.log("service worker is installed");
    evt.waitUntil(
        caches.open(cacheName).then(cache => {
            console.log("caching");
            cache.addAll(allUrl);
        }))

});

self.addEventListener("activate",function(evt){
    // console.log("service worker is activated");
    evt.waitUntil( //
        caches.keys().then(keys =>{
            
            // console.log(keys); 
            return Promise.all(keys
                .filter(key => key !== cacheName)
                .map(key => caches.delete(key))

            )
        })
    );
});


self.addEventListener("fetch", evt => {
    evt.respondWith(
        caches.match(evt.request).then(cacherespond => {
            return cacherespond || fetch(evt.request);
        })

    )
});

