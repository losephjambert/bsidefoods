import React from 'react'
import Link from 'gatsby-link'
import ScrollContainer from '../components/scrollContainer'
import ScrollItem from '../components/scrollItem'
import FoodItem from '../components/foodItem'
import DrinkItem from '../components/drinkItem'
import BusinessInformation from '../components/businessInformation'

class IndexPage extends React.Component{

  constructor(props){
    super(props)
    this.state={
      currentIndex: 0
    }
  }
  
  render(){

    const foods = this.props.data.allContentfulFood.edges
    const drinks = this.props.data.allContentfulDrink.edges
    const businessInformation = this.props.data.allContentfulBusinessInformation.edges

    return(
      <ScrollContainer>
        { businessInformation.map(( {node}, i) => <BusinessInformation key={i} data={node} /> )}
        { foods.map(( {node}, i) => <FoodItem key={i} data={node} /> )}
        { drinks.map(( {node}, i) => <DrinkItem key={i} data={node} /> )}
      </ScrollContainer>

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