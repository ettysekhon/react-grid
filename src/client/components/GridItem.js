import React, { PropTypes } from 'react';
import './Grid.css';
import widths from '../styles/widths/widths.js';
import '../styles/widths/widths.css';

const GridItem = (props) => {
  var componentAttributes = props.breakpointSizes.reduce((previous, bps, i) => {
    var breakpoint = bps.breakpoint || 'none';
    var size = bps.size;
    previous[`data-breakpoint-${breakpoint}`] = size;
    return previous;
  }, {
    'data-component': 'GridItem'
  });

  return (
    <div
      {...componentAttributes}
      >{props.children}</div>
  )
}

GridItem.propTypes = {
  breakpointSizes: PropTypes.array(PropTypes.shape({
    breakpoint: PropTypes.oneOf(widths.breakpoints),
    size: PropTypes.oneOf(widths.sizes)
  }))
};

export default GridItem;
