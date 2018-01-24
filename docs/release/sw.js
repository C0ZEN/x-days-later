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
		'/x-days-later/index.html',
		'/x-days-later/assets/css/loader.css',
		'/x-days-later/assets/css/vendors.css',
		'/x-days-later/assets/css/styles.css',
		'/x-days-later/release/vendors.js',
		'/x-days-later/release/x-days-later.min.js',
		'/x-days-later/release/sw.init.min.js'
	]
};

for (let i = 2, length = data.filesToCache.length; i < length; i++) {
	data.filesToCache[i] += '?timestamp=';
}

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
						console.log('SW: all stuff cached');
						self.skipWaiting();
					});
			})
			.catch(() => {
				console.error('SW: cache install error');
			});
	});
});

self.addEventListener('fetch', $event => {
	console.log('SW: fetch');
	$event.respondWith(() => {
		return onRespondWithMatch($event);
	});
});

function onRespondWithMatch($event) {
	caches
		.match($event.request)
		.then($response => {
			if ($response) {
				return $response;
			}
			const fetchRequest = $event.request.clone();
			return fetch(fetchRequest).then($response2 => {
				return onFetchSuccess($event, $response2);
			});
		});
}

function onFetchSuccess($event, $response) {
	if (!$response || $response.status !== data.successHttpStatus || 'basic' !== $response.type) {
		return $response;
	}
	const responseToCache = $response.clone();
	caches
		.open(data.cacheName)
		.then(cache => {
			cache.put($event.request, responseToCache);
		});
	return $response;
}