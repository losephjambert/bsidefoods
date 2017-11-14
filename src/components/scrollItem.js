import React from 'react'
import Styled, {keyframes} from 'styled-components'

import Colors from '../styleVariables/colors'
import Media from '../styleComponents/mediaQueries'
import Pointer from '../assets/cursor.png'

const {yellow, blue, pink, white, brandBlue} = Colors
const size = 550
const upDown = keyframes`
0% {
  transform: translate3d(0,0,0);
}
50% {
  transform: translate3d(0,-25px,0);
}
100% {
  transform: translate3d(0,0,0);
}
`;

if (typeof window === 'undefined') { global.window = {} }

const StyleContainer = Styled.div`
  width: 100%;
  max-width: ${size}px;
  min-height: ${size}px;
  margin: 0;
  padding: 0;
  z-index: ${props=>props.zIndex};
  margin-bottom: ${props=>props.marginBottom};
  position: ${props=>props.position};
  top: ${props=>props.top}px;

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
  ${Media.forDesktopUp`
    max-width: ${size*1.15}px;
  `}
`

const Item = Styled.div`
  min-width: 300px;
  max-width: 95%;
  margin: auto;
  padding: 15px;
  min-height: 600px;
  background-color: ${props => props.backgroundColor};
  font-family:'Cornerstone';
  color:${props => props.color};
  box-shadow: 0 -4px 6px -6px black;
  transition: 300ms;

  ${Media.forTabletPortraitUp`
    padding: 25px;
    &:hover{
      cursor: url(${Pointer}), auto;
      animation: upDown 300ms linear forwards;
    }
  `}

  ${Media.forTabletPortraitUp`
    width: 100%;
    max-width: 100%;
    position: relative;
  `}
  ${Media.forDesktopUp`
    padding: 50px;
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
    position={position}
    config={config}
    top={top}
    zIndex={zIndex}
    marginBottom={marginBottom}
    index={index}>
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
