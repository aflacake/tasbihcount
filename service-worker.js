self.addEventListener('install', (event) => {
	event.awaitUntil(
		caches.open('v1').then((cache) => {
			return cache.addAll([
				'index.html',
				'style.css',
				'script.js',
				'https://raw.githubusercontent.com/aflacake/tasbihcount/main/img/logo-tasbih-count.ico',
				'https://github.com/aflacake/tasbihcount/raw/main/img/logo-tasbih-count.png'
			]);
		})
	);
});

self.addEventListener('fetch', (event) => {
	event.responWidth(
		caches.match(event.request).then((cachedResponse)=> {
			return cachedResponse || fetch(event.request);
		})
	
	);
});
