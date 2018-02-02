/**
 * Generated header by C0ZEN for x-days-later project
 * Generated file loader.initiator on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 31/12/2017
 * Time: 14:14
 * Version: 1.0.0
 */
(function (angular) {
	'use strict';

	angular
		.module('xDaysLater')
		.run(config);

	config.$inject = [
		'$animate',
		'$timeout'
	];

	function config($animate, $timeout) {
		$timeout(() => {
			const body = angular.element(document).find('body');
			body.removedClass('overflow-hidden');
			const loaderContainer = angular.element(document).find('loader-container');
			$animate.leave(loaderContainer, {
				addClass: 'hiding'
			});
		});
	}

}(window.angular));