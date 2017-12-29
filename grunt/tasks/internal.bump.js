/**
 * Generated header by Cozen for generator-cozen-angular project
 * Generated file internal.bump on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 22/12/2017
 * Time: 15:22
 * Version: 1.0.0
 */
module.exports = function (grunt) {
	grunt.registerTask('internal.bump', 'Execute the bump task with custom target', () => {
		grunt.task.run([
			'bump:' + grunt.config.get('newVersionTarget')
		]);
	});
};