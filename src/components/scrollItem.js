import React from 'react'
import Styled from 'styled-components'

import Colors from '../styleVariables/colors'
import Media from '../styleComponents/mediaQueries'
import pointer from '../assets/cursor.png' 

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
    cursor: url(${pointer}), auto;
  }
  ${Media.forTabletPortraitUp`
      position: relative;
      // right: ${props=>props.left}%;
  `}
`

const ItemTitle = Styled.h2`
  font-size: 2em;
  text-align: center;
  margin-bottom: 50px;
  ${Media.forTabletPortraitUp`
    font-size: 3em;
  `}
`
const FlyOutText = Styled.p`
  position: absolute;
  z-index: 100;
  top: 600px;
  left: ${props=>props.left ? props.left : ''};
  right: ${props=>props.right ? props.right : ''};
  color: ${props=>props.color};
  transform: rotate(90deg);
  transform-origin: center;
  font-size: 3em;
  letter-spacing: .1em;
  min-width: 800px;
  margin: 0;
  ${Media.forTabletLandscapeUp`

  `}
`

const ScrollItem = ({
  style,
  config,
  index,
  color,
  backgroundColor,
  left,
  rotate,
  active,
  title,
  activate,
  stick,
  position,
  top,
  zIndex,
  marginBottom,
  phrase,
  data}) =>

    <StyleContainer
      width={600}
      stick={stick}
      position={position}
      config={config}
      top={top}
      zIndex={zIndex}
      marginBottom={marginBottom}
    >
      <Item
        onClick={(e)=>activate(e, index, config.prevHeight)}
        color={color}
        backgroundColor={backgroundColor}
        left={left}
        rotate={rotate}
        index={index}
        active={active}>
        <FlyOutText
          color={phrase.color}
          left={phrase.left}
          right={phrase.right}
          >
          {phrase.title}
        </FlyOutText>
        <ItemTitle>{title}</ItemTitle>
        {React.Children.map(data, (children, index) =>
            React.cloneElement(children, {
                key: index,
                active: active,
                activate: activate,
                index: index
            })
        )}
      </Item>
    </StyleContainer>

export default ScrollItem
