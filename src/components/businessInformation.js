import React from 'react'

class BusinessInformation extends React.Component{
  
  render(){

    const { data } = this.props

    return(
      <div>
        bidness
      </div>
    )
  }

}

export default BusinessInformation

export const getBusinessInformation = graphql`
  query GetBusinessInformation {
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