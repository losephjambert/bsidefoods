import React from 'react'
import Scroll from 'react-scroll'
import {injectGlobal} from 'styled-components'
import Styled from 'styled-components'
import moment from 'moment'

import ScrollSystem from '../components/scrollSystem'
import ScrollItem from '../components/scrollItem'
import FoodItem from '../components/foodItem'
import DrinkItem from '../components/drinkItem'
import BusinessInformation from '../components/businessInformation'
import Colors from '../styleVariables/colors'

import CenturyItalic from '../assets/fonts/century/CenturySchL-Ital.ttf'
import Century from '../assets/fonts/century/CenturySchL-Roma.ttf'
import CenturyBold from '../assets/fonts/century/CenturySchL-Bold.ttf'
import Cornerstone from '../assets/fonts/cornerstone/Cornerstone.ttf'

import cursor from '../assets/cursor-main.png'
import cursorHover from '../assets/cursor.png'
import underline from '../assets/underline.svg'

const {yellow, blue, pink, white, brandBlue} = Colors

let scroll = Scroll.animateScroll
let Link = Scroll.Link

injectGlobal`
  @font-face {
    font-family: 'Century Italic';
    src: url(${CenturyItalic});
  }
  @font-face {
    font-family: 'Century';
    src: url(${Century});
  }
  @font-face {
    font-family: 'Century Bold';
    src: url(${CenturyBold});
  }
  @font-face {
    font-family: 'Cornerstone';
    src: url(${Cornerstone});
  }

  ::-moz-selection { 
    background: ${brandBlue};
    color: ${white};
  }
  ::selection { 
    background: ${brandBlue};
    color: ${white};
  }

  *{ box-sizing: border-box; }
  html{
    font-size: 18px;
  }
  body{ 
    background-color: ${white};
    cursor: url(${cursor}), auto;
  }

  ul{ list-style-type: none; }

  a{
    color: ${white};
    transition: 300ms;
    text-decoration: none;
    position: relative;
    &:active{
      color: ${white};}
    &:hover{
      color: ${brandBlue};
      cursor: url(${cursorHover}), auto; 
      &::after{
        opacity: 1;
      }
    }
    &::after{
      transition: inherit;
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-image: url(${underline});
      opacity: 0;
    }
  }
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

  state={
    operatingHours: []
  }

  componentWillMount(){
    let arr = []
    this.props.data.allContentfulBusinessInformation.edges[0].node.businessHours.forEach(function(element) {
      arr.push(element.title)
    }, this)
    this.handleOpenHours(arr)
  }

  handleClick = (e,index, distance) => {
    distance = distance || 0
    scroll.scrollTo(distance, { smooth:true, duration: 1000})
  }

  scrollToTop = (e) => {
    scroll.scrollToTop( {duration: 1000} )
  }

  handleOpenHours(arr){
    const daysOfTheWeek = [ 'SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY' ]
    const checkArray = [ 'SU', 'MO', 'TUE', 'WE', 'TH', 'FR', 'SA' ]
    let text = arr.join('').toUpperCase()
    let match
    let days = []
    let day = {
      text: '',
      isOpen: false
    }
    let currentDay={}
    let today=moment().format('dddd').toUpperCase()

    for(let i=checkArray.length-1;i>=0;i--){
      match = text.includes(checkArray[i])
      if(match && today===daysOfTheWeek[i]){
        currentDay.name=daysOfTheWeek[i]
      }
    }

    for(let i=arr.length-1;i>=0;i--){
      day.text=arr[i]
      day.isOpen=false
      days.push(day)
      if(arr[i].toUpperCase().includes(currentDay.name)){
        day.isOpen=true
      }
      day={}
    }

    this.setState(prevState=>({operatingHours: days}))

  }

  render(){
    const FOODS = this.props.data.allContentfulFoodMenu.edges[0].node.availableDishes
    const DRINKS = this.props.data.allContentfulDrinkMenu.edges[0].node.availableDrinks
    const BUSINESS_INFORMATION = this.props.data.allContentfulBusinessInformation.edges
    const FOOD_TITLE = this.props.data.allContentfulFoodMenu.edges[0].node.title
    const DRINK_TITLE = this.props.data.allContentfulDrinkMenu.edges[0].node.title

    let b = (BUSINESS_INFORMATION.map(( {node}, i) => <BusinessInformation key={i} data={ {businessName: node.businessName, headline: node.headline, operatingHours: this.state.operatingHours, address: node.address, addressLink: node.googleMapsAddress, id: node.id} } /> ))
    let f = (FOODS.map(( node, i) => <FoodItem key={i} data={node} /> ))
    let d = (DRINKS.map(( node, i) => <DrinkItem key={i} data={node} /> ))

    return(
      <div>
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
            title={FOOD_TITLE}
            backgroundColor={pink}
            color={brandBlue}/>
          <ScrollItem
            handleClick={this.handleClick}
            className="scroll-item"
            data={d}
            title={DRINK_TITLE}
            backgroundColor={yellow}
            color={brandBlue}/>
        </ScrollSystem> 
      </div>
    )
  }
}

export const getContent = graphql`
  query GetContent {
    allContentfulBusinessInformation{
      edges {
        node{
          id
          businessName
          headline
          address
          googleMapsAddress
          businessHours{
            title
          }
        }
      }
    }
    allContentfulDrinkMenu{
      edges {
        node{
          id
          title
          availableDrinks{
            id
            name
            labels
            prices
          }
        }
      }
    }
    allContentfulFoodMenu{
      edges {
        node{
          id
          title
          availableDishes{
            id
            name
            ingredients
            labels
            prices
          }
        }
      }
    }
  }
`
