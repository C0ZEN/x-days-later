/**
 * Generated header by C0ZEN for x-days-later project
 * Generated file utils on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 30/12/2017
 * Time: 17:52
 * Version: 1.0.0
 */
'use strict';

/* eslint no-unused-vars:"off" */
const Methods = {
	safeApply
};

// Force a digest in angular app safely
function safeApply(scope, fn) {
	let phase = scope.$root;
	if (phase) {
		phase = phase.$$phase;
		if ('$apply' === phase || '$digest' === phase) {
			if (fn && 'function' === typeof fn) {
				fn();
			}
		}
		else {
			scope.$apply(fn);
		}
	}
}