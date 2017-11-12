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
  font-weight: bold;
  padding-left: 2px;
  text-transform: uppercase;
  display: inline-flex;
  overflow: hidden;
  position: relative;
  flex: 1 0 auto;
  font-size: .6em;
  &::after{
    content: '. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ';
    position: absolute;
    top: 0px;
    width: 1500px;
    height: 20px;
    margin-left: 0.5em;
  }
  ${Media.forMediumPhonesUp`
    font-size: .8em;
  `}
  ${Media.forBigPhonesUp`
    font-size: .9em;
  `}
`
const Price = Styled.li`
  font-weight: bold;
  display: inline-flex;
  font-size: .6em;
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
  ${Media.forMediumPhonesUp`
    font-size: .8em;
  `}
  ${Media.forBigPhonesUp`
    font-size: .9em;
  `}
`
const Labels = Styled.div`
  padding-left: 10px;
`
const Label = Styled.li`
  width: 100%;
  flex: 1 0 100%;
  font-size: 0.65em;
  text-transform: lowercase;
  margin-top: 5px;
  &::before{
    content: '*';
  }
  ${Media.forMediumPhonesUp`
    font-size: .8em;
  `}
  ${Media.forBigPhonesUp`
    font-size: .9em;
  `}
`
const Ingredients = Styled.div`
  width: 100%;
  flex:  1 0 100%;
  margin-top: 5px;
  padding-left: 10px;
  line-height: 1;
`
const Ingredient = Styled.li`
  display: inline-flex;
  font-size: 0.65em;
  text-transform: lowercase;
  margin-top: 5px;
  &:not(:last-child){
    margin-right: 5px;
    &::after{ content: ','; }
  }
  ${Media.forMediumPhonesUp`
    font-size: .8em;
  `}
  ${Media.forBigPhonesUp`
    font-size: .9em;
  `}
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
