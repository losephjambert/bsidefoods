import React from 'react'
import {styled, ThemeProvider} from 'styled-components'

import ScrollContainer from '../components/scrollContainer'
import FoodItem from '../components/foodItem'
import DrinkItem from '../components/drinkItem'
import BusinessInformation from '../components/businessInformation'
import AppTheme from '../styleComponents/appTheme'
import Menu from '../styleComponents/menu'
import Content from './content'

export default class IndexPage extends React.Component {

  state={
    clickedIndex:0 ,
    data: []
  }

  componentDidMount(){
    this.normalizeData()
  }

  handleClick = (e,index) => {
    console.log('clicked',index)
    this.setState(prevState=>({clickedIndex:index}))
  }

  normalizeData = (nodes) => {
    const foods = this.props.data.allContentfulFood.edges
    const drinks = this.props.data.allContentfulDrink.edges
    const biz = this.props.data.allContentfulBusinessInformation.edges
    let b = (biz.map(( {node}, i) => <BusinessInformation key={i} data={node} /> ))
    let f = (foods.map(( {node}, i) => <FoodItem key={i} data={node} /> ))
    let d = (drinks.map(( {node}, i) => <DrinkItem key={i} data={node} /> ))
    let arr=[b,f,d]
    this.setState(prevSate=>({ data:arr }))
  }

  render(){
    if(Object.keys(this.state.data).length > 0){

      const {data}=this.state
      return(
        <ThemeProvider theme={AppTheme}>
          <ScrollContainer handleClick={this.handleClick}>
            {data.map((a)=>a)}
          </ScrollContainer>
        </ThemeProvider>
      )
    }

    else{return null}
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
