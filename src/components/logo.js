import React from 'react'
import Styled from 'styled-components'
import Media from '../styleComponents/mediaQueries.js'
import LogoFile from '../assets/logo.png'

const size = 100

const LogoContainer = Styled.div`
  position: fixed;
  z-index: -10;
  top: ${size/6}px;
  left: ${size/9}px;
  background-image: url(${LogoFile});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  width: ${size}px;
  height: ${size}px;
  ${Media.forBigPhonesUp`
    top: ${size/3}px;
    left: ${size/6}px;
    width: ${size*1.15}px;
    height: ${size*1.15}px;
  `}
  ${Media.forTabletPortraitUp`
    top: ${size/3}px;
    left: ${size/4}px;
    width: ${size*1.7}px;
    height: ${size*1.7}px;
  `}
  ${Media.forDesktopUp`
    width: ${size*1.75}px;
    height: ${size*1.75}px;
  `}
`

const Logo = () =>

  <LogoContainer />

export default Logo