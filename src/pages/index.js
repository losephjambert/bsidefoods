import React from 'react'
import Link from 'gatsby-link'
import ScrollComponent from '../components/scrollComponent.js'
import FoodItem from '../components/foodItem.js'
import DrinkItem from '../components/drinkItem.js'
import BusinessInformation from '../components/businessInformation.js'

class IndexPage extends React.Component{
  
  render(){

    return(
      <div>
        <BusinessInformation />
        <FoodItem />
        <DrinkItem />
      </div>
    )
  }

}

export default IndexPage