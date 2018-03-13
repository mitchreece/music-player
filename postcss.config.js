module.exports = {
	syntax: 'postcss-scss',
	plugins: [
		require('postcss-import'),
		require('stylelint'),
		require('postcss-nested'),
		require('cssnano'),
	],
}
