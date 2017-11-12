import React from 'react'
import Styled, {keyframes} from 'styled-components'

import Hours from '../styleComponents/hours.js'
import Colors from '../styleVariables/colors'
import Media from '../styleComponents/mediaQueries'

const { white, pink, blue, yellow, brandBlue } = Colors

const bounce = keyframes`
0% {
  transform: translate3d(0,0,0);
}
50% {
  transform: translate3d(0,4px,0);
}
100% {
  transform: translate3d(0,0,0);
}
`
const Letter = Styled.span`
  display: inline-flex;
  ${props=>props.active ? `animation: ${bounce} 2000ms ease infinite;` : null}
  animation-delay: ${props=>props.delay}s;
`
const Headline = Styled.li`
  font-size: 2em;
  margin: 10px 0 50px;
  text-align: center;
  line-height: 1;
  ${Media.forTabletPortraitUp`
    font-size: 3em;
    margin: 25px 0 50px 25px;
  `}
`
const Hour = Styled.li`
  font-size: 1.35em;
  text-align: center;
  margin-bottom: 20px;
  ${Media.forBigPhonesUp`
    font-size: 1.5em;
  `}
  ${Media.forTabletPortraitUp`
    font-size: 2em;
    // margin-left: 25px;
  `}
`

function BusinessInformation ({style, active, data, activate, index}) {
  
  let days = []
  let wrappedCharacters = []

  data.operatingHours.forEach(function(hour, i) {
    for(let j=hour.text.length-1;j>=0;j--){
      wrappedCharacters.unshift(<Letter key={j} delay={j/6} active={hour.isOpen}>{hour.text[j]}</Letter>)
    }
    days.unshift(<Hour key={i} >{wrappedCharacters}</Hour>)
    wrappedCharacters=[]
  })

  return(
    <Hours headline color={white} style={{position: 'relative'}}>
      <Headline>{data.headline}</Headline>
      {days}
    </Hours>
  )
}

export default BusinessInformation
