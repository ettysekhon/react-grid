const config = require('../config');
const baseFontSize = config.spacing.baseFontSize;
const baseLineHeightRatio = config.spacing.baseLineHeightRatio;
const baseLineHeight = baseFontSize * baseLineHeightRatio;

const getPixelSize = (size) => {
  return `${size}px`;
};

// use for margins & paddings
const spacing = {
  'spacing-xxxs':   getPixelSize(baseLineHeight * 0.125),
  'spacing-xxs':    getPixelSize(baseLineHeight * 0.25),
  'spacing-xs':     getPixelSize(baseLineHeight * 0.5),
  'spacing-s':      getPixelSize(baseLineHeight * 0.75),
  'spacing-m':      getPixelSize(baseLineHeight),
  'spacing-l':      getPixelSize(baseLineHeight * 1.25),
  'spacing-xl':     getPixelSize(baseLineHeight * 1.5),
  'spacing-xxl':    getPixelSize(baseLineHeight * 2),
  'spacing-xxxl':   getPixelSize(baseLineHeight * 4),
  'spacing-base':   getPixelSize(baseFontSize)
};

module.exports = spacing;
