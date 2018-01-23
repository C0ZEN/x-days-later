/**
 * Generated header by C0ZEN for x-days-later project
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
		src : [
			'docs/scripts/**/*',
			'.tmp/release/version.initiator.js',
			'!docs/scripts/initiators/version.initiator.js',
			'!docs/scripts/sw.js',
			'!docs/scripts/sw.init.js'
		],
		dest: '.tmp/release/scripts.js'
	}
};