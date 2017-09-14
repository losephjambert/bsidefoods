import React from 'react'
import Styled from 'styled-components'

import Hours from '../styleComponents/hours.js'

const Headline = Styled.li`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
  line-height: 1;
`

function BusinessInformation ({style, active, data, activate, index}) {
  return(
    <Hours
      headline
      backgroundColor={'hsla(193, 81%, 73%, 1)'}
    >
      <Headline>{data.headline}</Headline>
      { data.hours.map(( hour, i) => <li key={i}>{ hour }</li> ) }
    </Hours>
  )
}

export default BusinessInformation
