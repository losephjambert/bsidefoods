import React from 'react'
import Link from 'gatsby-link'
import ScrollComponent from '../components/scrollComponent.js'
import FoodItem from '../components/foodItem.js'
import DrinkItem from '../components/drinkItem.js'
import BusinessInformation from '../components/businessInformation.js'

class IndexPage extends React.Component{
  
  render(){

    const foods = this.props.data.allContentfulFood.edges
    const drinks = this.props.data.allContentfulDrink.edges
    const businessInformation = this.props.data.allContentfulBusinessInformation.edges

    return(
      <div>
        { businessInformation.map(( {node}, i) => <BusinessInformation key={i} data={node} /> )}
        { foods.map(( {node}, i) => <FoodItem key={i} data={node} /> )}
        { drinks.map(( {node}, i) => <DrinkItem key={i} data={node} /> )}
      </div>
    )
  }

}

export default IndexPage

export const getContent = graphql`
  query GetContent {
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
    allContentfulBusinessInformation{
      edges {
        node{
          id
          businessName
          headline
          hours
        }
      }
    }
  }
`