/**
 * Generated header by C0ZEN for 21-days project
 * Generated file keyboard.service on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 30/12/2017
 * Time: 16:42
 * Version: 1.0.0
 */
(function (angular) {
	'use strict';

	angular
		.module('21days')
		.factory('keyboardService', keyboardService);

	function keyboardService() {
		const methods = {
			analyzeKey
		};

		return {
			bindKeyDown
		};

		function bindKeyDown($scope, $element, $attrs, $key, $name) {
			$element.bind('keydown keypress', $event => {
				if (angular.isArray($key)) {
					angular.forEach($key, key => {
						methods.analyzeKey($scope, $attrs, $name, $event, key);
					});
				}
				else {
					methods.analyzeKey($scope, $attrs, $name, $event, $key);
				}
			});
		}

		function analyzeKey($scope, $attrs, $name, $event, $key) {
			if ($event.keyCode === $key) {
				$event.preventDefault();
				$event.stopPropagation();
				$scope.$apply(() => {
					$scope.$eval($attrs[$name]);
				});
			}
		}
	}

})(window.angular);