import React from 'react'
import styled from 'styled-components'

import Media from '../styleComponents/mediaQueries.js'
import Logo from './logo'
import Pattern from './pattern'

const height = 80

const HeaderContainer = styled.div`
  height: ${height}px;
  ${Media.forTabletPortraitUp`
    height: ${height*1.10+`px`};
  `}
`

const Header = () =>
  <HeaderContainer>
    <Pattern 
      height={height}/>
    <Logo />
  </HeaderContainer>

export default Header