module.exports = {
  plugins: [
    require('precss')(),
    require('postcss-initial')(),
    require('postcss-autoreset')(),
    require('autoprefixer')({
      browsers: [
        'Chrome 48',
        'Chrome 54',
        'Chrome 55',
        'Firefox 55',
        'Safari 9',
        'Safari 10',
        'Edge 14',
        'ie 11',
        '> 2% in US'
      ]
    }),
  ]
};
