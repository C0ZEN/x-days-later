/**
 * Generated header by C0ZEN for x-days-later project
 * Generated file language.initiator on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 30/12/2017
 * Time: 11:06
 * Version: 1.0.0
 */
(function (angular) {
	'use strict';

	angular
		.module('xDaysLater')
		.run(config);

	config.$inject = [
		'tmhDynamicLocale',
		'moment',
		'appConstant'
	];

	function config(tmhDynamicLocale, moment, appConstant) {
		tmhDynamicLocale.set(appConstant.lang.current);
		moment.locale(appConstant.lang.current);
		console.info('x-days-later lang:', appConstant.lang.current);
	}

}(window.angular));