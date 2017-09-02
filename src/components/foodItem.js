import React from 'react'
import Styled from 'styled-components'

const Container = Styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 10px;
  background-color: lightpink;
  border: 5px solid ghostwhite;
  color: ghostwhite;
  min-height: inherit;
`

class FoodItem extends React.Component{
  
  render(){

    const data = this.props.data

    return(
      <Container>
        <li>{data.name}</li>
        { data.ingredients.map(( ingredient, i) => <li key={i}>{ ingredient }</li> ) }
        { data.labels.map(( label, i) => 
          label.toUpperCase() !== 'NO'
          ? <li key={i}>{ label }</li>
          : null
        )}
        <li> { data.prices.map(( price, i) => <span key={i}>{ price }</span> ) } </li>
      </Container>
    )
  }

}

export default FoodItem
