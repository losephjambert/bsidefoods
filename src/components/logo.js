import React from 'react'
import styled from 'styled-components'
import Media from '../styleComponents/mediaQueries.js'
import LogoFile from '../assets/logo.png'

const size = 100

const LogoContainer = styled.div`
  background-image: url(${LogoFile});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  width: ${size}px;
  height: ${size}px;
  ${Media.forTabletPortraitUp`
    width: ${size*1.25}px;
    height: ${size*1.25}px;
  `}
  ${Media.forTabletLandscapeUp`
    width: ${size*1.5}px;
    height: ${size*1.5}px;
  `}
  ${Media.forDesktopUp`
    width: ${size*2}px;
    height: ${size*2}px;
  `}
`

const Logo = () =>
  <LogoContainer />

export default Logo