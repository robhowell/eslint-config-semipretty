[![Build Status](https://www.travis-ci.com/robhowell/eslint-config-semipretty.svg?branch=master)](https://www.travis-ci.com/robhowell/eslint-config-semipretty)

# eslint-config-semipretty
An ESLint config combining semistandard and prettier

## Installation

- Run `npx install-peerdeps --dev eslint-config-semipretty`

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

## Bonus: Automatically lint files on commit

`husky` allows you run commands automatically when Git events occur, such as when code is committed. `lint-staged` ensures that only new and modified files are linted, to that the process is as fast as possible.

1) Install `husky`: run `npm install --save-dev husky lint-staged`

2) Add the `precommit` script to the `scripts` object and add the `lint-staged` object to your `package.json`:

```javascript
"scripts": {
  "lint": "eslint .",
  "lint-fix": "eslint . --fix",
  "precommit": "lint-staged"
},
"lint-staged": {
  "*.js": ["eslint --fix", "git add"]
}
```


## If you're using React

- Install `eslint-plugin-react`: run `npm install --save-dev eslint-plugin-react`
- In your `.eslintrc.js` file, add the plugin and extend the default configuration, e.g.

```javascript
module.exports = {
  extends: ['semipretty', 'plugin:react/recommended'],
  plugins: ['react']
};
```

## If you're using Jest

- Install `eslint-plugin-jest`: `npm install --save-dev eslint-plugin-jest`
- In your `.eslintrc.js` file, add the plugin and extend the default configuration, e.g.

```javascript
module.exports = {
  extends: ['semipretty', 'plugin:jest/recommended'],
  plugins: ['jest']
};
```

## If you're using experimental JavaScript features

If you are using experimental JavaScript features such as class properties, you may encounter parsing errors which can be fixed by adding `babel-eslint`.

- Install `babel-eslint`: Run `npm install --save-dev babel-eslint`
- Set `babel-eslint` as the parser in your `.eslintrc.js` file, for example:

```javascript
module.exports = {
  extends: ['semipretty'],
  parser: 'babel-eslint'
};
```
