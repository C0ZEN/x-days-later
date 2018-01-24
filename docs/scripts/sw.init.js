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
			.register('release/sw.min.js')
			.then(registration => {
				console.log('ServiceWorker registration successful with scope: ', registration.scope);

				if (registration.installing) {
					console.log('Service worker installing');
				}
				else if (registration.waiting) {
					console.log('Service worker installed');
				}
				else if (registration.active) {
					console.log('Service worker active');
				}
			}, err => {
				console.log('ServiceWorker registration failed: ', err);
			});
	});
}