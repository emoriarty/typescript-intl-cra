# Why

The main reason to give back life again to this tool is that at work we make pretty good use in for extracting and storing translation messages. After according to port our projects to TypeScript, we've realized that `react-int-cra` did not support the TypeScript syntax. Even the available options offered the possibility to add babel plugins, it did not work with the last versions of babel either. Of course, the project had been deprecated.

The author suggests to change to another library, but for now, we're more focused on evolving our product. No time for changing models in the toolchain. So after observing how the library works, we found easier to update it and include the TypeScript support than using a new instrument.

So now you're aware why don't expect nothing too fancy. It is just the same old fashion behavior updated to babel 7. And TypeScript support.

Please, refer to the [original repository](https://github.com/evenchange4/react-intl.macro) if you want to know more about suggested alternatives.

# typescript-intl-cra

> Extract messages of `Creact React App` from the command line.

[![Travis][build-badge]][build]
[![Codecov Status][codecov-badge]][codecov]
[![npm package][npm-badge]][npm]
[![npm downloads][npm-downloads]][npm]

[![prettier][prettier-badge]][prettier]
[![license][license-badge]][license]

This is just a workaround for [create-react-app #1227](https://github.com/facebookincubator/create-react-app/issues/1227#issuecomment-285738137) and [react-intl #869](https://github.com/yahoo/react-intl/issues/869) in unofficial way.

## Installation

```sh
$ yarn add typescript-intl-cra --dev
```

## Demo

Standalone example based on Create-React-App: https://github.com/evenchange4/react-intl-po-example

```json
$ typescript-intl-cra './src/**/*.js' -o messages.json
```

Output:

```json
// messages.json

[
  {
    "id": "Account.account",
    "description": "Title",
    "defaultMessage": "帳戶",
    "filepath": "./src/containers/Account/messages.js"
  },
  {
    "id": "Account.myTestDevices",
    "defaultMessage": "我的測試裝置",
    "filepath": "./src/containers/Account/messages.js"
  },
  ...
]
```

### API

```sh
$ typescript-intl-cra --help

Usage: typescript-intl-cra <pattern> [options]

<pattern> Glob pattern to specify files.
          Needs to be surrounded with quotes to prevent shell globbing.
          Guide to globs: https://github.com/isaacs/node-glob

Options:
  -o, --out-file  Output into a single file                             [string]
  -h, --help      Show help                                            [boolean]
  -v, --version   Show version number                                  [boolean]

Examples:
  typescript-intl-cra 'src/App.js'                   One file.
  typescript-intl-cra 'src/**/*.js'                  Pattern to specify files
  typescript-intl-cra 'src/**/*.js' -o message.json  Output into a single file.


For more information go to https://github.com/emoriarty/typescript-intl-cra
```

## NPM Usage

```js
import extract from 'typescript-intl-cra';

const result = extract('./src/**/*.js');
```

## Development

### Requirements

* node >= 9
* yarn >= 1.3.2

```
$ yarn install --pure-lockfile
$ yarn start
```

### Test

```
$ yarn run format
$ yarn run eslint
$ yarn run flow
$ yarn run test:watch
```

### NPM Release

> Any git tags.

1. Create a new git tag
2. Update `CHANGELOG.md`

```sh
$ npm version patch
$ npm run changelog
```

---

## CONTRIBUTING

* ⇄ Pull requests and ★ Stars are always welcome.
* For bugs and feature requests, please create an issue.
* Pull requests must be accompanied by passing automated tests (`$ yarn test`).

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)

MIT: [http://michaelhsu.mit-license.org](http://michaelhsu.mit-license.org)

[build-badge]: https://img.shields.io/travis/emoriarty/typescript-intl-cra/master.svg?style=flat-square
[build]: https://travis-ci.org/emoriarty/typescript-intl-cra
[npm-badge]: https://img.shields.io/npm/v/typescript-intl-cra.svg?style=flat-square
[npm]: https://www.npmjs.org/package/typescript-intl-cra
[codecov-badge]: https://img.shields.io/codecov/c/github/emoriarty/typescript-intl-cra.svg?style=flat-square
[codecov]: https://codecov.io/github/emoriarty/typescript-intl-cra?branch=master
[npm-downloads]: https://img.shields.io/npm/dt/typescript-intl-cra.svg?style=flat-square
[license-badge]: https://img.shields.io/npm/l/typescript-intl-cra.svg?style=flat-square
[license]: http://michaelhsu.mit-license.org/
[prettier-badge]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square
[prettier]: https://github.com/prettier/prettier
