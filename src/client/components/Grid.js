import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import './Grid.css';

const Grid = (props) => {
  var gridClasses = `Grid gutterSize-${props.gutterSize} verticalAlign-${props.verticalAlign} horizontalAlign-${props.horizontalAlign} direction-${props.direction} width-${props.width}`;
  return (
    <div className={gridClasses} />
  )
}

Grid.defaultProps = {
  gutterSize: 'xs',
  verticalAlign: 'top',
  horizontalAlign: 'left',
  direction: 'ltr',
  width: 'full'
};

Grid.propTypes = {
  gutterSize: PropTypes.oneOf(['xs', 's', 'm', 'l','xl', 'z']),
  verticalAlign: PropTypes.oneOf(['top', 'middle', 'bottom']),
  horizontalAlign: PropTypes.oneOf(['left', 'center', 'right']),
  direction: PropTypes.oneOf(['ltr', 'rtl']),
  width: PropTypes.oneOf(['fitted', 'full'])
};

export default Grid;
