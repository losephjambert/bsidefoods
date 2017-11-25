import React from 'react'
import Styled from 'styled-components'

import Logo from './logo'
import Pattern from './pattern'

const height = 80

const HeaderContainer = Styled.div`

`

export default class Header extends React.Component{
  state={
    loading: true
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState(prevState => ({
        loading: !this.state.loading
      }))
    }, 700);
  }

  render(){

    return(
      <div style={{opacity: this.state.loading ? 0 : 1, transition: '1500ms'}}>
        <HeaderContainer>
          <Pattern height={80} top={5}/>
          <Logo loading={this.state.loading}/>
        </HeaderContainer>
      </div>
    )
  }
}