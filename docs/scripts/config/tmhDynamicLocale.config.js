/**
 * Generated header by C0ZEN for x-days-later project
 * Generated file tmhDynamicLocale.config on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 30/12/2017
 * Time: 11:11
 * Version: 1.0.0
 */
(function (angular) {
	'use strict';

	angular
		.module('xDaysLater')
		.config(config);

	config.$inject = [
		'tmhDynamicLocaleProvider'
	];

	function config(tmhDynamicLocaleProvider) {
		tmhDynamicLocaleProvider
			.localeLocationPattern('/x-days-later/bower_components/angular-i18n/angular-locale_{{locale}}.js')
			.defaultLocale('fr');
	}

}(window.angular));