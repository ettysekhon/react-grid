import React, { Component, PropTypes } from 'react';
import './Grid.css';
import widths from '../styles/widths/widths.js';
import '../styles/widths/widths.css';
import classnames from 'classnames';

class GridItem extends Component {
  render() {
    var { props } = this;
    var gridItemsClasses = classnames(props.breakpointSizes.reduce((previous, bps) => {
      var breakpoint = bps.breakpoint || 'none';
      var size = bps.size;
      previous.push([`${breakpoint}-${size}`]);
      return previous;
    }, [
      'gridItem'
    ]));

    return (
      <div
        className={gridItemsClasses}
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
