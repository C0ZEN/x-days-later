/**
 * Generated header by C0ZEN for 21-days project
 * Generated file concat on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 01/01/2018
 * Time: 18:39
 * Version: 1.0.0
 */
module.exports = {
	options: {
		nonull      : true,
		banner      : '/* start:concat-scripts */\n',
		footer      : '\n/* end:concat-scripts */',
		stripBanners: true,
		sourceMap   : true
	},
	release: {
		src : 'docs/scripts/**/*',
		dest: '.tmp/release/scripts.js'
	}
};