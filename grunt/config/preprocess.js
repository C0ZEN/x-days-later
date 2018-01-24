/**
 * Generated header by Cozen for x-days-later project
 * Generated file preprocess on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 02/01/2018
 * Time: 11:52
 * Version: 1.0.0
 */
module.exports = grunt => {
	return {
		versionInitiator: {
			options: {
				context: {
					version: '<%= newVersion %>'
				}
			},
			src    : 'docs/scripts/initiators/version.initiator.js',
			dest   : '.tmp/release/version.initiator.js'
		},
		manifest        : {
			options: {
				context: {
					config: grunt.file.readYAML('docs/_config.yml')
				}
			},
			src    : 'docs/manifest.clean.json',
			dest   : 'docs/manifest.json'
		}
	};
};