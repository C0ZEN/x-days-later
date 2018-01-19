/**
 * Generated header by Geoffrey Testelin for x-days-later project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey Testelin
 * Date: 19/01/2018
 * Time: 11:08
 * Version: 0.10.7
 *
 * @ngdoc service
 * @name xDaysLater.maintenanceService
 * @description
 *
 */
(function (angular) {
	'use strict';

	angular
		.module('xDaysLater')
		.factory('maintenanceService', maintenanceService);

	maintenanceService.$inject = [
		'appConstant'
	];

	function maintenanceService(appConstant) {
		return {
			isInMaintenance
		};

		function isInMaintenance() {
			return angular.copy(appConstant.maintenance.active);
		}
	}

})(window.angular);