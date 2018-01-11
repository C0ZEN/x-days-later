/**
 * Generated header by C0ZEN for x-days-later project
 * Generated file logEx.config on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 31/12/2017
 * Time: 09:09
 * Version: 1.0.0
 */
(function (angular) {
	'use strict';

	angular
		.module('xDaysLater')
		.config(config);

	config.$inject = [
		'logExProvider',
		'appConstant'
	];

	function config(logExProvider, appConstant) {
		logExProvider.enableLogging(appConstant.logs.enabled);
		logExProvider.overrideLogPrefix($className => {
			const $injector = angular.injector([
				'ng'
			]);
			const $filter   = $injector.get('$filter');
			const separator = ' >>';
			const format    = 'hh:mm:ss';
			const now       = $filter('date')(new Date(), format);
			return now.toString() + (!angular.isString($className) ? '' : '::' + $className) + separator;
		});
	}

}(window.angular));