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
		'eslint:recommended',
		'plugin:import/recommended',
		'plugin:unicorn/recommended',
	],
	rules: {
		'capitalized-comments': 'off',
		'no-warning-comments': 'off',
		'object-curly-spacing': [
			'error',
			'always',
		],
		'unicorn/no-array-reduce': 'off',
	},
};
