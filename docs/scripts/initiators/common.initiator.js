/**
 * Generated header by C0ZEN for x-days-later project
 * Generated file common.initiator on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 23/01/2018
 * Time: 23:01
 * Version: 0.15.10
 */
(function (angular) {
	'use strict';

	angular
		.module('xDaysLater')
		.run(config);

	function config() {
		console.info('Sitemap:', 'https://c0zen.github.io/x-days-later/sitemap.xml');
		console.info('Feed:', 'https://c0zen.github.io/x-days-later/feed.xml');

		if ('serviceWorker' in navigator) {
			window.addEventListener('load', () => {
				navigator.serviceWorker.register('/sw.js').then(registration => {
					console.log('ServiceWorker registration successful with scope: ', registration.scope);
				}, err => {
					console.log('ServiceWorker registration failed: ', err);
				});
			});
		}
	}

}(window.angular));