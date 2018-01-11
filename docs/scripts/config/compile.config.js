/**
 * Generated header by C0ZEN for x-days-later project
 * Generated file compile.config on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 30/12/2017
 * Time: 16:52
 * Version: 1.0.0
 */
(function (angular) {
	'use strict';

	angular
		.module('xDaysLater')
		.config(config);

	config.$inject = [
		'$compileProvider',
		'appConstant'
	];

	function config($compileProvider, appConstant) {
		$compileProvider.debugInfoEnabled(appConstant.debugInfoEnabled);
	}

}(window.angular));