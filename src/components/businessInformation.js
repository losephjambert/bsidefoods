import React from 'react'
import Styled from 'styled-components'

import Hours from '../styleComponents/hours.js'
import Colors from '../styleVariables/colors'
import Media from '../styleComponents/mediaQueries'

const { white } = Colors

const Headline = Styled.li`
  font-size: 6vmax;
  margin-bottom: 2em;
  text-align: center;
  line-height: 1;
  ${Media.forTabletLandscapeUp`
    font-size: 4vmax;
  `}
`
const Hour = Styled.li`
  font-size: 5vmax;
  text-align: center;
`

function BusinessInformation ({style, active, data, activate, index}) {
  return(
    <Hours headline color={white}>
      <Headline>{data.headline}</Headline>
      { data.hours.map(( hour, i) => <Hour key={i}>{ hour }</Hour> ) }
    </Hours>
  )
}

export default BusinessInformation
