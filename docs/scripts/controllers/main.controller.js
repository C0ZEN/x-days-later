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
		'logService'
	];

	function mainController($scope, logService) {
		const vm = this;

		vm.data = {
			controller: 'mainController',
			today     : new Date()
		};

		vm.methods = {
			define21Date
		};

		logService.init(vm.data.controller);

		vm.calculatedDate = null;

		// Watch the initial date change
		// To display UI message when an error occurred
		$scope.$watch('vm.initialDate', $value => {
			logService.log($value);
			try {
				vm.initialDate = new Date($value);
			}
			catch ($e) {
			}
			logService.log(vm.initialDate);

			if (!vm.initialDate) {
				vm.data.initialDateError = 'This is not a valid date';
			}
			else {
				vm.data.initialDateError = false;
			}
		});

		$scope.$watch('initialDate', $value => {
			logService.log($value);
			try {
				vm.initialDate = new Date($value);
			}
			catch ($e) {
			}
			logService.log(vm.initialDate);

			if (!vm.initialDate) {
				vm.data.initialDateError = 'This is not a valid date';
			}
			else {
				vm.data.initialDateError = false;
			}
		});

		function define21Date() {
			logService.fnCalled('define21Date');
		}
	}

})(window.angular);