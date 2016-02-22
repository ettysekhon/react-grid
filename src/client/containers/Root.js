import React, { Component } from 'react'
import Grid from '../components/Grid'
import GridItem from '../components/GridItem'

class Root extends Component {

  render () {
    const breakpointSizes = [{
      breakpoint: 'mobile',
      size: '1-of-1'
    }, {
      breakpoint: '',
      size: '1-of-2'
    }];


    return (
      <Grid>
        <GridItem breakpointSizes={breakpointSizes}>
          <div className="box">Box 1</div>
        </GridItem>
        <GridItem breakpointSizes={breakpointSizes}>
          <div className="box">Box 2</div>
        </GridItem>
      </Grid>
    )
  }
}

export default Root
