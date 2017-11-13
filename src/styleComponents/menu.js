import Styled from 'styled-components'

import Media from '../styleComponents/mediaQueries'

const Menu = Styled.ul`
  max-width: 600px;
  margin: 0 auto 40px;
  padding: 0;
  ${Media.forTabletPortraitUp`
    padding: 0 15px;
  `}
`

export default Menu
