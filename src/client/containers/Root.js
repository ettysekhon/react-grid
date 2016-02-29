import React, { Component } from 'react'
import Grid from '../components/Grid'
import GridItem from '../components/GridItem'

class Root extends Component {

  render () {
    const breakpointSizesOneOfTwo = [{
      breakpoint: 'mobile',
      size: '1-of-1'
    }, {
      breakpoint: '',
      size: '1-of-2'
    }];

    const breakpointSizesOneOfThree = [{
      breakpoint: 'mobile',
      size: '1-of-1'
    }, {
      breakpoint: 'desktop',
      size: '1-of-3'
    }];

    const breakpointSizesOneOfFour = [{
      breakpoint: 'mobile',
      size: '1-of-1'
    }, {
      breakpoint: 'none',
      size: '1-of-4'
    }];

    return (
      <div>
        <Grid>
          <GridItem breakpointSizes={breakpointSizesOneOfTwo}>
            <div className='box'>1</div>
          </GridItem>
          <GridItem breakpointSizes={breakpointSizesOneOfTwo}>
            <div className='box'>2</div>
          </GridItem>
        </Grid>

        <Grid>
          <GridItem breakpointSizes={breakpointSizesOneOfThree}>
            <div className='box'>3</div>
          </GridItem>
          <GridItem breakpointSizes={breakpointSizesOneOfThree}>
            <div className='box'>4</div>
          </GridItem>
          <GridItem breakpointSizes={breakpointSizesOneOfThree}>
            <div className='box'>5</div>
          </GridItem>
        </Grid>
        <Grid>
          <GridItem breakpointSizes={breakpointSizesOneOfFour}>
            <div className='box'>6</div>
          </GridItem>
          <GridItem breakpointSizes={breakpointSizesOneOfFour}>
            <div className='box'>7</div>
          </GridItem>
          <GridItem breakpointSizes={breakpointSizesOneOfFour}>
            <div className='box'>8</div>
          </GridItem>
          <GridItem breakpointSizes={breakpointSizesOneOfFour}>
            <div className='box'>9</div>
          </GridItem>
        </Grid>

        <Grid>
          <GridItem breakpointSizes={[{ breakpoint: 'desktop', size: '2-of-3' }]}>
            <div className='box'>
              <Grid>
                <GridItem breakpointSizes={breakpointSizesOneOfTwo}>
                  <div className='box'>1</div>
                </GridItem>
                <GridItem breakpointSizes={breakpointSizesOneOfTwo}>
                  <div className='box'>2</div>
                </GridItem>
                <GridItem breakpointSizes={breakpointSizesOneOfThree}>
                  <div className='box'>3</div>
                </GridItem>
                <GridItem breakpointSizes={breakpointSizesOneOfThree}>
                  <div className='box'>4</div>
                </GridItem>
                <GridItem breakpointSizes={breakpointSizesOneOfThree}>
                  <div className='box'>5</div>
                </GridItem>
              </Grid>
            </div>
          </GridItem>
          <GridItem breakpointSizes={[{ breakpoint: 'desktop', size: '1-of-3' }]}>
            <div className='box' style={{height: 94}}></div>
          </GridItem>
        </Grid>

      </div>
    )
  }
}

export default Root
