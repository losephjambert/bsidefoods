import React from 'react'
import Link from 'gatsby-link'
import ScrollContainer from '../components/scrollContainer'
import FoodItem from '../components/foodItem'
import DrinkItem from '../components/drinkItem'
import BusinessInformation from '../components/businessInformation'

function IndexPage({data}){

  const foods = data.allContentfulFood.edges
  const drinks = data.allContentfulDrink.edges
  const businessInformation = data.allContentfulBusinessInformation.edges

  return(
    <ScrollContainer>
      { businessInformation.map(( {node}, i) => <BusinessInformation key={i} data={node} /> )}
      { foods.map(( {node}, i) => <FoodItem key={i} data={node} /> )}
      { drinks.map(( {node}, i) => <DrinkItem key={i} data={node} /> )}
    </ScrollContainer>
  )

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