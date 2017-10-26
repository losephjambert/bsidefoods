import React from 'react'

import ScrollContainer from './scrollContainer'

export default class ScrollSystem extends React.Component {
  
  config={
    container: null       ,
    children: null        ,
    scrollItems:[] ,
    height: null
  }

  createScrollSystem = (accumulator, node) => {
    this.config.scrollItems=[]
    const {scrollItems} = this.config

    if(node){
      let children = document.getElementsByClassName('scroll-item')
      let prevHeight = 0
      let prevSpaceFromTop = 0
      let spaceFromTop
      for(let i=children.length-1; i>=0; i--){
        let height = Math.ceil( children[i].getBoundingClientRect().height )
        accumulator=accumulator+height+Math.ceil(window.innerHeight*.75 - (i*-100) )
        if(window.innerHeight > 600 && window.innerWidth > 600){
          spaceFromTop = Math.ceil(window.innerHeight*.60- (i*-75) )
        } else{
          spaceFromTop = Math.ceil(window.innerHeight*.70 - (i*-55) )
        }
        let scrollItem = {
          height: height ,
          spaceFromTop: spaceFromTop ,
          scrollHeight: accumulator ,
          prevHeight: prevHeight + spaceFromTop/2
        }
        prevSpaceFromTop = spaceFromTop
        prevHeight = height + prevSpaceFromTop + prevHeight
        scrollItems.push(scrollItem)
      }
      this.config.container=node
      this.config.children=children
      this.config.height=Math.ceil(scrollItems[scrollItems.length-1].scrollHeight)
    }
  }

  render() {

    return (
      <div>
        <ScrollContainer
          handleClick={this.props.handleClick}
          ref={(node)=>this.createScrollSystem(0,node)}
          className="scroll-container"
          config={this.config}>
          {this.props.children}
        </ScrollContainer>
      </div>
    )
  }
}
