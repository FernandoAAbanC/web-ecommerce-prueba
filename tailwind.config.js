module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: ['./components/**/*.tsx', './pages/**/*.tsx', './styles/**/*.css'],
  theme: {
    extend: {
      colors:{
        'theme-base':'#234145',
        'theme-base2':'#ECDCDB',
        'theme-base3':'#F2EBEC',
      }
    },
  },
  variants: {},
  plugins: [
    "tailwindcss", 
    "postcss-preset-env"
  ]
};