/**
 * Generated header by Cozen for x-days-later project
 * Generated file build on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 19/01/2018
 * Time: 14:16
 * Version: 0.12.1
 */
module.exports = function (grunt) {
	grunt.registerTask('build', 'Create a build for the vendors', () => {
		grunt.task.run([
			'copy:defaultHtml',
			'useminPrepare',
			'concat:generated',
			'usemin',
			'sass:loader',
			'htmlmin:defaultTemplate'
		]);
	});
};