import React from 'react'
import Styled from 'styled-components'

const Element = Styled.section`
  position: fixed;
  width: 100%;
  max-width: 750px;
  min-height: 600px;
  transition: 300ms ease-in-out;
  opacity: ${props => props.active ? .5 : 1};
  position: ${props => props.active ? 'relative' : 'fixed'}
  &.is-fixed{position:fixed;}
  &.is-relative{position:relative;}
`

const MenuSection = ({active,children}) =>
  <Element active={active}>{children}</Element>

export default MenuSection