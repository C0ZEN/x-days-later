/**
 * Generated header by Cozen for generator-cozen-angular project
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
	}
};