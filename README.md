[![Build Status](https://www.travis-ci.com/robhowell/eslint-config-semipretty.svg?branch=master)](https://www.travis-ci.com/robhowell/eslint-config-semipretty)

# eslint-config-semipretty
An ESLint config combining semistandard and prettier

## Installation

- Run `npx install-peerdeps --dev eslint-config-semipretty`

<small>**Note**: if using npm <5, you will need to install eslint-config-semipretty and all peer dependencies manually instead.</small>

## Setup

1. Create an `.eslintrc.js` file in the root of your project, with the following contents:

```javascript
module.exports = {
  extends: ['semipretty']
};
```

2. Create an `.eslintignore` file in the root of your project, to exclude all JavaScript files that do not need to be linted, such as generated build files and third party modules. For most projects, the simplest approach is to just copy the contents of your `.gitignore` file, e.g.:

```
build/
logs/
node_modules/
```

3. Add `lint` and `lint-fix` scripts to the `scripts` object in your `package.json`:

```javascript
"scripts": {
  "lint": "eslint .",
  "lint-fix": "eslint . --fix"
}
```

## Bonus: if using React

- Install `eslint-plugin-react`: run `yarn add --dev eslint-plugin-react` or `npm install --save-dev eslint-plugin-react`
- In your `.eslintrc.js` file, add the plugin and extend the default configuration, e.g.

```javascript
module.exports = {
  extends: ['semipretty', 'plugin:react/recommended'],
  plugins: ['react']
};
```

## Bonus: if using Jest

- Install `eslint-plugin-jest`: run `yarn add --dev eslint-plugin-jest` or `npm install --save-dev eslint-plugin-jest`
- In your `.eslintrc.js` file, add the plugin and extend the default configuration, e.g.

```javascript
module.exports = {
  extends: ['semipretty', 'plugin:jest/recommended'],
  plugins: ['jest']
};
```

## Bonus: if using experimental JavaScript features

If you are using experimental JavaScript features such as class properties, you may encounter parsing errors which can be fixed by adding `babel-eslint`.

- Install `babel-eslint`: Run `yarn add --dev babel-eslint` or `npm install --save-dev babel-eslint`
- Set `babel-eslint` as the parser in your `.eslintrc.js` file, for example:

```javascript
module.exports = {
  extends: ['semipretty'],
  parser: 'babel-eslint'
};
```