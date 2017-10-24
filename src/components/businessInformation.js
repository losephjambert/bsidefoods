import React from 'react'
import Styled from 'styled-components'

import Hours from '../styleComponents/hours.js'
import Colors from '../styleVariables/colors'
import Media from '../styleComponents/mediaQueries'

const { white, pink, blue, yellow, brandBlue } = Colors

const Headline = Styled.li`
  font-size: 2em;
  margin: 10px 0 50px;
  text-align: left;
  line-height: 1;
  ${Media.forTabletLandscapeUp`
    font-size: 3em;
    margin: 25px 0 50px 25px;
  `}
`
const Hour = Styled.li`
  font-size: 1.35em;
  text-align: left;
  margin-bottom: 20px;
  ${Media.forTabletLandscapeUp`
    font-size: 2em;
    margin-left: 25px;
  `}
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
