/**
 * Generated header by Cozen for x-days-later project
 * Generated file maintenance.initiator on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 19/01/2018
 * Time: 11:16
 * Version: 0.10.7
 */
(function (angular) {
	'use strict';

	angular
		.module('xDaysLater')
		.run(config);

	config.$inject = [
		'maintenanceService'
	];

	function config(maintenanceService) {
		console.info('Maintenance status:', maintenanceService.isInMaintenance() ? 'on' : 'off');
	}

}(window.angular));
