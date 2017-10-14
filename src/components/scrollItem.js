import React from 'react'
import Styled from 'styled-components'

import Colors from '../styleVariables/colors'
import Media from '../styleComponents/mediaQueries'

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
  position: ${props=>props.position ? 'relative' : 'fixed'};
  top: ${props=>props.top}px;

  // TRYING TO GET A SCROLL THEN STICKY HAPPENING WITH THIS
  // top: ${props=> props.stick ? `-${props.config.height-200}px` : `${props.top}px`};
  // position: ${props=>props.stick ? 'fixed' : ''};

  ${Media.forTabletPortraitUp`
    left: calc(50% - ${(window.innerWidth/2) - (600/2)}px);
    right: calc(50% - ${(window.innerWidth/2) - (600/2)}px);
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
  box-shadow: inset 0 0 0 15px ${white};
  ${Media.forTabletPortraitUp`
      position: relative;
      left: ${props=>props.left + props.index*2}%;
  `}
  &:hover{cursor:pointer;}
`

const ItemTitle = Styled.h2`
  font-size: 2em;
  text-align: center;
  margin-bottom: 100px;
  ${Media.forTabletPortraitUp`
    font-size: 3em;
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
