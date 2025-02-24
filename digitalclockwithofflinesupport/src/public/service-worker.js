self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("digital-clock-cache").then((cache) => {
            return cache.addAll([
                "/","/alarm"]);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});


// Push Notification for alarms

self.addEventListener("push", (event) => {
    const data = event.data ? event.data.text() : "Alarm is ringing!";
    event.waitUntil(
        self.registration.showNotification("Alarm Notification", {
            body: data,
            icon: "/icon.png",
            vibrate:[200,100,200],
            actions: [{
                action: "stop",
                title: "Stop Alarm"
            }]
        })
    );
});

// Handle Notification clicks

self.addEventListener("notificationclick", (event) => {
    event.notification.close();
    if(event.action === "stop") {
        console.log("Alarm stopped");
    }
});