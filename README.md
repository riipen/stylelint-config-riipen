# stylelint-config-riipen

[![NPM version](http://img.shields.io/npm/v/stylelint-config-riipen.svg)](https://www.npmjs.org/package/stylelint-config-riipen)

> Riipen's standard shareable config for stylelint.

Extends [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard).

## Installation

```bash
npm install stylelint-config-riipen --save-dev
```

## Usage

If you've installed `stylelint-config-riipen` locally within your project, just set your `stylelint` config to:

```json
{
  "extends": "stylelint-config-riipen"
}
```

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to change the `at-rule-no-unknown` rule to use its `ignoreAtRules` option, change the `indentation` to tabs, turn off the `number-leading-zero` rule,and add the `unit-whitelist` rule:

```json
{
  "extends": "stylelint-config-riipen",
  "rules": {
    "at-rule-no-unknown": [ true, {
      "ignoreAtRules": [
        "extends",
        "ignores"
      ]
    }],
    "indentation": "tab",
    "number-leading-zero": null,
    "unit-whitelist": ["em", "rem", "s"]
  }
}
```
