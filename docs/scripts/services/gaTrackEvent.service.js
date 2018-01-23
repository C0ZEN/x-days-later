/**
 * Generated header by Geoffrey Testelin for x-days-later project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey Testelin
 * Date: 23/01/2018
 * Time: 18:34
 * Version: 0.13.6
 *
 * @ngdoc service
 * @name xDaysLater.gaTrackEventService
 * @description
 *
 */
(function (angular) {
	'use strict';

	angular
		.module('xDaysLater')
		.factory('gaTrackEventService', gaTrackEventService);

	gaTrackEventService.$inject = [
		'Analytics',
		'_'
	];

	function gaTrackEventService(Analytics, _) {
		return {
			newEvent
		};

		function newEvent($event) {
			const event = $event;
			if (_.has(event, 'category') && _.has(event, 'action') && _.has(event, 'label')) {
				event.nonInteraction = _.isBoolean(event.nonInteraction) ? event.nonInteraction : false;
				if (event.nonInteraction) {
					Analytics.trackEvent(event.category, event.action, event.label, event.value, true);
				}
				else if (_.has(event, 'value')) {
					Analytics.trackEvent(event.category, event.action, event.label, event.value);
				}
				else {
					Analytics.trackEvent(event.category, event.action, event.label);
				}
			}
		}
	}

})(window.angular);