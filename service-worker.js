self.addEventListener('install', (event) => {
    event.waitUntil(
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

self.addEventListener("push", (event) => {
    const options = {
        body: event.data.text(),
        icon: 'https://raw.githubusercontent.com/aflacake/tasbihcount/main/img/logo-tasbih-count.ico',
    };

    event.waitUntil(
        self.registration.showNotification("Pengingat Tasbih", options)
    );
});

self.addEventListener("notificationclick", event => {
    event.notification.close();

    event.waitUntil(
        clients.openWindow('https://aflacake.github.io/tasbihcount/')
    );
});
