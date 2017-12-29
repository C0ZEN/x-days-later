/**
 * Generated header by Cozen for generator-cozen-angular project
 * Generated file if on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 22/12/2017
 * Time: 15:21
 * Version: 1.0.0
 */
module.exports = function (grunt) {
	return {
		isChangelogUpdated: {
			options: {
				test() {
					return grunt.config.get('isChangelogUpdated');
				}
			},
			ifTrue : [
				'prompt:chooseRelease',
				'prompt:confirmRelease',
				'if:isReleaseConfirmed'
			],
			ifFalse: [
				'internal.changelogRequired'
			]
		},
		isReleaseConfirmed: {
			options: {
				test() {
					return grunt.config.get('isReleaseConfirmed');
				}
			},
			ifTrue : [
				'gitcheckout:develop',
				'string-replace:changelog',
				'internal.bump',
				'gitpush:develop',
				'npm-command:publish',
				'gitcheckout:master',
				'gitmerge:develop',
				'gittag:release',
				'gitpush:master',
				'gitcheckout:develop'
			]
		}
	};
};