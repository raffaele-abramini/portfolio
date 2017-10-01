const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './source/client.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test:/\.js$/,
				exclude: /node_modules/,
				loader : 'babel-loader',
				options: {
					presets : ['es2015','stage-2', 'react']
				}
			},
			{
				test:/\.scss$/,
				use: ExtractTextPlugin.extract({
					use: ['css-loader', 'sass-loader']
				})
			}
		]
	},
	resolve: {
		alias: {
			utilities: path.resolve(__dirname, 'source/lib/utilities.js')
		}
	},
	plugins : [
		new ExtractTextPlugin('style.css')
	],
	devtool: 'source-map'
};