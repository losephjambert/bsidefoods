import React from 'react'
import Styled from 'styled-components'

const StyleContainer = Styled.div`
  width: 100%;
  min-height: 600px;
  margin: 0;
  padding: 0;
`

const ScrollItem = (props) =>
  <StyleContainer
    style={props.style}
  >
    {React.Children.map(props.datum, (children, index) =>
        React.cloneElement(children, {
            key: index,
            active: props.active,
            activate: props.activate,
            index: props.index
        })
    )}
  </StyleContainer>

export default ScrollItem
