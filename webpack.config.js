let webpack = require("webpack")

module.exports = {
	devtool: 'eval-source-map',
	entry: "./one.js",
	output: {
		path: __dirname,
		filename: "shuchu.js"
	},
	module: {
		loaders: [{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.json$/,
				loader: "json-loader"
			},

			{
				test: /\.(gif|jpg|png|woff|svg|eot|ttf)$/,
				loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
			},
			//          { test: /\.png$/, loader: "file-loader?name=images/[hash:8].[name].[ext]" }
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader', //在webpack的module部分的loaders里进行配置即可
				query: {
					presets: ['es2015', 'react']
				}
			}

		]
	},
};