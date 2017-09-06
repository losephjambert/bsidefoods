import React from 'react'
import Styled from 'styled-components'
import MenuSection from '../styleComponents/menuSection'

const Container = Styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 10px;
  background-color: lightpink;
  border: 5px solid ghostwhite;
  color: ghostwhite;
  min-height: inherit;
`

const FoodItem = ({active, data}) =>
  <MenuSection active={active}>
    <Container active={active}>
      <li>{data.name}</li>
      { data.ingredients.map(( ingredient, i) => <li key={i}>{ ingredient }</li> ) }
      { data.labels.map(( label, i) => 
        label.toUpperCase() !== 'NO'
        ? <li key={i}>{ label }</li>
        : null
      )}
      <li> { data.prices.map(( price, i) => <span key={i}>{ price }</span> ) } </li>
    </Container>
  </MenuSection>

export default FoodItem
