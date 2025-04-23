import js from '@eslint/js';
import xo from 'eslint-config-xo';
import pluginImport from 'eslint-plugin-import';
import pluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';

export default [
	...xo,
	js.configs.recommended,
	pluginImport.flatConfigs.recommended,
	pluginUnicorn.configs.recommended,

	{
		languageOptions: {
			globals: globals.builtin,
			ecmaVersion: 'latest',
			sourceType: 'module',
		},

		rules: {
			'@stylistic/function-paren-newline': ['error', 'consistent'],
			'@stylistic/object-curly-spacing': ['error', 'always'],
			'capitalized-comments': 'off',
			'no-warning-comments': 'off',
			'unicorn/no-array-reduce': 'off',
		},
	},
];
