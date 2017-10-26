import React from 'react'
import Scroll from 'react-scroll'
import {injectGlobal} from 'styled-components'
import Styled from 'styled-components'

import ScrollSystem from '../components/scrollSystem'
import ScrollItem from '../components/scrollItem'
import FoodItem from '../components/foodItem'
import DrinkItem from '../components/drinkItem'
import BusinessInformation from '../components/businessInformation'
import Colors from '../styleVariables/colors'
import Patio from '../components/patio'
import Friends from '../components/friends'
import Booze from '../components/booze'

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

const Container = Styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 10%;
  z-index: -50;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export default class IndexPage extends React.Component {

  handleClick = (e,index, distance) => {
    distance = distance || 500
    scroll.scrollTo(distance, { smooth:true, duration: distance})
  }

  scrollToTop = (e) => {
    scroll.scrollToTop()
  }

  render(){
    const FOODS = this.props.data.allContentfulFood.edges
    const DRINKS = this.props.data.allContentfulDrink.edges
    const BUSINESS_INFORMATION = this.props.data.allContentfulBusinessInformation.edges

    let b = (BUSINESS_INFORMATION.map(( {node}, i) => <BusinessInformation key={i} data={node} /> ))
    let f = (FOODS.map(( {node}, i) => <FoodItem key={i} data={node} /> ))
    let d = (DRINKS.map(( {node}, i) => <DrinkItem key={i} data={node} /> ))

    return(
      <ScrollSystem handleClick={this.scrollToTop}>
        <ScrollItem
          handleClick={this.handleClick}
          className="scroll-item"
          data={b}
          backgroundColor={blue}
          color={white}/>
        <ScrollItem
          handleClick={this.handleClick}
          className="scroll-item"
          data={f}
          title='Tasty Foods'
          backgroundColor={pink}
          color={brandBlue}/>
        <ScrollItem
          handleClick={this.handleClick}
          className="scroll-item"
          data={d}
          title='Fine Drinks'
          backgroundColor={yellow}
          color={brandBlue}/>
      </ScrollSystem>
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
        }
      }
    }
  }
`
