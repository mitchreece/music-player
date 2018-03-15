const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const config = require('../config').build
const extractTextPlugin = require('extract-text-webpack-plugin')

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
				use: extractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
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
				}),
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
		new extractTextPlugin('main.css'),
		new webpack.EnvironmentPlugin(require('../config/prod.env')),
	],
})
