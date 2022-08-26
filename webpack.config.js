const path = require('path');

module.exports = {
	entry: {
		home: "./src/js/home.js",
		project: "./src/js/project.js",
		privacy: "./src/js/privacy.js"
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'docs/js'),
		clean: true
	},
	mode: 'production'
};