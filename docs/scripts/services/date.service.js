/**
 * Generated header by C0ZEN for 21-days project
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
		.module('21days')
		.factory('dateService', dateService);

	dateService.$inject = [
		'moment',
		'logService',
		'appConstant'
	];

	function dateService(moment, logService, appConstant) {
		const data = {
			service : 'dateService',
			days    : 21,
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
			setNextDayAfterWeekend,
			weekendAndExceptionsStuff,
			readable,
			toTimestamp
		};

		return {
			add21days,
			toISOString,
			toString
		};

		function add21days($date) {
			logService.fnCalledService(data.service, 'add21days');
			if ($date) {

				// Convert the date
				logService.service(data.service, 'original date is: ' + $date);
				let date = moment($date, appConstant.moment.readableFormat, appConstant.lang.current);
				logService.service(data.service, 'moment original date is: ' + methods.readable(date));

				// Add 21 days
				date = methods.add(date, data.days, 'days');
				logService.service(data.service, 'new +21 days date is: ' + methods.readable(date));

				return methods.weekendAndExceptionsStuff(date);
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

		function setNextDayAfterWeekend($date) {
			if (methods.isSunday($date)) {
				return methods.add($date, data.one, 'days');
			}
			return methods.add($date, data.two, 'days');
		}

		function weekendAndExceptionsStuff($date) {
			let date = $date;

			// Check if this is the weekend
			if (methods.isWeekend(date)) {
				logService.service(data.service, 'isWeekend');

				// Set the next monday
				date = methods.setNextDayAfterWeekend(date);
				logService.service(data.service, 'new date after weekend: ' + methods.readable(date));
			}

			// Check if this is an fr exception
			if (date.isFerie()) {
				logService.service(data.service, 'isFerie');

				// Add one day
				date = methods.add(date, data.one, 'days');
				logService.service(data.service, 'new date after exception day: ' + methods.readable(date));
				date = weekendAndExceptionsStuff(date);
			}
			return methods.toString(date);
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