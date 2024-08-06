# @343dev/eslint-config

[![npm](https://img.shields.io/npm/v/@343dev/eslint-config.svg)](https://www.npmjs.com/package/@343dev/eslint-config)

ESLint rules that follow my style guide.

## Installation

```bash
npm install --save-dev @343dev/eslint-config
```

## Usage

Include into a project config using flag [--config](http://eslint.org/docs/user-guide/command-line-interface#-c---config),
and pass paths for files as arguments:

```sh
eslint -c ./node_modules/@343dev/eslint-config/.eslintrc.js ./src
```

Also you can create your own `.eslintrc.js` and extend this config there:

```js
module.exports = {
  extends: '@343dev',
  env: {
    jest: true
  },
}
```

Read more about `.eslintrc.js` in [ESLint docs](https://eslint.org/docs/user-guide/configuring).
