import React from 'react'
import Styled from 'styled-components'

import Colors from '../styleVariables/colors'
import Media from '../styleComponents/mediaQueries'

const {yellow, blue, pink, white, brandBlue} = Colors

const StyleContainer = Styled.div`
  width: 100%;
  min-height: 600px;
  margin: 0;
  padding: 0;
`

const Item = Styled.div`
  max-width: 600px;
  margin: auto;
  padding: 25px;
  min-height: 600px;
  background-color: ${props => props.backgroundColor};
  font-family:'Cornerstone';
  color:${props => props.color};
  box-shadow: inset 0 0 0 15px ${white};
  ${Media.forTabletPortraitUp`
      position: relative;
      left: ${props=>props.left}%;
      transform-origin: left;
      transition: 500ms;
      transform: ${props=>props.active ? `rotate(0deg)` :`rotate(${props.rotate}deg)` };
  `}
  &:hover{cursor:pointer;}
`

const ItemTitle = Styled.h2`
  font-size: 2em;
  text-align: center;
  ${Media.forTabletPortraitUp`
    font-size: 3em;
  `}
`

const ScrollItem = (props) =>
  <StyleContainer
    style={props.style}
  >
    <Item
      onClick={(e)=>props.activate(e, props.index, props.config.height)}
      color={props.color}
      backgroundColor={props.backgroundColor}
      left={props.left}
      rotate={props.rotate}
      active={props.active}>
      <ItemTitle>{props.title}</ItemTitle>
      {React.Children.map(props.data, (children, index) =>
          React.cloneElement(children, {
              key: index,
              active: props.active,
              activate: props.activate,
              index: props.index
          })
      )}
    </Item>
  </StyleContainer>

export default ScrollItem
