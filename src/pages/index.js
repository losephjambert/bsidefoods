import React from 'react'
import Link from 'gatsby-link'
import ScrollContainer from '../components/scrollContainer'
import ScrollContainerObservable from '../components/scrollContainerObservable'

class IndexPage extends React.Component{
  
  render(){

    const foods = this.props.data.allContentfulFood.edges
    const drinks = this.props.data.allContentfulDrink.edges
    const businessInformation = this.props.data.allContentfulBusinessInformation.edges

    return(
      <div>
        <ScrollContainerObservable
          values={["State.", "Should.", "Be.", "Synchronous."]} 
          onSelect={value => console.log(value)}
          onScroll={(e) => console.log(e)}/>
        <ScrollContainer foods={foods} drinks={drinks} businessInformation={businessInformation}/>
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