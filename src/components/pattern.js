import React from 'react'
import styled from 'styled-components'
import wave from '../assets/wave.svg'

const PatternContainer = styled.div`
  background-image: url(${wave});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  height: 50px;
`

const Pattern = () =>
  <PatternContainer />

export default Pattern