/**
 * Generated header by Cozen for generator-cozen-angular project
 * Generated file bump on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 22/12/2017
 * Time: 15:40
 * Version: 1.0.0
 */
module.exports = {
	options: {
		files             : [
			'package.json'
		],
		commit            : true,
		commitMessage     : 'Release <%= newVersionTarget %> <%= newVersion %>',
		commitFiles       : [
			'-a'
		],
		createTag         : false,
		tagName           : '<%= newVersion %>',
		tagMessage        : 'Version <%= newVersion %>',
		push              : false,
		pushTo            : 'origin',
		gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
		globalReplace     : false,
		prereleaseName    : false,
		metadata          : '',
		regExp            : false
	}
};