/* eslint-disable */
/* tslint:disable */

self.addEventListener('install', () => {
    self.skipWaiting()
})

self.addEventListener('activate', () => {
    self.clients.claim()
})

self.addEventListener('fetch', (event) => {
    // Skip MSW processing if the request doesn't match our patterns
    if (!event.request.url.includes('/api/')) {
        return
    }

    event.respondWith(
        fetch(event.request).catch(() => {
            return new Response(JSON.stringify({ error: 'Network error' }), {
                status: 503,
                headers: { 'Content-Type': 'application/json' },
            })
        })
    )
}) 