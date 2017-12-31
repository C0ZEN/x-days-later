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
		'$log'
	];

	function logService($log) {
		const data = {
			logInstance: $log.getInstance('logService')
		};

		return {
			init,
			log,
			fnCalled,
			service,
			fnCalledService
		};

		function init($target) {
			data.logInstance.log('Init >>>', $target);
		}

		function log($text) {
			data.logInstance.info($text);
		}

		function fnCalled($functionName) {
			data.logInstance.log($functionName, 'called');
		}

		function service($service, $text) {
			data.logInstance.info($service, '>>>', $text);
		}

		function fnCalledService($service, $functionName) {
			data.logInstance.log($service, '>>>', $functionName, 'called');
		}
	}

})(window.angular);