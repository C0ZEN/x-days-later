/**
 * Generated header by C0ZEN for x-days-later project
 * Generated file sw on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 23/01/2018
 * Time: 23:28
 * Version: 1.0.0
 */
const data = {
	successHttpStatus: 200,
	cacheName        : 'x-days-later-cache-v1',
	filesToCache     : [
		'/x-days-later/assets/css/loader.css'
	]
};

self.addEventListener('install', $event => {
	console.log('SW: install');
	$event.waitUntil(() => {
		caches
			.open(data.cacheName)
			.then($cache => {
				console.log('SW: cache opened');
				return $cache
					.addAll(data.filesToCache)
					.then(() => {
						console.log('SW: files added to cache');
					})
					.catch(() => {
						console.log('SW: cache files error');
					});
			})
			.catch(() => {
				console.log('SW: cache open error');
			});
	});
});

self.addEventListener('fetch', $event => {
	console.log('SW: fetch', $event.request);
	let response = null;
	$event.respondWith(caches
		.match($event.request)
		.then($response => {
			console.log('SW: fetch match found');
			response = $response;
			caches.open(data.cacheName).then(cache => {
				cache.put($event.request, response);
			});
			return response.clone();
		})
		.catch(() => {
			console.log('SW: fetch match not found');
			return fetch($event.request);
		}));
});

self.addEventListener('activate', $event => {
	console.log('SW: activate');
	$event.waitUntil(self.clients.claim());
});