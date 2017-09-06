import Styled from 'styled-components'

const Menu = Styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 10px;
  background-color: ${props => props.backgroundColor};
  border: 5px solid ghostwhite;
  color: ghostwhite;
  min-height: inherit;
  position: fixed;
  width: 100%;
  max-width: 750px;
  min-height: 600px;
  transition: 300ms ease-in-out;
  box-shadow: ${props => props.active ? '0 0 5px 0 black' : '0 0 0 0 black'};
  position: ${props => props.active ? 'relative' : 'fixed'}
  &.is-fixed{position:fixed;}
  &.is-relative{position:relative;}
`

export default Menu