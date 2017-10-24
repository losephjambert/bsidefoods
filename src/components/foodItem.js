import React from 'react'
import Styled from 'styled-components'

import Colors from '../styleVariables/colors'
import Menu from '../styleComponents/menu.js'
import Media from '../styleComponents/mediaQueries'

const {white, pink, yellow, blue} = Colors

const Wrap = Menu.extend`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`

const Name = Styled.li`
  padding-left: 2px;
  text-transform: uppercase;
  letter-spacing: .025em;
  font-weight: bold;
  display: inline-flex;
  overflow: hidden;
  position: relative;
  flex: 1 0 auto;
  font-size: 1em;
  &::after{
    content: '. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ';
    position: absolute;
    top: 0px;
    width: 1500px;
    height: 20px;
    margin-left: 0.5em;
  }
`
const Price = Styled.li`
  font-weight: bold;
  display: inline-flex;
  font-size: 1em;
  &::before{
    content:'';
    width: 0.5em;
    height: 100%;
    position: relative;
    left: -1px;
    background-color: ${pink};
  }
  & > span{
    &:nth-of-type(2){
      &::before{
        content: '/';
      }
    }
  }
`
const Labels = Styled.div`
  padding-left: 10px;
`
const Label = Styled.li`
  width: 100%;
  flex: 1 0 100%;
  font-size: 0.9em;
  text-transform: lowercase;
  font-weight: bold;
  margin-top: 5px;
  &::before,
  &::after{
    content: '~';
  }
`
const Ingredients = Styled.div`
  width: 100%;
  flex:  1 0 100%;
  margin-top: 5px;
  padding-left: 10px;
`
const Ingredient = Styled.li`
  display: inline-flex;
  font-size: 0.9em;
  text-transform: lowercase;
  margin-top: 5px;
  &:not(:last-child){
    margin-right: 5px;
    &::after{ content: ','; }
  }
`

function FoodItem ({style, active, data, activate, index}) {
  return(
    <Wrap>
      <Name>{data.name}</Name>
      <Price> { data.prices.map(( price, i) => <span key={i}>{ price }</span> ) } </Price>
      <Ingredients>
        { data.ingredients.map(( ingredient, i) => <Ingredient key={i}>{ ingredient }</Ingredient> ) }
      </Ingredients>
      { data.labels.map(( label, i) =>
        label.toUpperCase() !== 'NO'
        ? <Labels key={i}> <Label>{ label }</Label> </Labels>
        : null
      )}
    </Wrap>
  )
}

export default FoodItem
