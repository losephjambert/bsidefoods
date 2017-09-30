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
    <div style={{maxWidth:'600px',margin:'auto', backgroundColor:props.backgroundColor, fontFamily:'Cornerstone', color:props.color}}>
      <h2>{props.title}</h2>
      {React.Children.map(props.data, (children, index) =>
          React.cloneElement(children, {
              key: index,
              active: props.active,
              activate: props.activate,
              index: props.index
          })
      )}
    </div>
  </StyleContainer>

export default ScrollItem
