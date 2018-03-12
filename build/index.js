const webpack = require('webpack')
const rm = require('rimraf')
const { red } = require('chalk')
const mainConfig = require('./webpack.main.prod.config')
const rendererConfig = require('./webpack.renderer.prod.config')
const config = require('../config').build

/* eslint-disable no-console */

rm(config.assets.rootDirectory, err => {
	if (err) throw err

	webpack([mainConfig, rendererConfig], (err, stats) => {
		if (err) throw err

		process.stdout.write(stats.toString({
			colors: true,
			modules: false,
			children: false,
			chunks: false,
			chunkModules: false,
		}) + '\n')

		if (stats.hasErrors()) {
			console.log(red('Build failed with errors.\n'))
			process.exit(1)
		}
	})
})
