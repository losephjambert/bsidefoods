import React from 'react'
import Link from 'gatsby-link'
import ScrollComponent from '../components/scrollComponent.js'

class IndexPage extends React.Component{
  
  render(){
    const foods = this.props.data.allContentfulFood.edges
    const drinks = this.props.data.allContentfulDrink.edges
    const information = this.props.data.allContentfulBusinessInformation.edges

    return(
      <div>
        <ScrollComponent 
          foods={foods}
          drinks={drinks}
          />
        {/*<Link to="/page-2/">Menu</Link>*/}
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
          price
          ingredients
          labels{
            label
          }
        }
      }
    }
    allContentfulDrink{
      edges {
        node{
          id
          name
          price
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