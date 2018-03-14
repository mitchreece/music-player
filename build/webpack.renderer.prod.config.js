const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const config = require('../config').build

module.exports = merge(require('./webpack.base.config'), {
	target: 'electron-renderer',
	entry: './src/index.jsx',
	output: {
		path: config.assets.rootDirectory,
		filename: 'index.js',
	},
	module: {
		rules: [
			{
				test: /\.css?$/,
				exclude: /node_modules/,
				use: [
					'style-loader',
					{ 
						loader: 'css-loader', 
						query: {
							modules: true,
							localIdentName: '[name]__[local]',
							importLoaders: 1,
						},
					}, 
					'postcss-loader',
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: config.template,
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				minifyCSS: true,	
			},
		}),
		new webpack.EnvironmentPlugin(require('../config/prod.env')),
	],
})
