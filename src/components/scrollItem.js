import React from 'react'
import Styled from 'styled-components'

import Colors from '../styleVariables/colors'
import Media from '../styleComponents/mediaQueries'
import Pointer from '../assets/cursor.png'

const {yellow, blue, pink, white, brandBlue} = Colors
const size = 600

if (typeof window === 'undefined') { global.window = {} }

const openStyles = `
 &::after{
   content:'';
   position: absolute;
   bottom: 50px;
   right: 50px;
   width: 100px;
   height: 100px;
   z-index: 9999;
   background-color: gold;
 }
`

const StyleContainer = Styled.div`
  width: 100%;
  max-width: ${size}px;
  min-height: 600px;
  margin: 0;
  padding: 0;
  z-index: ${props=>props.zIndex};
  margin-bottom: ${props=>props.marginBottom};
  position: ${props=>props.position};
  top: ${props=>props.top}px;
  ${props=>props.open ? openStyles : null}


  ${Media.forTabletPortraitUp`
    left: calc(50% - ${size/2}px);
    right: calc(50% - ${size/2}px);
  `}
  
  ${Media.forTabletLandscapeUp`
  &:nth-child(1){
    transform: translateX(10%);
  }
  &:nth-child(3){
    transform: translateX(-10%);
  }
`}
`

const Item = Styled.div`
  min-width: 300px;
  max-width: 95%;
  margin: auto;
  padding: 25px;
  min-height: 600px;
  background-color: ${props => props.backgroundColor};
  font-family:'Cornerstone';
  color:${props => props.color};

  &:hover{
    cursor: url(${Pointer}), auto;
  }
  ${Media.forTabletPortraitUp`
      width: 100%;
      max-width: 100%;
      position: relative;
  `}
`

const ItemTitle = Styled.h2`
  font-size: 2em;
  text-align: left;
  margin: 10px 0 50px;
  ${Media.forTabletPortraitUp`
    font-size: 3em;
    margin: 25px 0 50px 20px;
  `}
`

const ScrollItem = ({
  style,
  config,
  index,
  color,
  backgroundColor,
  left,
  active,
  title,
  handleClick,
  position,
  top,
  zIndex,
  marginBottom,
  className,
  data,
  open}) =>

  <StyleContainer
    open={open}
    className={className}
    position={position}
    config={config}
    top={top}
    zIndex={zIndex}
    marginBottom={marginBottom}>
    <Item
      onClick={(e)=>handleClick(e, index, config.prevHeight)}
      color={color}
      backgroundColor={backgroundColor}
      left={left}
      index={index}
      active={active}>
      { title && <ItemTitle>{title}</ItemTitle> }
      {React.Children.map(data, (children, index) =>
          React.cloneElement(children, {
              key: index,
              active: active,
              handleClick: handleClick,
              index: index
          })
      )}
    </Item>
  </StyleContainer>

export default ScrollItem
