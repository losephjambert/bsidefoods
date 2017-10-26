import React from 'react'
import Styled from 'styled-components'

import Colors from '../styleVariables/colors'
import Media from '../styleComponents/mediaQueries'
import Pointer from '../assets/cursor.png'

const {yellow, blue, pink, white, brandBlue} = Colors

if (typeof window === 'undefined') { global.window = {} }

const StyleContainer = Styled.div`
  width: 600px;
  max-width: 100%;
  min-height: 600px;
  margin: 0;
  padding: 0;
  z-index: ${props=>props.zIndex};
  margin-bottom: ${props=>props.marginBottom};
  position: ${props=>props.position};
  top: ${props=>props.top}px;

  ${Media.forTabletPortraitUp`
    left: calc(50% - 300px);
    right: calc(50% - 300px);
  `}
  
  ${Media.forTabletLandscapeUp`
  &:nth-child(1){
    transform: translateX(-10%);
  }
  &:nth-child(3){
    transform: translateX(10%);
  }
`}
`

const Item = Styled.div`
  max-width: 600px;
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
  data}) =>

  <StyleContainer
    className={className}
    width={600}
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
