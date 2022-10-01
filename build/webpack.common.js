const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const fs = require("fs");

module.exports = {
	entry: {
		index: "./src/js/index.js",
		project: "./src/js/project.js"
	},
	plugins: [
		getHtml("index"), getHtml("project")
	],
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "../docs/js"),
		clean: true
	},
	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: ["style-loader", "css-loader", "sass-loader"]
			}
		]
	}
}

function getHtml(name) {
	return new HtmlWebpackPlugin({
		filename: `${name}.html`,
		template: path.resolve(__dirname, "../src/html/template.html"),
		chunks: [name],
		body: fs.readFileSync(path.resolve(__dirname, `../src/html/${name}.html`), "utf8"),
		updated: Date.now()
	});
}


