const fs = require("fs");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

const isProd = process.argv[process.argv.indexOf('--mode') + 1] == "production";

module.exports = {
	entry: {
		index: "./src/js/index.js",
		project: "./src/js/project.js"
	},
	plugins: [
		getHtml("index"), getHtml("project"),
		new CopyPlugin({
			patterns: [
				{ from: "./src/assets/img", to: "./img" },
				{ from: "./src/assets/config", to: "./" },
				{ from: "./src/assets/favicon", to: "./" }
			]
		}),
		new ESLintPlugin()
	],
	output: {
		filename: "[name].[contenthash].js",
		path: path.resolve(__dirname, "../docs"),
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
		updated: Date.now(),
		isProd: isProd
	});
}


