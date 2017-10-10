import React from 'react'
import Styled from 'styled-components'

import Colors from '../styleVariables/colors'
import Menu from '../styleComponents/menu.js'
import Media from '../styleComponents/mediaQueries'

const Wrap = Menu.extend`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`

const Name = Styled.li`
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: .025em;
  display: inline-flex;
  overflow: hidden;
  position: relative;
  flex: 1 0 auto;
  font-size: 0.8em;
  &::after{
    content: '. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ';
    position: absolute;
    top: 0px;
    width: 1500px;
    height: 20px;
    margin-left: 0.5em;
  }
  ${Media.forTabletPortraitUp`
    font-size: 1em;
  `}
`
const Price = Styled.li`
  display: inline-flex;
  font-weight: bold;
  font-size: 0.8em;
  &::before{
    content:'';
    width: 0.5em;
    height: 100%;
    position: relative;
    background-color: ${Colors.yellow};
  }
  & > span{
    &:nth-of-type(2){
      &::before{
        content: '/';
      }
    }
  }
  ${Media.forTabletPortraitUp`
    font-size: 1em;
`}
`
const Label = Styled.li`
  width: 100%;
  flex: 1 0 100%;
  text-indent: 10px;
  font-size: 0.6em;
  text-transform: uppercase;
  margin-top: 5px;
  &::before{
    content: '*';
  }
  ${Media.forTabletPortraitUp`
    font-size: 0.8em;
  `}
`

function DrinkItem ({style, active, data, activate, index}) {

  return(
    <Wrap>
      <Name>{data.name}</Name>
      <Price> { data.prices.map(( price, i) => <span key={i}>{ price }</span> ) } </Price>
      { data.labels.map(( label, i) =>
        label.toUpperCase() !== 'NO'
        ? <Label key={i}>{ label }</Label>
        : null
      )}
    </Wrap>
  )
}

export default DrinkItem
