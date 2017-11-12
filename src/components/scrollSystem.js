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
      let adjuster
      for(let i=children.length-1; i>=0; i--){
        adjuster=0
        let height = Math.ceil( children[i].getBoundingClientRect().height )
        accumulator=accumulator+height+Math.ceil(window.innerHeight*.75 - (i*-100) )
        if(window.innerHeight > 600 && window.innerWidth > 600){
          spaceFromTop = Math.ceil(window.innerHeight*.88- (i*70) + adjuster )
        } else{
          if(i===2){ adjuster = -190 }
          spaceFromTop = Math.ceil(window.innerHeight*.88 - (i*66) + adjuster )
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
      this.config.height=Math.ceil(scrollItems[scrollItems.length-1].scrollHeight+100)
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
