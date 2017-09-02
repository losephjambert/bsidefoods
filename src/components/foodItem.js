import React from 'react'

class FoodItem extends React.Component{
  
  render(){

    const { data } = this.props

    return(
      <div>
        foods
      </div>
    )
  }

}

export default FoodItem

export const getFood = graphql`
  query GetFood {
    allContentfulFood{
      edges {
        node{
          id
          name
          ingredients
          labels
          prices
        }
      }
    }
  }
`