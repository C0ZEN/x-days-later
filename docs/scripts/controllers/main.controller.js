/**
 * Generated header by Geoffrey Testelin for 21-days project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey Testelin
 * Date: 29/12/2017
 * Time: 23:34
 * Version: 0.1.4
 */
(function (angular) {
	'use strict';

	angular
		.module('21days')
		.controller('mainController', mainController);

	mainController.$inject = [
		'logService',
		'dateService'
	];

	function mainController(logService, dateService) {
		const vm = this;

		// Public data
		vm.data = {
			controller    : 'mainController',
			today         : new Date(),
			initialDate   : null,
			showDatepicker: false
		};

		// Public methods
		vm.methods = {
			define21Date,
			onDatepickerClick,
			toggleDatepicker
		};

		// Init
		logService.init(vm.data.controller);
		vm.calculatedDate = null;

		function define21Date() {
			logService.fnCalled('define21Date');
			vm.calculatedDate = dateService.add21days(vm.initialDate);
		}

		function onDatepickerClick($event) {
			logService.fnCalled('onDatepickerClick');
			if ($event) {
				$event.stopPropagation();
			}
			vm.methods.toggleDatepicker();
		}

		function toggleDatepicker() {
			logService.fnCalled('toggleDatepicker');
			vm.data.showDatepicker = !vm.data.showDatepicker;
		}
	}

})(window.angular);