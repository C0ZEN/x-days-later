/**
 * Generated header by C0ZEN for x-days-later project
 * Generated file analytics.config on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 23/01/2018
 * Time: 18:12
 * Version: 0.13.6
 */
(function (angular) {
	'use strict';

	angular
		.module('xDaysLater')
		.config(config);

	config.$inject = [
		'AnalyticsProvider',
		'appConstant'
	];

	function config(AnalyticsProvider, appConstant) {
		AnalyticsProvider
			.setAccount(appConstant.analytics.account);
	}

}(window.angular));