module.exports = {
  extends: ['stylelint-config-recess-order', 'stylelint-config-recommended-scss'],
  rules: {
    // ::before, ::afterのコロンを2つにする
    'selector-pseudo-element-colon-notation': 'double',
    // クラス名でアンパサンド（&）は禁止（&:hoverなどはOK）
    'scss/selector-no-union-class-name': true,
    // シングルクォーテーションに統一
    'string-quotes': 'single',
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['apply', 'layer', 'responsive', 'screen', 'tailwind']
      }
    ]
  },
  ignoreFiles: ['**/node_modules/**']
}
