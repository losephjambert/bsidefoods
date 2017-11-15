import React from 'react'
import Styled from 'styled-components'

import Media from '../styleComponents/mediaQueries.js'
import Colors from '../styleVariables/colors'

const { white, pink, blue, yellow, brandBlue } = Colors
const size = 160

const Container = Styled.div`
  position: fixed;
  top: 220px;
  left: 60px;
  z-index: 0;
  width: 50px;
  opacity: 0;
  ${Media.forTabletPortraitUp`
    opacity: 1;
  `}

  svg{
    & > g > path {
      transition: 300ms;
      ${props=>props.index===0 ? `fill:${blue};`: null}
      ${props=>props.index===1 ? `fill:${pink};`: null}
      ${props=>props.index===2 ? `fill:${yellow};`: null}
    }
  }
`
const Foods = (props) =>
  <Container index={props.index}>
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.43 237.88">
      <title>foods</title>
      <g>
        <path d="M8167.83,2630.34v-11.85h59.43v35.64h-11.85v-23.79h-11.94v17.9h-11.85v-17.9h-23.79Z" transform="translate(-8167.83 -2618.49)"/>
        <path d="M8221.38,2705H8173.8a5.92,5.92,0,0,1-6-5.89v-23.79a6.06,6.06,0,0,1,6-6h47.58a5.92,5.92,0,0,1,5.89,6v23.79A5.79,5.79,0,0,1,8221.38,2705Zm-41.69-23.79v11.94h35.72v-11.94h-35.72Z" transform="translate(-8167.83 -2618.49)"/>
        <path d="M8221.38,2755.9H8173.8a5.92,5.92,0,0,1-6-5.89v-23.79a6.06,6.06,0,0,1,6-6h47.58a5.92,5.92,0,0,1,5.89,6V2750A5.78,5.78,0,0,1,8221.38,2755.9Zm-41.69-23.79V2744h35.72v-11.93h-35.72Z" transform="translate(-8167.83 -2618.49)"/>
        <path d="M8221.38,2806.78H8173.8a5.92,5.92,0,0,1-6-5.89v-29.76h59.43v29.76A5.78,5.78,0,0,1,8221.38,2806.78ZM8179.69,2783v11.93h35.72V2783h-35.72Z" transform="translate(-8167.83 -2618.49)"/>
        <path d="M8209.44,2844.51h6v-11.93h-11.94v17.9a5.78,5.78,0,0,1-5.89,5.89H8173.8a5.92,5.92,0,0,1-6-5.89v-23.79a6.06,6.06,0,0,1,6-6h11.85v11.85h-6v11.93h11.93v-17.82a5.69,5.69,0,0,1,1.69-4.19,5.82,5.82,0,0,1,4.27-1.77h23.79a5.92,5.92,0,0,1,5.89,6v23.79a5.78,5.78,0,0,1-5.89,5.89h-11.94v-11.85Z" transform="translate(-8167.83 -2618.49)"/>
      </g>
    </svg>
  </Container>

export default Foods
