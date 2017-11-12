import React from 'react'
import Styled from 'styled-components'

import Logo from './logo'
import Pattern from './pattern'

const height = 80

const HeaderContainer = Styled.div`

`

const Header = () =>
  <HeaderContainer>
    <Pattern height={80} top={5}/>
    <Logo/>
  </HeaderContainer>

export default Header