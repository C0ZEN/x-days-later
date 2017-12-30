/**
 * Generated header by C0ZEN for 21-days project
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
		.module('21days')
		.config(config);

	config.$inject = [
		'tmhDynamicLocaleProvider'
	];

	function config(tmhDynamicLocaleProvider) {
		tmhDynamicLocaleProvider
			.localeLocationPattern('/bower_components/angular-i18n/angular-locale_{{locale}}.js')
			.defaultLocale('fr');
	}

}(window.angular));