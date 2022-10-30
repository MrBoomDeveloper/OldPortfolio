const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');

module.exports = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		static: "./docs",
		magicHtml: true,
		
		client: {
			progress: true
		}
	},
	
	plugins: [
		new ESLintPlugin(),
	],
	
	module: {
		rules: [
			{
				test: /\.scss$/i,
				include: path.resolve(__dirname, '../../src'),
				use: ["style-loader", "css-loader", "sass-loader"]
			}
		]
	},
	
	optimization: {
		removeAvailableModules: false,
		removeEmptyChunks: false,
		splitChunks: false
	},
	
	output: {
		pathinfo: false
	},
	
	stats: "minimal"
});


