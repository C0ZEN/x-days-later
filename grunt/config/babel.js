/**
 * Generated header by C0ZEN for 21-days project
 * Generated file babel on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 01/01/2018
 * Time: 19:12
 * Version: 1.0.0
 */
module.exports = {
	options      : {
		sourceMap: true,
		presets  : [
			'es2015'
		]
	},
	concatScripts: {
		files: {
			'docs/release/21-days.js': '.tmp/release/scripts.js'
		}
	},
	uglifyScripts: {
		options: {
			minified: true,
			compact : true,
			comments: false
		},
		files  : {
			'docs/release/21-days.min.js': 'docs/release/21-days.js'
		}
	}
};