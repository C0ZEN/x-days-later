/**
 * Generated header by Cozen for generator-cozen-angular project
 * Generated file internal.changelogRequired on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 22/12/2017
 * Time: 15:22
 * Version: 1.0.0
 */
module.exports = function (grunt) {

	const chalk = require('chalk');

	grunt.registerTask('internal.changelogRequired', 'Log about missing changelog update', () => {
		grunt.log.writeln('\n' + chalk.yellow.bold('WARNING !'));
		grunt.log.writeln('Please consider updating the ' + chalk.cyan('CHANGELOG.md') + ' before creating a new release.');
	});
};