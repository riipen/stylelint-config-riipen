"use strict"

module.exports = {
  "extends": "stylelint-config-standard",
  "plugins": [
    "stylelint-order"
  ],
  "rules": {
    "no-descending-specificity": null,
    "order/order": [
      "custom-properties",
      "declarations"
    ],
    "order/properties-alphabetical-order": true,
  },
}
