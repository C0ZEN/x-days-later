/**
 * Generated header by C0ZEN for x-days-later project
 * Generated file calculatedDateHistory.service on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 31/12/2017
 * Time: 10:41
 * Version: 1.0.0
 */
(function (angular) {
	'use strict';

	angular
		.module('xDaysLater')
		.factory('calculatedDateHistoryService', calculatedDateHistoryService);

	calculatedDateHistoryService.$inject = [
		'$rootScope',
		'logService'
	];

	function calculatedDateHistoryService($rootScope, logService) {
		const data = {
			service: 'calculatedDateHistoryService',
			history: null
		};

		const methods = {
			newException,
			notify
		};

		return {
			subscribe,
			reset,
			setOriginal,
			setCalculated,
			setFinal,
			addFerie,
			addSunday,
			addSaturday
		};

		function subscribe($scope, $callback) {
			const handler = $rootScope.$on(data.service + ':newHistory', () => {
				$callback({
					newHistory: data.history
				});
			});
			$scope.$on('$destroy', handler);
		}

		function reset() {
			logService.service(data.service, 'reset');
			data.history = {
				exception         : false,
				exceptionTriggered: 0,
				exceptionList     : []
			};
		}

		function setOriginal($date) {
			logService.service(data.service, 'setOriginal');
			data.history.original = {
				date: $date
			};
		}

		function setCalculated($date) {
			logService.service(data.service, 'setCalculated');
			data.history.calculated = {
				date: $date
			};
		}

		/**
		 * Add a ferie exception
		 * @param {object} $data > Object with data (dateBefore, dateAfter, ferie)
		 */
		function addFerie($data) {
			logService.service(data.service, 'addFerie');
			$data.type = 'ferie';
			methods.newException($data);
		}

		function newException($data) {
			data.history.exception = true;
			data.history.exceptionTriggered++;
			data.history.exceptionList.push($data);
		}

		function notify() {
			$rootScope.$emit(data.service + ':newHistory');
		}

		function addSunday($data) {
			logService.service(data.service, 'sunday');
			methods.newException($data);
		}

		function addSaturday($data) {
			logService.service(data.service, 'saturday');
			methods.newException($data);
		}
	}

})(window.angular);