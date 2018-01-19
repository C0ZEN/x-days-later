/**
 * Generated header by C0ZEN for x-days-later project
 * Generated file date.service on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 30/12/2017
 * Time: 14:11
 * Version: 1.0.0
 */
(function (angular) {
	'use strict';

	angular
		.module('xDaysLater')
		.factory('dateService', dateService);

	dateService.$inject = [
		'moment',
		'logService',
		'appConstant',
		'calculatedDateHistoryService'
	];

	function dateService(moment, logService, appConstant, calculatedDateHistoryService) {
		const data = {
			service : 'dateService',
			sunday  : 0,
			saturday: 6,
			one     : 1,
			two     : 2,
			ms      : 1000
		};

		const methods = {
			add,
			isSunday,
			isSaturday,
			isDay,
			isWeekend,
			readable,
			toTimestamp
		};

		return {
			addDays,
			toISOString,
			toString
		};

		function addDays($days, $date) {
			logService.fnCalledService(data.service, 'addDays');
			if ($date) {
				logService.service(data.service, 'original date is: ' + $date);
				calculatedDateHistoryService.reset();
				let days = $days;

				// Convert the date
				let date = moment($date, appConstant.moment.readableFormat, appConstant.lang.current);
				logService.service(data.service, 'moment original date is: ' + methods.readable(date));
				calculatedDateHistoryService.setOriginal(methods.toTimestamp(date));

				let weekend = null;
				let ferie   = null;

				// For each days
				for (let i = 0; i < days; i++) {

					// Add 1 day
					date = methods.add(date, data.one, 'days');

					// Check if this is the weekend
					if (methods.isWeekend(date)) {
						logService.service(data.service, 'isWeekend');
						weekend = {
							sunday: methods.toTimestamp(date)
						};
						days++;

						// If sunday
						if ('sunday' === weekend.type) {
							calculatedDateHistoryService.addWeekend(weekend);
						}
					}

					// Check if this is an fr exception
					else if (date.isFerie()) {
						logService.service(data.service, 'isFerie');
						ferie = {
							ferie: date.getFerie()
						};
						days++;
						calculatedDateHistoryService.addFerie(ferie);
					}
				}
				calculatedDateHistoryService.setCalculated(methods.toTimestamp(date));
				logService.service(data.service, 'final new date: ' + methods.readable(date));
				return methods.toTimestamp(date);
			}
			return null;
		}

		function add($date, $quantity, $type) {
			return moment($date).add($quantity, $type);
		}

		function isSunday($date) {
			return methods.isDay($date, data.sunday);
		}

		function isSaturday($date) {
			return methods.isDay($date, data.saturday);
		}

		function isDay($date, $day) {
			const day = moment($date).day();
			return day === $day;
		}

		function isWeekend($date) {
			return methods.isSunday($date) || methods.isSaturday($date);
		}

		function readable($date) {
			return moment($date).format(appConstant.moment.readableFormat);
		}

		function toISOString($date) {
			if ($date) {
				return moment($date).toISOString();
			}
			return moment().toISOString();
		}

		function toString($date) {
			if ($date) {
				return moment($date).toString();
			}
			return moment().toString();
		}

		function toTimestamp($date) {
			return moment($date).unix() * data.ms;
		}
	}

})(window.angular);