import Styled from 'styled-components'

const Menu = Styled.ul`
  box-sizing: border-box;
  list-style-type: none;
  margin: 0;
  padding: 10px;
  background-color: ${props => props.backgroundColor};
  border: 5px solid ghostwhite;
  color: ghostwhite;
  min-height: inherit;
  min-height: 600px;
  box-shadow: ${props => props.active ? '0 0 5px 0 black' : '0 0 0 0 black'};
  width: 100%;
  &:hover{cursor:pointer;}
  font-family: ${props => props.headline ? 'Cornerstone' : 'Century'};
  ul{
    width: 50%;
    margin: auto;
    background-color:mediumseagreen;}
`

export default Menu
