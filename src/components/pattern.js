import React from 'react'
import styled from 'styled-components'
import Media from '../styleComponents/mediaQueries.js'
import wave from '../assets/wave.svg'

const PatternContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-image: url(${wave});
    background-size: cover;
    background-position: center;
    background-repeat-y: no-repeat;
  height: ${props => props.height+`px` || 'initial'};

  ${Media.forTabletPortraitUp`
    height: ${props => props.height*1.20+`px` || 'initial'};
  `}
  ${Media.forTabletLandscapeUp`
    height: ${props => props.height*1.30+`px` || 'initial'};
  `}
`

const Pattern = (props) =>
  <PatternContainer 
    height={props.height}/>

export default Pattern