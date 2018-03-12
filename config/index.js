const { resolve } = require('path')

module.exports = {
	build: {
		template: resolve(__dirname, '../public/index.html'),
		assets: {
			rootDirectory: resolve(__dirname, '../dist'),
		},
	},
}
