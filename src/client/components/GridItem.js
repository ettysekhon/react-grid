import React, { Component, PropTypes } from 'react';
import './Grid.css';
import widths from '../styles/widths/widths.js';
import '../styles/widths/widths.css';

class GridItem extends Component {
  render() {
    var { props } = this;
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
}

GridItem.propTypes = {
  breakpointSizes: PropTypes.arrayOf(PropTypes.shape({
    breakpoint: PropTypes.oneOf(widths.breakpoints).isRequired,
    size: PropTypes.oneOf(widths.sizes).isRequired
  })).isRequired
};

export default GridItem;
