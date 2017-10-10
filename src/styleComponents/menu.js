import Styled from 'styled-components'

import Media from '../styleComponents/mediaQueries'

const Menu = Styled.ul`
  max-width: 600px;
  margin: 0 auto 50px;
  padding: 0;
  font-family: ${props => props.headline ? 'Cornerstone' : 'Century'};
  ${Media.forTabletPortraitUp`
    padding: 0 15px;
  `}
`

export default Menu
