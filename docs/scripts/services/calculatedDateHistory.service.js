/**
 * Generated header by C0ZEN for 21-days project
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
		.module('21days')
		.factory('calculatedDateHistoryService', calculatedDateHistoryService);

	calculatedDateHistoryService.$inject = [
		'$rootScope'
	];

	function calculatedDateHistoryService($rootScope) {
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
			addWeekend,
			addFerie
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
			data.history = {
				exception         : false,
				exceptionTriggered: 0,
				exceptionList     : []
			};
		}

		function setOriginal($date) {
			data.history.original = {
				date: $date
			};
		}

		function setCalculated($date) {
			data.history.calculated = {
				date: $date
			};
		}

		function setFinal($date) {
			data.history.final = {
				date: $date
			};
		}

		/**
		 * Add a weekend exception
		 * @param {object} $data > Object with data (dateBefore, dateAfter, type (sunday, saturday))
		 */
		function addWeekend($data) {
			methods.newException($data);
		}

		/**
		 * Add a ferie exception
		 * @param {object} $data > Object with data (dateBefore, dateAfter)
		 */
		function addFerie($data) {
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
	}

})(window.angular);