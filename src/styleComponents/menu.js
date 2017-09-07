import Styled from 'styled-components'

const Menu = Styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 10px;
  background-color: ${props => props.backgroundColor};
  border: 5px solid ghostwhite;
  color: ghostwhite;
  min-height: inherit;
  width: 100%;
  max-width: 750px;
  min-height: 600px;
  transition: 300ms ease-in-out;
  box-shadow: ${props => props.active ? '0 0 5px 0 black' : '0 0 0 0 black'};
  &:hover{cursor:pointer;}
`

export default Menu