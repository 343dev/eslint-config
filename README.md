# @343dev/eslint-config

[![npm](https://img.shields.io/npm/v/@343dev/eslint-config.svg)](https://www.npmjs.com/package/@343dev/eslint-config)

ESLint rules that follow my style guide.

## Installation

```bash
npm install --save-dev eslint globals @343dev/eslint-config
```

## Usage

Include into a project config using flag [--config](https://eslint.org/docs/latest/use/command-line-interface#-c---config),
and pass paths for files as arguments:

```sh
eslint -c ./node_modules/@343dev/eslint-config/eslint.config.js ./src
```

Also you can create your own `eslint.config.js` and extend this config there:

```js
import config from '@343dev/eslint-config';
import globals from 'globals';

export default [
	...config,

	{
		languageOptions: {
			globals: globals.jest,
		},
	},
];
```

Read more about `eslint.config.js` in [ESLint docs](https://eslint.org/docs/latest/use/configure/configuration-files).
