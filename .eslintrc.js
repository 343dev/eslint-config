module.exports = {
	env: {
		es2024: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	extends: [
		'xo',
		'plugin:import/recommended',
		'plugin:unicorn/recommended',
	],
	plugins: [
		'import'
	],
	rules: {
		'capitalized-comments': 'off',
		'no-warning-comments': 'off',
		'object-curly-spacing': [
			'error',
			'always',
		],
		'unicorn/no-array-reduce': 'off',
	}
}
