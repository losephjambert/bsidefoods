import React from 'react'
import Styled from 'styled-components'

import Hours from '../styleComponents/hours.js'
import Colors from '../styleVariables/colors'
import Media from '../styleComponents/mediaQueries'

import PatioSVG from '../assets/patio.svg'

const { white, pink, blue, yellow, brandBlue } = Colors

const Headline = Styled.li`
  font-size: 2em;
  margin-bottom: 2em;
  text-align: center;
  line-height: 1;
  ${Media.forTabletLandscapeUp`
    font-size: 3em;
  `}
`
const Hour = Styled.li`
  font-size: 1em;
  text-align: left;
  ${Media.forTabletLandscapeUp`
  font-size: 2em;
`}
`
const Patio = Styled.div`
  position: fixed;
  top: 200px;
  right: 100px;
  width: 180px;
  height: 180px;
  background-image: url(${PatioSVG});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`

function BusinessInformation ({style, active, data, activate, index}) {
  return(
    <Hours headline color={white} style={{position: 'relative'}}>
      <Headline>{data.headline}</Headline>
      { data.operatingHours.map(( hour, i) => <Hour key={i}>{ hour }</Hour> ) }
    </Hours>
  )
}

export default BusinessInformation
