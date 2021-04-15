const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
	mode:"development",
	entry: "./src/index.js",
	output:{
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	resolve:{
		extensions: [".js"]
	},
	module:{
		rules:[
			{
				test: /\.jsx?$/,
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
		new HtmlWebpackPlugin({
			template: "./src/index.html"
		})
	],

	devServer: {
		port: 3000,
		contentBase: "dist",
	},
	devtool: "source-map"
}