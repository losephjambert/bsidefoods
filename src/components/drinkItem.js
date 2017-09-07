import React from 'react'
import Styled from 'styled-components'

import Menu from '../styleComponents/menu'

function DrinkItem ({style, active, data, activate, index}) {
  return(
    <Menu
      style={style}
      active={active}
      backgroundColor={'pink'}
      onClick={(e)=>activate(e,index)}
    >
      <li>{data.name}</li>
      { data.labels.map(( label, i) => 
        label.toUpperCase() !== 'NO'
        ? <li key={i}>{ label }</li>
        : null
      )}
      <li> { data.prices.map(( price, i) => <span key={i}>{ price }</span> ) } </li>
    </Menu>
  )
}

export default DrinkItem
