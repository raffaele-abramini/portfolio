const fs = require('fs')
const path = require('path')

module.exports = {
	entry: './source/server.js',
	output: {
		filename: 'server.bundle.js'
	},


	// keep node_module paths out of the bundle
	externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
		'react-dom/server', 'react/addons',
	]).reduce(function (ext, mod) {
		ext[mod] = 'commonjs ' + mod
		return ext
	}, {}),

	target: 'node',

	module: {
		rules: [
			{
				test:/\.js$/,
				exclude: /node_modules/,
				loader : 'babel-loader',
				options: {
					presets : ['stage-2', 'react']
				}
			}
		]
	}
};