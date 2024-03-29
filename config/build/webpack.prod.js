const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
	mode: "production",
	output: {
		publicPath: "https://mrboomdev.ru/"
	},
	
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css'
		})
	],
	
	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			}
		]
	}
});


