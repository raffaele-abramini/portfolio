module.exports = {
	entry: './source/client.js',
	output: {
		filename: './dist/bundle.js'
	},
	module: {
		rules: [
			{
				test:/\.js$/,
				exclude: /node_modules/,
				loader : 'babel-loader',
				options: {
					presets : ['latest', 'react']
				}
			}
		]
	}
};