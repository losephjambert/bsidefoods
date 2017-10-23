import React from 'react'
import Scroll from 'react-scroll'
import {Styled, injectGlobal} from 'styled-components'

import ScrollContainer from '../components/scrollContainer'
import ScrollItem from '../components/scrollItem'
import FoodItem from '../components/foodItem'
import DrinkItem from '../components/drinkItem'
import BusinessInformation from '../components/businessInformation'
import Colors from '../styleVariables/colors'
import Patio from '../components/patio'

import CenturyItalic from '../assets/fonts/century/CenturySchL-Ital.ttf'
import Cornerstone from '../assets/fonts/cornerstone/Cornerstone.ttf'

import cursor from '../assets/cursor-main.png'

const {yellow, blue, pink, white, brandBlue} = Colors

let scroll = Scroll.animateScroll
let Link = Scroll.Link

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
  body{ 
    background-color: ${white};
    cursor: url(${cursor}), auto;
  }
  ul{ list-style-type: none; }
`

export default class IndexPage extends React.Component {

  handleClick = (e,index, distance) => {
    scroll.scrollTo(distance)
  }

  render(){
    const FOODS = this.props.data.allContentfulFood.edges
    const DRINKS = this.props.data.allContentfulDrink.edges
    const BUSINESS_INFORMATION = this.props.data.allContentfulBusinessInformation.edges

    let b = (BUSINESS_INFORMATION.map(( {node}, i) => <BusinessInformation key={i} data={node} /> ))
    let f = (FOODS.map(( {node}, i) => <FoodItem key={i} data={node} /> ))
    let d = (DRINKS.map(( {node}, i) => <DrinkItem key={i} data={node} /> ))

    return(
      <div>
        <ScrollContainer handleClick={this.handleClick}>
          <ScrollItem
            data={b}
            backgroundColor={blue}
            color={white}
            phrase={{
              title: '',
              color: pink,
              left: '-600px'
            }}/>
          <ScrollItem
            data={f}
            title='Tasty Foods'
            backgroundColor={pink}
            color={brandBlue}
            phrase={{
              title: '',
              color: yellow,
              right: '-520px'
            }}/>
          <ScrollItem
            data={d}
            title='Fine Drinks'
            backgroundColor={yellow}
            color={brandBlue}
            phrase={{
              title: '',
              color: blue,
              left: '-500px'
            }}/>
        </ScrollContainer>
      </div>
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
          operatingHours
          hours
        }
      }
    }
  }
`
