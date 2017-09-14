import React from 'react'
import Styled from 'styled-components'

import Menu from '../styleComponents/menu.js'

function DrinkItem ({style, active, data, activate, index}) {

  return(
    <Menu
      backgroundColor={'hsla(48, 100%, 86%,1)'}
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
