import React from 'react'
import Styled from 'styled-components'

import Menu from '../styleComponents/menu'
import AppTheme from '../styleComponents/appTheme'

function BusinessInformation ({style, active, data, activate, index}) {
  return(
    <Menu
      headline
      style={style}
      active={active}
      backgroundColor={'dodgerblue'}
      onClick={(e)=>activate(e,index)}
    >
      <li>{data.headline}</li>
      { data.hours.map(( hour, i) => <li key={i}>{ hour }</li> ) }
    </Menu>
  )
}

export default BusinessInformation
