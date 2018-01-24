/**
 * Generated header by C0ZEN for x-days-later project
 * Generated file sw.init on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 23/01/2018
 * Time: 23:53
 * Version: 1.0.0
 */
if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('/x-days-later/sw.min.js')
			.then(registration => {
				console.log('SW: registration successful');
				console.info(registration.scope);
				if (registration.installing) {
					console.log('SW: installing');
				}
				else if (registration.waiting) {
					console.log('SW: installed');
				}
				else if (registration.active) {
					console.log('SW: active');
				}
			}, err => {
				console.error('SW: registration failed');
				console.error(err);
			});
	});
}