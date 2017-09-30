import React from 'react'
import Styled from 'styled-components'

import Hours from '../styleComponents/hours.js'
import Colors from '../styleVariables/colors'

const { white } = Colors

const Headline = Styled.li`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
  line-height: 1;
`

function BusinessInformation ({style, active, data, activate, index}) {
  return(
    <Hours headline color={white}>
      <Headline>{data.headline}</Headline>
      { data.hours.map(( hour, i) => <li key={i}>{ hour }</li> ) }
    </Hours>
  )
}

export default BusinessInformation
