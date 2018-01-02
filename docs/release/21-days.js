'use strict';

/* start:concat-scripts */
(function (angular) {
	'use strict';

	angular.module('21days', ['tmh.dynamicLocale', '720kb.datepicker', 'ngclipboard', 'ngAnimate', 'log.ex.uo']);
})(window.angular);

(function (angular) {
	'use strict';

	angular.module('21days').config(config);

	config.$inject = ['$compileProvider', 'appConstant'];

	function config($compileProvider, appConstant) {
		$compileProvider.debugInfoEnabled(appConstant.debugInfoEnabled);
	}
})(window.angular);
(function (angular) {
	'use strict';

	angular.module('21days').config(config);

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

	angular.module('21days').config(config);

	config.$inject = ['tmhDynamicLocaleProvider'];

	function config(tmhDynamicLocaleProvider) {
		tmhDynamicLocaleProvider.localeLocationPattern('/21-days/bower_components/angular-i18n/angular-locale_{{locale}}.js').defaultLocale('fr');
	}
})(window.angular);

(function (angular) {
	'use strict';

	angular.module('21days').constant('appConstant', {
		logs: {
			enabled: false
		},
		lang: {
			current: 'fr'
		},
		debugInfoEnabled: false,
		moment: {
			readableFormat: 'dddd DD MMMM YYYY'
		}
	});
})(window.angular);
(function (angular) {
	'use strict';

	angular.module('21days').constant('moment', moment);
})(window.angular);

(function (angular) {
	'use strict';

	angular.module('21days').controller('mainController', mainController);

	mainController.$inject = ['$scope', 'logService', 'dateService', '$window', '$timeout', 'copyService', 'calculatedDateHistoryService'];

	function mainController($scope, logService, dateService, $window, $timeout, copyService, calculatedDateHistoryService) {
		var vm = this;

		// Public data
		vm.data = {
			controller: 'mainController',
			today: dateService.toString(),
			initialDate: null,
			showDatepicker: false,
			isHoverDatepicker: false,
			history: null
		};

		// Public methods
		vm.methods = {
			define21Date: define21Date,
			onDatepickerClick: onDatepickerClick,
			toggleDatepicker: toggleDatepicker,
			onDatepickerEnter: onDatepickerEnter,
			onDatepickerFocus: onDatepickerFocus,
			onWindowClick: onWindowClick,
			hideDatepicker: hideDatepicker,
			isDatepickerOpen: isDatepickerOpen,
			isHoverDatepicker: isHoverDatepicker,
			onCopySuccess: onCopySuccess,
			onInitialDateChange: onInitialDateChange
		};

		// Init
		logService.init(vm.data.controller);
		vm.calculatedDate = null;

		// Watch initialDate changes
		$scope.$watch('initialDate', function () {
			$timeout(function () {
				vm.methods.define21Date();
			});
		});

		// Listen window click
		$window.addEventListener('click', vm.methods.onWindowClick);

		// Subscribe to calculated date history
		calculatedDateHistoryService.subscribe($scope, function ($data) {
			vm.data.history = $data.newHistory;
		});

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
			vm.methods.define21Date();
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
				vm.methods.define21Date();
				Methods.safeApply($scope);
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
		}

		function onInitialDateChange() {
			logService.fnCalled('onInitialDateChange');
			$timeout(vm.methods.define21Date);
		}
	}
})(window.angular);

(function (angular) {
	'use strict';

	angular.module('21days').directive('onEnter', onEnter);

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

	angular.module('21days').run(config);

	config.$inject = ['tmhDynamicLocale', 'moment', 'appConstant'];

	function config(tmhDynamicLocale, moment, appConstant) {
		tmhDynamicLocale.set(appConstant.lang.current);
		moment.locale(appConstant.lang.current);
	}
})(window.angular);
(function (angular) {
	'use strict';

	angular.module('21days').run(config);

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

	angular.module('21days').factory('calculatedDateHistoryService', calculatedDateHistoryService);

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
			setFinal: setFinal,
			addWeekend: addWeekend,
			addFerie: addFerie
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
		}

		function setFinal($date) {
			logService.service(data.service, 'setFinal');
			data.history.final = {
				date: $date
			};
			methods.notify();
		}

		/**
   * Add a weekend exception
   * @param {object} $data > Object with data (dateBefore, dateAfter, type (sunday, saturday))
   */
		function addWeekend($data) {
			logService.service(data.service, 'addWeekend');
			methods.newException($data);
		}

		/**
   * Add a ferie exception
   * @param {object} $data > Object with data (dateBefore, dateAfter, ferie)
   */
		function addFerie($data) {
			logService.service(data.service, 'addFerie');
			$data.type = 'ferie';
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
	}
})(window.angular);
(function (angular) {
	'use strict';

	angular.module('21days').factory('copyService', copyService);

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

	angular.module('21days').factory('dateService', dateService);

	dateService.$inject = ['moment', 'logService', 'appConstant', 'calculatedDateHistoryService'];

	function dateService(moment, logService, appConstant, calculatedDateHistoryService) {
		var data = {
			service: 'dateService',
			days: 21,
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
			setNextDayAfterWeekend: setNextDayAfterWeekend,
			weekendAndExceptionsStuff: weekendAndExceptionsStuff,
			readable: readable,
			toTimestamp: toTimestamp
		};

		return {
			add21days: add21days,
			toISOString: toISOString,
			toString: toString
		};

		function add21days($date) {
			logService.fnCalledService(data.service, 'add21days');
			if ($date) {
				logService.service(data.service, 'original date is: ' + $date);
				calculatedDateHistoryService.reset();

				// Convert the date
				var date = moment($date, appConstant.moment.readableFormat, appConstant.lang.current);
				logService.service(data.service, 'moment original date is: ' + methods.readable(date));
				calculatedDateHistoryService.setOriginal(methods.toTimestamp(date));

				// Add 21 days
				date = methods.add(date, data.days, 'days');
				logService.service(data.service, 'new +21 days date is: ' + methods.readable(date));
				calculatedDateHistoryService.setCalculated(methods.toTimestamp(date));

				return methods.weekendAndExceptionsStuff(date);
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

		function setNextDayAfterWeekend($date) {
			if (methods.isSunday($date)) {
				return methods.add($date, data.one, 'days');
			}
			return methods.add($date, data.two, 'days');
		}

		function weekendAndExceptionsStuff($date) {
			var date = $date;

			// Check if this is the weekend
			if (methods.isWeekend(date)) {
				logService.service(data.service, 'isWeekend');
				var weekend = {
					dateBefore: methods.toTimestamp(date),
					dateAfter: null,
					type: methods.isSunday(date) ? 'sunday' : 'saturday'
				};

				// Set the next monday
				date = methods.setNextDayAfterWeekend(date);
				logService.service(data.service, 'new date after weekend: ' + methods.readable(date));
				weekend.dateAfter = methods.toTimestamp(date);
				calculatedDateHistoryService.addWeekend(weekend);
			}

			// Check if this is an fr exception
			if (date.isFerie()) {
				logService.service(data.service, 'isFerie');
				var ferie = {
					dateBefore: methods.toTimestamp(date),
					dateAfter: null,
					ferie: date.getFerie()
				};

				// Add one day
				date = methods.add(date, data.one, 'days');
				logService.service(data.service, 'new date after exception day: ' + methods.readable(date));
				ferie.dateAfter = methods.toTimestamp(date);
				calculatedDateHistoryService.addFerie(ferie);

				// Loop again
				date = weekendAndExceptionsStuff(date);
			}
			logService.service(data.service, 'final new date: ' + methods.readable(date));
			calculatedDateHistoryService.setFinal(methods.toTimestamp(date));
			return methods.toTimestamp(date);
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

	angular.module('21days').factory('keyboardService', keyboardService);

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

	angular.module('21days').factory('logService', logService);

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
'use strict';

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

	angular.module('21days').run(config);

	config.$inject = [];

	function config() {
		console.info('21-days version: 0.9.2');
	}
})(window.angular);

/* end:concat-scripts */
//# sourceMappingURL=scripts.js.map
//# sourceMappingURL=21-days.js.map
