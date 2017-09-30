import Styled from 'styled-components'

const Menu = Styled.ul`
  max-width: 600px;
  margin: 0 auto;
  font-family: ${props => props.headline ? 'Cornerstone' : 'Century'};
`

export default Menu
