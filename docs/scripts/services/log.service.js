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
		'appConstant',
		'$log'
	];

	function logService(appConstant, $log) {
		const methods = {
			isLogEnabled
		};

		$log = $log.getInstance('logService');

		return {
			init,
			log,
			fnCalled,
			service,
			fnCalledService
		};

		function init($target) {
			if (methods.isLogEnabled()) {
				$log.log('Init >>>', $target);
			}
		}

		function log($text) {
			if (methods.isLogEnabled()) {
				$log.info($text);
			}
		}

		function fnCalled($functionName) {
			if (methods.isLogEnabled()) {
				$log.log($functionName, 'called');
			}
		}

		function service($service, $log) {
			if (methods.isLogEnabled()) {
				$log.info($service, '>>>', $log);
			}
		}

		function fnCalledService($service, $functionName) {
			if (methods.isLogEnabled()) {
				$log.log($service, '>>>', $functionName, 'called');
			}
		}

		function isLogEnabled() {
			return appConstant.logs.enabled;
		}
	}

})(window.angular);