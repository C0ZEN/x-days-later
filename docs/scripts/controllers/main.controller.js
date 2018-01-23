/**
 * Generated header by Geoffrey Testelin for x-days-later project
 * Created with: x-days-later
 *
 * Created by: Geoffrey Testelin
 * Date: 29/12/2017
 * Time: 23:34
 * Version: 0.1.4
 */
(function (angular) {
	'use strict';

	angular
		.module('xDaysLater')
		.controller('mainController', mainController);

	mainController.$inject = [
		'$scope',
		'logService',
		'dateService',
		'$window',
		'$timeout',
		'copyService',
		'calculatedDateHistoryService',
		'maintenanceService',
		'localStorageService',
		'gaTrackEventService'
	];

	function mainController($scope, logService, dateService, $window, $timeout, copyService, calculatedDateHistoryService, maintenanceService, localStorageService, gaTrackEventService) {
		const vm = this;

		// Internal data
		const data = {
			days: 21
		};

		// Internal methods
		const methods = {
			execHideDatePicker
		};

		// Public data
		vm.data = {
			controller       : 'mainController',
			today            : dateService.toString(),
			initialDate      : null,
			showDatepicker   : false,
			isHoverDatepicker: false,
			history          : null,
			xDays            : localStorageService.get('days') || data.days,
			maintenance      : maintenanceService.isInMaintenance()
		};

		// Public methods
		vm.methods = {
			defineDate,
			onDatepickerClick,
			toggleDatepicker,
			onDatepickerEnter,
			onDatepickerFocus,
			onWindowClick,
			hideDatepicker,
			isDatepickerOpen,
			isHoverDatepicker,
			onCopySuccess,
			onInitialDateChange,
			onDaysInputChange
		};

		// Init
		logService.init(vm.data.controller);
		vm.calculatedDate = null;

		// Watch initialDate changes
		$scope.$watch('initialDate', () => {
			$timeout(() => {
				vm.methods.defineDate();
			});
		});

		// Listen window click
		$window.addEventListener('click', vm.methods.onWindowClick);

		// Subscribe to calculated date history
		calculatedDateHistoryService.subscribe($scope, $data => {
			vm.data.history = $data.newHistory;
		});

		function defineDate() {
			logService.fnCalled('defineDate');
			vm.calculatedDate = dateService.addDays(vm.data.xDays, vm.initialDate);
		}

		function onDatepickerClick($event) {
			logService.fnCalled('onDatepickerClick');
			$event.stopPropagation();
			vm.methods.toggleDatepicker();
		}

		function toggleDatepicker() {
			logService.fnCalled('toggleDatepicker');
			vm.data.showDatepicker = !vm.data.showDatepicker;
			vm.methods.defineDate();
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

		function hideDatepicker($force) {
			logService.fnCalled('hideDatepicker');
			if (true === $force) {
				methods.execHideDatePicker();
			}
			else if (vm.methods.isDatepickerOpen() && !vm.methods.isHoverDatepicker()) {
				methods.execHideDatePicker();
			}
		}

		function isDatepickerOpen() {
			return vm.data.showDatepicker;
		}

		function isHoverDatepicker() {
			return vm.data.isHoverDatepicker;
		}

		function onCopySuccess() {
			logService.fnCalled('onCopySuccess');
			copyService.show();
			gaTrackEventService.newEvent({
				category: 'Button',
				action  : 'Click',
				label   : 'Copy calculated date'
			});
		}

		function onInitialDateChange() {
			logService.fnCalled('onInitialDateChange');
			$timeout(() => {
				vm.methods.hideDatepicker(true);
				vm.methods.defineDate();
			});
		}

		function execHideDatePicker() {
			vm.data.showDatepicker = false;
			vm.methods.defineDate();
			Methods.safeApply($scope);
		}

		function onDaysInputChange() {
			$timeout(() => {
				vm.methods.defineDate();
				localStorageService.set('days', vm.data.xDays);
			});
		}
	}

})(window.angular);