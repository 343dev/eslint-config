import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import eslintPluginDeMorgan from 'eslint-plugin-de-morgan';
import eslintPluginImportLite from 'eslint-plugin-import-lite';
import eslintPluginN from 'eslint-plugin-n';
import eslintPluginRegexp from 'eslint-plugin-regexp';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';

const deMorganConfig = [
	eslintPluginDeMorgan.configs.recommended,
];

const importConfig = [
	eslintPluginImportLite.configs.recommended,
];

const jsConfig = [
	js.configs.recommended,
];

const nConfig = [
	eslintPluginN.configs['flat/recommended'],
];

const regexpConfig = [
	eslintPluginRegexp.configs['flat/recommended'],
];

const stylisticConfig = [
	stylistic.configs.recommended,
	{
		rules: {
			'@stylistic/brace-style': ['error', '1tbs'],
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/no-tabs': 'off',
			'@stylistic/semi': ['error', 'always'],
		},
	},
];

const unicornConfig = [
	eslintPluginUnicorn.configs.recommended,
	{
		rules: {
			'unicorn/no-process-exit': 'off',
		},
	},
];

export default [
	{
		languageOptions: {
			globals: {
				...globals.es2021,
				...globals.nodeBuiltin,
			},
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		linterOptions: {
			reportUnusedDisableDirectives: 'error',
			reportUnusedInlineConfigs: 'error',
		},
	},

	...unicornConfig,
	...deMorganConfig,
	...regexpConfig,
	...nConfig,
	...stylisticConfig,
	...jsConfig,
	...importConfig,
];
