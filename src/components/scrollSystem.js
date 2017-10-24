import React from 'react'

import ScrollContainer from './scrollContainer'

export default class ScrollSystem extends React.Component {

  config={
    lastScrollTop:0       ,
    direction: null       ,
    currentIndex: null    ,
    container: null       ,
    children: null        ,
    scrollItems:[]        ,
    show: false
  }

  componentDidMount(){
   this.createScrollSystem(0,document.getElementsByClassName('scroll-container')[0])
  }

  shouldComponentUpdate(){ return false }

  createScrollSystem = (accumulator, node) => {
    this.config.scrollItems=[]
    const {scrollItems} = this.config
    let nodeHeight = null

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
      nodeHeight=Math.ceil(scrollItems[scrollItems.length-1].scrollHeight)
      node.style.height=`${nodeHeight}px`
    }
  }

  render() {

    const {handleClick}=this.props

    return (
      <div>
        <ScrollContainer
          className="scroll-container"
          config={this.config}
          handleClick={handleClick}
        >
          {this.props.children}
        </ScrollContainer>
      </div>
    )
  }
}
