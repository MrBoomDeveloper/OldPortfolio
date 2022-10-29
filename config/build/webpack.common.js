const fs = require("fs");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

const isProd = process.argv[process.argv.indexOf('--mode') + 1] == "production";

const pages = [ "index", "project", "terms", "login" ];

const htmlEntry = pages.map(name => {
	return new HtmlWebpackPlugin({
		filename: `${name}.html`,
		template: path.resolve(__dirname, "../../src/pages/core/template.html"),
		chunks: [name],
		body: fs.readFileSync(path.resolve(__dirname, `../../src/pages/${name}/${name}.html`), "utf8"),
		isProd: isProd,
		path: name,
		title: "MrBoomDev - Фронтенд Разработчик",
		description: "Пишу веб-приложения и просто обожаю красивые веб интерфейсы!"
	});
});

function generateEntry(entry, result = {}) {
	for (const item of entry) {
		result[item] = `./src/pages/${item}/index`;
	}
	return result;
}

module.exports = {
	entry: generateEntry(pages),

	plugins: [
		new CopyPlugin({
			patterns: [
				{
					from: "./src/assets/img", to: "./img"
				}, {
					from: "./src/assets/config", to: "./"
				}, {
					from: "./src/assets/favicon", to: "./"
				}
			]
		}),

		new ESLintPlugin(),

		...htmlEntry
	],

	output: {
		filename: "[name].[contenthash].js",
		path: path.resolve(__dirname, "../../docs"),
		clean: true
	},

	resolve: {
		symlinks: false,
		alias: {
			Features: path.resolve(__dirname, "../../src/features"),
			Data: path.resolve(__dirname, "../../src/data"),
			Components: path.resolve(__dirname, "../../src/components"),
			Pages: path.resolve(__dirname, "../../src/pages")
		},

		extensions: [ ".ts", ".js", ".json", ".scss" ]
	},

	module: {
		rules: [{
			test: /\.scss$/i,
			include: path.resolve(__dirname, '../../src'),
			use: ["style-loader", "css-loader", "sass-loader"],
			sideEffects: true
		},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
				include: [
					path.resolve(__dirname, '../../src'),
				]
			}
		]
	}
}


