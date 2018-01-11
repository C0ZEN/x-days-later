/**
 * Generated header by C0ZEN for x-days-later project
 * Generated file copy.service on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 30/12/2017
 * Time: 22:25
 * Version: 1.0.0
 */
(function (angular) {
	'use strict';

	angular
		.module('xDaysLater')
		.factory('copyService', copyService);

	copyService.$inject = [
		'$animate',
		'logService'
	];

	function copyService($animate, logService) {
		const data = {
			service: 'copyService'
		};

		return {
			show
		};

		function show() {
			logService.fnCalledService(data.service, 'show');
			const container = angular.element(document).find('copy-container');
			$animate.setClass(container, 'showing', 'hiding').then(() => {
				$animate.setClass(container, 'hiding', 'showing').then(() => {
					$animate.removeClass(container, 'hiding');
				});
			});
		}
	}

})(window.angular);