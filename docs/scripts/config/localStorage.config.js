/**
 * Generated header by C0ZEN for x-days-later project
 * Generated file localStorage.config on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 19/01/2018
 * Time: 12:42
 * Version: 0.11.9
 */
(function (angular) {
	'use strict';

	angular
		.module('xDaysLater')
		.config(config);

	config.$inject = [
		'localStorageServiceProvider'
	];

	function config(localStorageServiceProvider) {
		localStorageServiceProvider
			.setPrefix('xdl')
			.setDefaultToCookie(true)
			.setNotify(false, false);
	}

}(window.angular));