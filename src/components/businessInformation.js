import React from 'react'
import Styled from 'styled-components'

const Container = Styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 10px;
  background-color: dodgerblue;
  border: 5px solid ghostwhite;
  color: ghostwhite;
  min-height: inherit;
`

class BusinessInformation extends React.Component{
  
  render(){
    
    const { data } = this.props

    return(
      <Container>
        <li>{data.headline}</li>
        { data.hours.map(( hour, i) => <li key={i}>{ hour }</li> ) }
      </Container>
    )
  }

}

export default BusinessInformation
