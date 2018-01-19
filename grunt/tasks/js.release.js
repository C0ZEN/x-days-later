/**
 * Generated header by C0ZEN for x-days-later project
 * Generated file js.release on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 01/01/2018
 * Time: 18:47
 * Version: 1.0.0
 */
module.exports = function (grunt) {
	grunt.registerTask('js.release', 'Create the release script files', () => {
		grunt.task.run([
			'clean:tmpScripts',
			'clean:releaseScripts',
			'preprocess:versionInitiator',
			'concat:release',
			'babel:concatScripts',
			'babel:uglifyScripts',
			'build --force'
		]);
	});
};