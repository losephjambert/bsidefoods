import React from 'react'
import Styled from 'styled-components'

import Media from '../styleComponents/mediaQueries.js'
import Logo from './logo'
import Pattern from './pattern'

const height = 80

const HeaderContainer = Styled.div`
  height: ${height*3}px;
`

const Header = () =>
  <HeaderContainer>
    <Pattern 
      height={height}/>
    <Logo />
  </HeaderContainer>

export default Header