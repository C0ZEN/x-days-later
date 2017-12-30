/**
 * Generated header by C0ZEN for 21-days project
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
		.module('21days')
		.factory('copyService', copyService);

	copyService.$inject = [
		'$document',
		'$timeout'
	];

	function copyService($document, $timeout) {
		const data = {
			timeout: 500
		};

		return {
			show
		};

		function show() {
			angular.element($document).append('<copy-container><copied>Copier !</copied></copy-container>');
			$timeout(() => {
				angular.element($document).find('copy-container').remove();
			}, data.timeout);
		}
	}

})(window.angular);