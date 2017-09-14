import React from 'react'
import {Styled, injectGlobal} from 'styled-components'

import ScrollContainer from '../components/scrollContainer'
import ScrollItem from '../components/scrollItem'
import FoodItem from '../components/foodItem'
import DrinkItem from '../components/drinkItem'
import BusinessInformation from '../components/businessInformation'

import CenturyItalic from '../assets/fonts/century/CenturySchL-Ital.ttf'
import Cornerstone from '../assets/fonts/cornerstone/Cornerstone.ttf'

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
  body{ background-color: hsla(50, 100%, 99%, 1)}
  ul{ list-style-type: none; }
`

export default class IndexPage extends React.Component {

  state={
    clickedIndex:0 ,
    data: []
  }

  componentDidMount(){
    this.handleData()
  }

  handleClick = (e,index) => {
    console.log('clicked',index)
    this.setState(prevState=>({clickedIndex:index}))
  }

  handleData = (nodes) => {
    const FOODS = this.props.data.allContentfulFood.edges
    const DRINKS = this.props.data.allContentfulDrink.edges
    const BUSINESS_INFORMATION = this.props.data.allContentfulBusinessInformation.edges

    let b = (BUSINESS_INFORMATION.map(( {node}, i) => <BusinessInformation key={i} data={node} /> ))
    let f = (FOODS.map(( {node}, i) => <FoodItem key={i} data={node} /> ))
    let d = (DRINKS.map(( {node}, i) => <DrinkItem key={i} data={node} /> ))
    let componentArray=[b,f,d]

    this.setState(prevSate=>({ data:componentArray }))
  }

  render(){
    if(Object.keys(this.state.data).length > 0){

      const {data,styles}=this.state

      return(
        <ScrollContainer handleClick={this.handleClick}>
          {data.map((datum,index)=>
            <ScrollItem key={index} datum={datum}/>
          )}
        </ScrollContainer>
      )
    }

    else{ return null }
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
