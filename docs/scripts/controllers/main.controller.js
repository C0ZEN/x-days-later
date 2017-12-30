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
		'dateService',
		'$window',
		'methods'
	];

	function mainController($scope, logService, dateService, $window, methods) {
		const vm = this;

		// Public data
		vm.data = {
			controller       : 'mainController',
			today            : new Date(),
			initialDate      : null,
			showDatepicker   : false,
			isHoverDatepicker: false
		};

		// Public methods
		vm.methods = {
			define21Date,
			onDatepickerClick,
			toggleDatepicker,
			onDatepickerEnter,
			onDatepickerFocus,
			onWindowClick,
			hideDatepicker,
			isDatepickerOpen,
			isHoverDatepicker
		};

		// Init
		logService.init(vm.data.controller);
		vm.calculatedDate = null;

		// Watch initialDate changes
		$scope.$watch('initialDate', () => {
			debugger;
			vm.methods.define21Date();
		});

		$window.addEventListener('click', vm.methods.onWindowClick);

		function define21Date() {
			logService.fnCalled('define21Date');
			vm.calculatedDate = dateService.add21days(vm.initialDate);
		}

		function onDatepickerClick($event) {
			logService.fnCalled('onDatepickerClick');
			$event.stopPropagation();
			vm.methods.toggleDatepicker();
		}

		function toggleDatepicker() {
			logService.fnCalled('toggleDatepicker');
			vm.data.showDatepicker = !vm.data.showDatepicker;
		}

		function onDatepickerEnter() {
			logService.fnCalled('onDatepickerEnter');
			vm.methods.toggleDatepicker();
		}

		function onDatepickerFocus($event) {
			logService.fnCalled('onDatepickerFocus');
			$event.stopPropagation();
			vm.methods.toggleDatepicker();
		}

		function onWindowClick() {
			logService.fnCalled('onWindowClick');
			vm.methods.hideDatepicker();
		}

		function hideDatepicker() {
			logService.fnCalled('hideDatepicker');
			if (vm.methods.isDatepickerOpen() && !vm.methods.isHoverDatepicker()) {
				vm.data.showDatepicker = false;
				methods.safeApply($scope);
			}
		}

		function isDatepickerOpen() {
			return vm.data.showDatepicker;
		}

		function isHoverDatepicker() {
			return vm.data.isHoverDatepicker;
		}
	}

})(window.angular);