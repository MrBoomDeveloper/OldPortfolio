const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

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


