export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-clean-order',
  ],
  plugins: ['stylelint-order', 'stylelint-declaration-strict-value'],
  rules: {
    'selector-class-pattern': null,
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-order': null, // Disable strict property ordering
    'declaration-empty-line-before': 'never', // No empty lines before declarations
  },
  overrides: [
    {
      files: ['**/*.module.scss', '**/*.module.css'],
      rules: {
        // Enforce CSS variables for all color-related properties
        'scale-unlimited/declaration-strict-value': [
          [
            'color',
            'background-color',
            'border-color',
            'border-top-color',
            'border-right-color',
            'border-bottom-color',
            'border-left-color',
            'outline-color',
            'fill',
            'stroke',
          ],
          {
            ignoreKeywords: [
              'inherit',
              'transparent',
              'currentColor',
              'initial',
              'unset',
            ],
            disableFix: true,
          },
        ],
      },
    },
  ],
};
