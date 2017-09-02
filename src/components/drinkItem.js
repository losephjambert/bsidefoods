import React from 'react'

class DrinkItem extends React.Component{
  
  render(){

    const { data } = this.props

    return(
      <div>
        drinks
      </div>
    )
  }

}

export default DrinkItem

export const getDrink = graphql`
  query GetDrink {
    allContentfulDrink{
      edges {
        node{
          id
          name
          labels
          prices
        }
      }
    }
  }
`