import React from 'react'
import Styled from 'styled-components'
import Media from '../styleComponents/mediaQueries.js'
import LogoFile from '../assets/logo.png'
import Colors from '../styleVariables/colors'

const { white, pink, blue, yellow, brandBlue } = Colors

const Container = Styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${white};
  transition: 300ms;
`

const Loader = (props) =>

  <Container loading={props.loading}/>

export default Loader