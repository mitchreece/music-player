const webpack = require('webpack')
const { resolve } = require('path')

module.exports = {
	context: resolve(__dirname, '../'),
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
		modules: [
			resolve(__dirname, './src'),
			'node_modules',
		],
	},
	plugins: [
		new webpack.EnvironmentPlugin(require('../config/prod.env')),
	],
}
