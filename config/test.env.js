const merge = require('webpack-merge')

module.exports = merge(require('./dev.env'), {
	NODE_ENV: 'testing',
})
