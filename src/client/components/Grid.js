import React, { PropTypes } from 'react';
import './Grid.css';

const Grid = (props) => {
  return (
    <div
      data-component='Grid'
      data-gutter-size={props.gutterSize}
      data-v-align={props.verticalAlign}
      data-h-align={props.horizontalAlign}
      data-direction={props.direction}
      data-width={props.width}>{props.children}</div>
  )
}

Grid.defaultProps = {
  gutterSize: 'm',
  verticalAlign: 'top',
  horizontalAlign: 'left',
  direction: 'ltr',
  width: 'full'
};

Grid.propTypes = {
  gutterSize: PropTypes.oneOf['xs', 's', 'm', 'l','xl', 'z'],
  verticalAlign: PropTypes.oneOf['top', 'middle', 'bottom'],
  horizontalAlign: PropTypes.oneOf['left', 'center', 'right'],
  direction: PropTypes.oneOf['ltr', 'rtl'],
  width: PropTypes.oneOf['fitted', 'full']
};

export default Grid;
