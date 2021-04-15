const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ForkTsChecker = require("fork-ts-checker-webpack-plugin");

module.exports = {
	mode:"development",
	entry: "./src/index",
	output:{
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	resolve:{
		extensions: [".tsx", ".jsx", ".ts", ".js"]
	},
	module:{
		rules:[
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use:[
					{
						loader: "babel-loader"
					}
				]
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({ template: "./src/index.html"}),
		new ForkTsChecker()
	],

	devServer: {
		port: 3000,
		contentBase: "dist",
	},
	devtool: "source-map"
}