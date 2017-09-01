import React from 'react'
import Logo from './logo'
import Pattern from './pattern'
import styled from 'styled-components'

const LogoContainer = styled.div`
  position: fixed;
  top: 50px;
  left: 50px;
`
const PatternContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0;
`

const Header = () =>
  <div>
    <Pattern />
    <LogoContainer>
      <Logo />
    </LogoContainer>
  </div>

export default Header