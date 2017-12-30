/**
 * Generated header by C0ZEN for 21-days project
 * Generated file interpolateProvider.config on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 30/12/2017
 * Time: 12:39
 * Version: 1.0.0
 */
(function (angular) {
	'use strict';

	angular
		.module('21days')
		.config(config);

	config.$inject = [
		'$interpolateProvider'
	];

	function config($interpolateProvider) {
		$interpolateProvider
			.startSymbol('[[')
			.endSymbol(']]');
	}

}(window.angular));