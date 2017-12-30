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
		'$scope',
		'logService',
		'dateService'
	];

	function mainController($scope, logService, dateService) {
		const vm = this;

		// Public data
		vm.data = {
			controller      : 'mainController',
			today           : new Date(),
			initialDate     : null,
			initialDateError: false,
			showDatepicker  : false
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

		// Watch the initial date change
		// To display UI message when an error occurred
		$scope.$watch('initialDate', $value => {
			logService.log($value);
			try {
				vm.data.initialDate = new Date($value);
			}
			catch ($e) {
			}
			logService.log(vm.data.initialDate);

			if (!vm.data.initialDate) {
				vm.data.initialDateError = 'This is not a valid date';
			}
			else {
				vm.data.initialDateError = false;
			}
		});

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