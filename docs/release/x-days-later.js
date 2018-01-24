'use strict';

/* start:concat-scripts */
(function (angular) {
	'use strict';

	angular.module('xDaysLater', ['720kb.datepicker', 'ngclipboard', 'ngAnimate', 'log.ex.uo', 'LocalStorageModule', 'angular-google-analytics']);
})(window.angular);

(function (angular) {
	'use strict';

	angular.module('xDaysLater').config(config);

	config.$inject = ['AnalyticsProvider', 'appConstant'];

	function config(AnalyticsProvider, appConstant) {
		AnalyticsProvider.setAccount(appConstant.analytics.account);
	}
})(window.angular);
(function (angular) {
	'use strict';

	angular.module('xDaysLater').config(config);

	config.$inject = ['$compileProvider', 'appConstant'];

	function config($compileProvider, appConstant) {
		$compileProvider.debugInfoEnabled(appConstant.debugInfoEnabled);
	}
})(window.angular);
(function (angular) {
	'use strict';

	angular.module('xDaysLater').config(config);

	config.$inject = ['localStorageServiceProvider'];

	function config(localStorageServiceProvider) {
		localStorageServiceProvider.setPrefix('xdl').setDefaultToCookie(true).setNotify(false, false);
	}
})(window.angular);
(function (angular) {
	'use strict';

	angular.module('xDaysLater').config(config);

	config.$inject = ['logExProvider', 'appConstant'];

	function config(logExProvider, appConstant) {
		logExProvider.enableLogging(appConstant.logs.enabled);
		logExProvider.overrideLogPrefix(function ($className) {
			var $injector = angular.injector(['ng']);
			var $filter = $injector.get('$filter');
			var separator = ' >>';
			var format = 'hh:mm:ss';
			var now = $filter('date')(new Date(), format);
			return now.toString() + (!angular.isString($className) ? '' : '::' + $className) + separator;
		});
	}
})(window.angular);

(function (angular) {
	'use strict';

	angular.module('xDaysLater').constant('appConstant', {
		logs: {
			enabled: false
		},
		lang: {
			current: 'fr'
		},
		debugInfoEnabled: false,
		moment: {
			readableFormat: 'dddd DD MMMM YYYY'
		},
		maintenance: {
			active: false
		},
		analytics: {
			account: 'UA-60282719-6'
		}
	});
})(window.angular);
(function (angular) {
	'use strict';

	angular.module('xDaysLater').constant('moment', moment).constant('_', _);
})(window.angular);

(function (angular) {
	'use strict';

	angular.module('xDaysLater').controller('mainController', mainController);

	mainController.$inject = ['$scope', 'logService', 'dateService', '$window', '$timeout', 'copyService', 'calculatedDateHistoryService', 'maintenanceService', 'localStorageService', 'gaTrackEventService'];

	function mainController($scope, logService, dateService, $window, $timeout, copyService, calculatedDateHistoryService, maintenanceService, localStorageService, gaTrackEventService) {
		var vm = this;

		// Internal data
		var data = {
			days: 21
		};

		// Internal methods
		var methods = {
			execHideDatePicker: execHideDatePicker
		};

		// Public data
		vm.data = {
			controller: 'mainController',
			today: dateService.toString(),
			initialDate: null,
			showDatepicker: false,
			isHoverDatepicker: false,
			history: null,
			xDays: localStorageService.get('days') || data.days,
			maintenance: maintenanceService.isInMaintenance()
		};

		// Public methods
		vm.methods = {
			defineDate: defineDate,
			onDatepickerClick: onDatepickerClick,
			toggleDatepicker: toggleDatepicker,
			onDatepickerEnter: onDatepickerEnter,
			onDatepickerFocus: onDatepickerFocus,
			onWindowClick: onWindowClick,
			hideDatepicker: hideDatepicker,
			isDatepickerOpen: isDatepickerOpen,
			isHoverDatepicker: isHoverDatepicker,
			onCopySuccess: onCopySuccess,
			onInitialDateChange: onInitialDateChange,
			onDaysInputChange: onDaysInputChange
		};

		// Init
		logService.init(vm.data.controller);
		vm.calculatedDate = null;

		// Watch initialDate changes
		$scope.$watch('initialDate', function () {
			$timeout(function () {
				vm.methods.defineDate();
			});
		});

		// Listen window click
		$window.addEventListener('click', vm.methods.onWindowClick);

		// Subscribe to calculated date history
		calculatedDateHistoryService.subscribe($scope, function ($data) {
			vm.data.history = $data.newHistory;
		});

		function defineDate() {
			logService.fnCalled('defineDate');
			vm.calculatedDate = dateService.addDays(vm.data.xDays, vm.initialDate);
			gaTrackEventService.newEvent({
				category: 'Model',
				action: 'Change',
				label: 'Calculated date',
				value: vm.calculatedDate
			});
		}

		function onDatepickerClick($event) {
			logService.fnCalled('onDatepickerClick');
			$event.stopPropagation();
			vm.methods.toggleDatepicker();
		}

		function toggleDatepicker() {
			logService.fnCalled('toggleDatepicker');
			vm.data.showDatepicker = !vm.data.showDatepicker;
			if (vm.data.showDatepicker) {
				gaTrackEventService.newEvent({
					category: 'DatePicker',
					action: 'Show',
					label: 'Initial date'
				});
			}
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
			} else if (vm.methods.isDatepickerOpen() && !vm.methods.isHoverDatepicker()) {
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
				action: 'Click',
				label: 'Copy calculated date'
			});
		}

		function onInitialDateChange() {
			logService.fnCalled('onInitialDateChange');
			$timeout(function () {
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
			$timeout(function () {
				vm.methods.defineDate();
				localStorageService.set('days', vm.data.xDays);
			});
		}
	}
})(window.angular);

(function (angular) {
	'use strict';

	angular.module('xDaysLater').directive('onEnter', onEnter);

	onEnter.$inject = ['keyboardService'];

	function onEnter(keyboardService) {
		var data = {
			enter: 13
		};

		return {
			link: link,
			restrict: 'A'
		};

		function link(scope, element, attrs) {
			keyboardService.bindKeyDown(scope, element, attrs, data.enter, 'onEnter');
		}
	}
})(window.angular);

(function (angular) {
	'use strict';

	angular.module('xDaysLater').run(config);

	function config() {
		console.info('Sitemap:', 'https://c0zen.github.io/x-days-later/sitemap.xml');
		console.info('Feed:', 'https://c0zen.github.io/x-days-later/feed.xml');
	}
})(window.angular);
(function (angular) {
	'use strict';

	angular.module('xDaysLater').run(config);

	config.$inject = ['moment', 'appConstant'];

	function config(moment, appConstant) {
		moment.locale(appConstant.lang.current);
		console.info('Lang:', appConstant.lang.current);
	}
})(window.angular);
(function (angular) {
	'use strict';

	angular.module('xDaysLater').run(config);

	config.$inject = ['$animate', '$timeout'];

	function config($animate, $timeout) {
		$timeout(function () {
			var loaderContainer = angular.element(document).find('loader-container');
			$animate.leave(loaderContainer, {
				addClass: 'hiding'
			});
		});
	}
})(window.angular);
(function (angular) {
	'use strict';

	angular.module('xDaysLater').run(config);

	config.$inject = ['maintenanceService'];

	function config(maintenanceService) {
		console.info('Maintenance status:', maintenanceService.isInMaintenance() ? 'on' : 'off');
	}
})(window.angular);

(function (angular) {
	'use strict';

	angular.module('xDaysLater').factory('calculatedDateHistoryService', calculatedDateHistoryService);

	calculatedDateHistoryService.$inject = ['$rootScope', 'logService'];

	function calculatedDateHistoryService($rootScope, logService) {
		var data = {
			service: 'calculatedDateHistoryService',
			history: null
		};

		var methods = {
			newException: newException,
			notify: notify
		};

		return {
			subscribe: subscribe,
			reset: reset,
			setOriginal: setOriginal,
			setCalculated: setCalculated,
			addFerie: addFerie,
			addWeekend: addWeekend,
			addSunday: addSunday
		};

		function subscribe($scope, $callback) {
			var handler = $rootScope.$on(data.service + ':newHistory', function () {
				$callback({
					newHistory: data.history
				});
			});
			$scope.$on('$destroy', handler);
		}

		function reset() {
			logService.service(data.service, 'reset');
			data.history = {
				exception: false,
				exceptionTriggered: 0,
				exceptionList: []
			};
		}

		function setOriginal($date) {
			logService.service(data.service, 'setOriginal');
			data.history.original = {
				date: $date
			};
		}

		function setCalculated($date) {
			logService.service(data.service, 'setCalculated');
			data.history.calculated = {
				date: $date
			};
			methods.notify();
		}

		/**
   * Add a ferie exception
   * @param {object} $data > Object with data (dateBefore, dateAfter, ferie)
   */
		function addFerie($data) {
			logService.service(data.service, 'addFerie');
			methods.newException($data);
		}

		function newException($data) {
			data.history.exception = true;
			data.history.exceptionTriggered++;
			data.history.exceptionList.push($data);
		}

		function notify() {
			$rootScope.$emit(data.service + ':newHistory');
		}

		function addWeekend($data) {
			logService.service(data.service, 'weekend');
			methods.newException($data);
		}

		function addSunday($data) {
			logService.service(data.service, 'sunday');
			methods.newException($data);
		}
	}
})(window.angular);
(function (angular) {
	'use strict';

	angular.module('xDaysLater').factory('copyService', copyService);

	copyService.$inject = ['$animate', 'logService'];

	function copyService($animate, logService) {
		var data = {
			service: 'copyService'
		};

		return {
			show: show
		};

		function show() {
			logService.fnCalledService(data.service, 'show');
			var container = angular.element(document).find('copy-container');
			$animate.setClass(container, 'showing', 'hiding').then(function () {
				$animate.setClass(container, 'hiding', 'showing').then(function () {
					$animate.removeClass(container, 'hiding');
				});
			});
		}
	}
})(window.angular);
(function (angular) {
	'use strict';

	angular.module('xDaysLater').factory('dateService', dateService);

	dateService.$inject = ['moment', 'logService', 'appConstant', 'calculatedDateHistoryService'];

	function dateService(moment, logService, appConstant, calculatedDateHistoryService) {
		var data = {
			service: 'dateService',
			sunday: 0,
			saturday: 6,
			one: 1,
			two: 2,
			ms: 1000
		};

		var methods = {
			add: add,
			isSunday: isSunday,
			isSaturday: isSaturday,
			isDay: isDay,
			isWeekend: isWeekend,
			readable: readable,
			toTimestamp: toTimestamp
		};

		return {
			addDays: addDays,
			toISOString: toISOString,
			toString: toString
		};

		function addDays($days, $date) {
			logService.fnCalledService(data.service, 'addDays');
			if ($date) {
				logService.service(data.service, 'original date is: ' + $date);
				calculatedDateHistoryService.reset();
				var days = $days;

				// Convert the date
				var date = moment($date, appConstant.moment.readableFormat, appConstant.lang.current);
				logService.service(data.service, 'moment original date is: ' + methods.readable(date));
				calculatedDateHistoryService.setOriginal(methods.toTimestamp(date));

				var weekend = null;
				var ferie = null;

				// For each days
				for (var i = 0; i < days; i++) {

					// Add 1 day
					date = methods.add(date, data.one, 'days');

					// Check if this is the weekend
					if (methods.isWeekend(date)) {
						logService.service(data.service, 'isWeekend');
						days++;

						// If sunday
						if (methods.isSaturday(date)) {
							weekend = {
								saturday: methods.toTimestamp(date),
								type: 'weekend'
							};
							calculatedDateHistoryService.addWeekend(weekend);
						} else if (0 === i && methods.isSunday(date)) {
							weekend = {
								sunday: methods.toTimestamp(date),
								type: 'sunday'
							};
							calculatedDateHistoryService.addSunday(weekend);
						}
					}

					// Check if this is an fr exception
					else if (date.isFerie()) {
							logService.service(data.service, 'isFerie');
							ferie = {
								ferie: date.getFerie(),
								type: 'ferie'
							};
							days++;
							calculatedDateHistoryService.addFerie(ferie);
						}
				}
				calculatedDateHistoryService.setCalculated(methods.toTimestamp(date));
				logService.service(data.service, 'final new date: ' + methods.readable(date));
				return methods.toTimestamp(date);
			}
			return null;
		}

		function add($date, $quantity, $type) {
			return moment($date).add($quantity, $type);
		}

		function isSunday($date) {
			return methods.isDay($date, data.sunday);
		}

		function isSaturday($date) {
			return methods.isDay($date, data.saturday);
		}

		function isDay($date, $day) {
			var day = moment($date).day();
			return day === $day;
		}

		function isWeekend($date) {
			return methods.isSunday($date) || methods.isSaturday($date);
		}

		function readable($date) {
			return moment($date).format(appConstant.moment.readableFormat);
		}

		function toISOString($date) {
			if ($date) {
				return moment($date).toISOString();
			}
			return moment().toISOString();
		}

		function toString($date) {
			if ($date) {
				return moment($date).toString();
			}
			return moment().toString();
		}

		function toTimestamp($date) {
			return moment($date).unix() * data.ms;
		}
	}
})(window.angular);
(function (angular) {
	'use strict';

	angular.module('xDaysLater').factory('gaTrackEventService', gaTrackEventService);

	gaTrackEventService.$inject = ['Analytics', '_'];

	function gaTrackEventService(Analytics, _) {
		return {
			newEvent: newEvent
		};

		function newEvent($event) {
			var event = $event;
			if (_.has(event, 'category') && _.has(event, 'action') && _.has(event, 'label')) {
				event.nonInteraction = _.isBoolean(event.nonInteraction) ? event.nonInteraction : false;
				if (event.nonInteraction) {
					Analytics.trackEvent(event.category, event.action, event.label, event.value, true);
				} else if (_.has(event, 'value')) {
					Analytics.trackEvent(event.category, event.action, event.label, event.value);
				} else {
					Analytics.trackEvent(event.category, event.action, event.label);
				}
			}
		}
	}
})(window.angular);
(function (angular) {
	'use strict';

	angular.module('xDaysLater').factory('keyboardService', keyboardService);

	function keyboardService() {
		var methods = {
			analyzeKey: analyzeKey
		};

		return {
			bindKeyDown: bindKeyDown
		};

		function bindKeyDown($scope, $element, $attrs, $key, $name) {
			$element.bind('keydown keypress', function ($event) {
				if (angular.isArray($key)) {
					angular.forEach($key, function (key) {
						methods.analyzeKey($scope, $attrs, $name, $event, key);
					});
				} else {
					methods.analyzeKey($scope, $attrs, $name, $event, $key);
				}
			});
		}

		function analyzeKey($scope, $attrs, $name, $event, $key) {
			if ($event.keyCode === $key) {
				$event.preventDefault();
				$event.stopPropagation();
				$scope.$apply(function () {
					$scope.$eval($attrs[$name]);
				});
			}
		}
	}
})(window.angular);
(function (angular) {
	'use strict';

	angular.module('xDaysLater').factory('logService', logService);

	logService.$inject = ['$log'];

	function logService($log) {
		return {
			init: init,
			log: log,
			fnCalled: fnCalled,
			service: service,
			fnCalledService: fnCalledService
		};

		function init($target) {
			$log.log('Init >>>', $target);
		}

		function log($text) {
			$log.info($text);
		}

		function fnCalled($functionName) {
			$log.log($functionName, 'called');
		}

		function service($service, $text) {
			$log.info($service, '>>>', $text);
		}

		function fnCalledService($service, $functionName) {
			$log.log($service, '>>>', $functionName, 'called');
		}
	}
})(window.angular);
(function (angular) {
	'use strict';

	angular.module('xDaysLater').factory('maintenanceService', maintenanceService);

	maintenanceService.$inject = ['appConstant'];

	function maintenanceService(appConstant) {
		return {
			isInMaintenance: isInMaintenance
		};

		function isInMaintenance() {
			return angular.copy(appConstant.maintenance.active);
		}
	}
})(window.angular);
'use strict';

/* eslint no-unused-vars:"off" */
var Methods = {
	safeApply: safeApply
};

// Force a digest in angular app safely
function safeApply(scope, fn) {
	var phase = scope.$root;
	if (phase) {
		phase = phase.$$phase;
		if ('$apply' === phase || '$digest' === phase) {
			if (fn && 'function' === typeof fn) {
				fn();
			}
		} else {
			scope.$apply(fn);
		}
	}
}
(function (angular) {
	'use strict';

	angular.module('xDaysLater').run(config);

	config.$inject = [];

	function config() {
		console.info('Current version: 0.16.8');
	}
})(window.angular);

/* end:concat-scripts */
//# sourceMappingURL=scripts.js.map
//# sourceMappingURL=x-days-later.js.map
