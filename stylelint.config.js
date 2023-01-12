module.exports = {
  plugins: ["stylelint-scss"],
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-recommended-vue",
    "stylelint-config-recess-order",
    "stylelint-config-prettier",
  ],
  rules: {
    "selector-id-pattern": null,
    "selector-class-pattern": null,
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "no-descending-specificity": null,
    "block-no-empty": null,
    "no-empty-source": null,
    "rule-empty-line-before": ["always", { except: ["first-nested"] }],
  },
};
