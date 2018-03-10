const merge = require('webpack-merge')

module.exports = merge(require('./prod.env'),{
	NODE_ENV: 'development',
})
