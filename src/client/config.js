const path = require('path');
const config = {
  grid: {
    breakpoints: {
      '@media screen and (max-width: 599px)': 'mobile',
      '@media screen and (min-width: 600px)': 'tablet',
      '@media screen and (min-width: 800px)': 'laptop',
      '@media screen and (min-width: 1024px)': 'desktop'
    },
    columns: [1, 2, 3, 4, 5, 12],
    cssDestination: path.join(__dirname, 'styles/grid/widths.css'),
    jsDestination: path.join(__dirname, 'styles/grid/widths.js')
  },
  spacing: {
    baseFontSize: 13,
    baseLineHeightRatio: 1.4
  }
}

module.exports = config;
