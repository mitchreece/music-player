const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('../config').build

module.exports = merge(require('./webpack.base.config'), {
	target: 'electron-main',
	entry: {
		app: './src/main.js',
	},
	output: {
		path: config.assets.rootDirectory,
		filename: '[name].js',
	},
	plugins: [
		new webpack.EnvironmentPlugin(require('../config/prod.env')),
	],
	node: {
		__dirname: false,
		__filename: false,
	},
})
