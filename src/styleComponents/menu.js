import Styled from 'styled-components'

const Menu = Styled.ul`
  max-width: 600px;
  margin: 0 auto;
  padding: 25px;
  font-family: ${props => props.headline ? 'Cornerstone' : 'Century'};
  &:hover{cursor:pointer;}
`

export default Menu
