import React from 'react'
import Link from 'gatsby-link'
import ScrollContainer from '../components/scrollContainer'

class IndexPage extends React.Component{
  
  render(){

    const foods = this.props.data.allContentfulFood.edges
    const drinks = this.props.data.allContentfulDrink.edges
    const businessInformation = this.props.data.allContentfulBusinessInformation.edges

    return(
      <ScrollContainer foods={foods} drinks={drinks} businessInformation={businessInformation}/>
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