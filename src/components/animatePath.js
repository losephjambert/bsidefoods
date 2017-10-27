import React from 'react'
import Styled, {keyframes} from 'styled-components'

import Media from '../styleComponents/mediaQueries.js'
import Colors from '../styleVariables/colors'
import Cornerstone from '../assets/fonts/cornerstone/Cornerstone.ttf'

const { white, pink, blue, yellow, brandBlue } = Colors

const Text = Styled.text`
  fill: ${brandBlue};
  font-size: 4em;
  text-transform: uppercase;
  font-family: 'Cornerstone';
  letter-spacing: .1em;
  ${Media.forTabletPortraitUp`font-size: 3em;`}
`

const Container = Styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 400px;
  z-index: -30;
`
const animatePath = (props) =>
  <Container>
    <svg id="canvas" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewBox="200 -200 800 600" preserveAspectRatio="none">
    <path id="curve" d="M229.3,2493.54c93.34,0,140,54.84,186.67,109.68s93.34,109.68,186.67,109.68,140-54.84,186.67-109.68S882.64,2493.54,976,2493.54s140,54.84,186.67,109.68,93.34,109.68,186.67,109.68" transform="translate(-229.3 -2493.54)" stroke="blue" strokeWidth="0px" fill="none"/>
    <Text>
      <textPath xlinkHref="#curve">Patio Friends Booze</textPath>
      <animate attributeName="x" dur="20s" values="2000;-1000" repeatCount="indefinite"></animate>
    </Text>
    </svg>
  </Container>
export default animatePath