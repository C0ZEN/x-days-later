/**
 * Generated header by C0ZEN for 21-days project
 * Generated file log.service on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 30/12/2017
 * Time: 11:31
 * Version: 1.0.0
 */
(function (angular) {
	'use strict';

	angular
		.module('21days')
		.factory('logService', logService);

	logService.$inject = [
		'appConstant'
	];

	function logService(appConstant) {
		const methods = {
			isLogEnabled
		};

		return {
			init,
			log,
			fnCalled
		};

		function init($target) {
			if (methods.isLogEnabled()) {
				console.info('Init >>>', $target);
			}
		}

		function log($text) {
			if (methods.isLogEnabled()) {
				console.log($text);
			}
		}

		function fnCalled($functionName) {
			if (methods.isLogEnabled()) {
				console.log($functionName, 'called');
			}
		}

		function isLogEnabled() {
			return appConstant.logs.enabled;
		}
	}

})(window.angular);