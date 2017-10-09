import React from 'react'
import Styled from 'styled-components'

import Menu from '../styleComponents/menu.js'

function DrinkItem ({style, active, data, activate, index}) {

  return(
    <div>
    <Menu>
      <li>{data.name}</li>
      { data.labels.map(( label, i) =>
        label.toUpperCase() !== 'NO'
        ? <li key={i}>{ label }</li>
        : null
      )}
      <li> { data.prices.map(( price, i) => <span key={i}>{ price }</span> ) } </li>
    </Menu>
    <div style={{transform: 'rotate(-4deg)', backgroundColor: 'goldenrod', position: 'absolute', left: '0', top: '300px', display: 'inline', transform: 'rotate(90deg)' }}> This is a text test for placement of the fun text</div>
    </div>
  )
}

export default DrinkItem
