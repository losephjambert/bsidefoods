import React from 'react'
import Link from 'gatsby-link'
import ScrollComponent from '../components/scrollComponent'
import FoodItem from '../components/foodItem'
import DrinkItem from '../components/drinkItem'
import BusinessInformation from '../components/businessInformation'
import MenuSection from '../styleComponents/menuSection'


class IndexPage extends React.Component{
  
  render(){

    const foods = this.props.data.allContentfulFood.edges
    const drinks = this.props.data.allContentfulDrink.edges
    const businessInformation = this.props.data.allContentfulBusinessInformation.edges

    return(
      <div>
        <ScrollComponent>
          <MenuSection>
            { foods.map(( {node}, i) => <FoodItem key={i} data={node} /> )}
          </MenuSection>
          <MenuSection>
            { drinks.map(( {node}, i) => <DrinkItem key={i} data={node} /> )}
          </MenuSection>
          <MenuSection>
            { businessInformation.map(( {node}, i) => <BusinessInformation key={i} data={node} /> )}
          </MenuSection>
        </ScrollComponent>
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