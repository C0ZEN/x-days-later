/**
 * Generated header by C0ZEN for 21-days project
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
		.module('21days')
		.config(config);

	config.$inject = [
		'$compileProvider',
		'appConstant'
	];

	function config($compileProvider, appConstant) {
		$compileProvider.debugInfoEnabled(appConstant.debugInfoEnabled);
	}

}(window.angular));