import React from 'react'
import {Styled, injectGlobal} from 'styled-components'

import ScrollContainer from '../components/scrollContainer'
import ScrollItem from '../components/scrollItem'
import FoodItem from '../components/foodItem'
import DrinkItem from '../components/drinkItem'
import BusinessInformation from '../components/businessInformation'
import Colors from '../styleVariables/colors'

import CenturyItalic from '../assets/fonts/century/CenturySchL-Ital.ttf'
import Cornerstone from '../assets/fonts/cornerstone/Cornerstone.ttf'

const {yellow, blue, pink, white, brandBlue} = Colors

injectGlobal`
  @font-face {
    font-family: 'Century';
    src: url(${CenturyItalic});
  }
  @font-face {
    font-family: 'Cornerstone';
    src: url(${Cornerstone});
  }
  *{ box-sizing: border-box; }
  html{ font-size: 18px; }
  body{ background-color: ${white}}
  ul{ list-style-type: none; }
`

export default class IndexPage extends React.Component {

  state={
    clickedIndex:0
  }

  handleClick = (e,index) => {
    console.log('clicked',index)
    this.setState(prevState=>({clickedIndex:index}))
  }

  render(){
    const FOODS = this.props.data.allContentfulFood.edges
    const DRINKS = this.props.data.allContentfulDrink.edges
    const BUSINESS_INFORMATION = this.props.data.allContentfulBusinessInformation.edges

    let b = (BUSINESS_INFORMATION.map(( {node}, i) => <BusinessInformation key={i} data={node} /> ))
    let f = (FOODS.map(( {node}, i) => <FoodItem key={i} data={node} /> ))
    let d = (DRINKS.map(( {node}, i) => <DrinkItem key={i} data={node} /> ))

    return(
      <ScrollContainer handleClick={this.handleClick}>
        
        <ScrollItem
          data={b}
          backgroundColor={blue}
          color={white}/>
        <ScrollItem
          data={f}
          title="Foods"
          backgroundColor={pink}
          color={brandBlue}/>
        <ScrollItem
          data={d}
          title="Drinks"
          backgroundColor={yellow}
          color={brandBlue}/>

      </ScrollContainer>
    )
  }
}

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
