/**
 * Generated header by Cozen for x-days-later project
 * Generated file string-replace on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 22/12/2017
 * Time: 15:25
 * Version: 1.0.0
 */
module.exports = {
	changelog: {
		src    : 'CHANGELOG.md',
		dest   : 'CHANGELOG.md',
		options: {
			replacements: [
				{
					pattern    : /(\#\# \[Unreleased\])/g, // eslint-disable-line
					replacement: '## [Unreleased]\n\n## [<%= newVersion %>]'
				}
			]
		}
	},
	configVersion: {
		src    : 'docs/_config.yml',
		dest   : 'docs/_config.yml',
		options: {
			replacements: [
				{
					pattern    : /version: ([0-9]+<[.]){2}[0-9]+/g, // eslint-disable-line
					replacement: 'version: <%= newVersion %>'
				}
			]
		}
	}
};