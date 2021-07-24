module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: {
    enabled:true,
    content: ['./src/components/**/*.tsx', './src/pages/**/*.tsx', '.src/styles/**/*.css']
  }
  ,
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