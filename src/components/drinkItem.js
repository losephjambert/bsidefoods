import React from 'react'
import styled from 'styled-components'

const Container = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 10px;
  background-color: palegoldenrod;
  border: 5px solid ghostwhite;
  color: ghostwhite;
`

class DrinkItem extends React.Component{
  
  render(){

    const data = this.props.data

    return(
      <Container>
        <li>{data.name}</li>
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

export default DrinkItem
