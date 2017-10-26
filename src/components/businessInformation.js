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
33% {
  transform: translate3d(0,3px,0);
}
66% {
  transform: translate3d(0,-3px,0);
}
100% {
  transform: translate3d(0,0,0);
}
`
const bounceStyles = `
  span{
    display: inline-flex;
    animation: ${bounce} 4s ease infinite alternate;
  }
`
const Headline = Styled.li`
  font-size: 2em;
  margin: 10px 0 50px;
  text-align: left;
  line-height: 1;
  ${Media.forTabletPortraitUp`
    font-size: 3em;
    margin: 25px 0 50px 25px;
  `}
`
const Hour = Styled.li`
  font-size: 1.35em;
  text-align: left;
  margin-bottom: 20px;
  ${Media.forTabletPortraitUp`
    font-size: 2em;
    margin-left: 25px;
  `}
  ${props=>props.openIndex ? bounceStyles : null}
`

function BusinessInformation ({style, active, data, activate, index, openIndex}) {
  
  let days = []
  let wrappedCharacters = []

  data.operatingHours.forEach(function(element, i) {
    for(let j=element.length-1;j>=0;j--){
      wrappedCharacters.unshift(<span key={j}>{element[j]}</span>)
    }
    days.push(<Hour key={i} openIndex={openIndex===i}>{wrappedCharacters}</Hour>)
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
