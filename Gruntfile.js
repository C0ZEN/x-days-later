// jshint ignore: start
'use strict';

module.exports = function (grunt) {
	const path = require('path');

	const config = {
		version: grunt.file.readJSON('package.json').version
	};

	require('time-grunt')(grunt);

	require('jit-grunt')(grunt);

	require('load-grunt-config')(grunt, {
		configPath: path.join(process.cwd(), 'grunt/config'),
		jitGrunt  : {
			customTasksDir: 'grunt/tasks'
		},
		data      : {
			config,
			newVersion      : 'toDefine',
			newVersionTarget: 'toDefine',
			version         : 'toDefine'
		}
	});

	grunt.loadNpmTasks('grunt-git');
};