import React from 'react'
import MenuSection from '../styleComponents/menuSection.js'

export default class ScrollItem extends React.Component {

  render() {
    return (
      <MenuSection>
        {this.props.children}
      </MenuSection>
    )
  }

}