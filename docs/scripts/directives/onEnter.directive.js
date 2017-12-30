/**
 * Generated header by C0ZEN for 21-days project
 * Generated file onEnter.directive on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 30/12/2017
 * Time: 14:56
 * Version: 1.0.0
 */
(function (angular) {
	'use strict';

	angular
		.module('21days')
		.directive('onEnter', onEnter);

	onEnter.$inject = [
		'keyboardService'
	];

	function onEnter(keyboardService) {
		const data = {
			enter: 13
		};

		return {
			link,
			restrict: 'A'
		};

		function link(scope, element, attrs) {
			keyboardService.bindKeyDown(scope, element, attrs, data.enter, 'onEnter');
		}
	}

})(window.angular);