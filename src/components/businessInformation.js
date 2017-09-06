import React from 'react'
import Styled from 'styled-components'
import MenuSection from '../styleComponents/menuSection'

const Container = Styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 10px;
  background-color: dodgerblue;
  border: 5px solid ghostwhite;
  color: ghostwhite;
  min-height: inherit;
`
const BusinessInformation = ({active, data}) =>
  <MenuSection active={active}>
    <Container active={active}>
      <li>{data.headline}</li>
      { data.hours.map(( hour, i) => <li key={i}>{ hour }</li> ) }
    </Container>
  </MenuSection>

export default BusinessInformation
