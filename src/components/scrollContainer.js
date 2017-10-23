import React from 'react'

import Patio from './patio'

export default class ScrollContainer extends React.Component {

  state={
    currentPanel: null    ,
    currentIndex: 0       ,
    direction: null       ,
    scrollItems: null     ,
    releasedPanels: [0]   ,
    totalHeight: null
  }

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
    window.addEventListener('scroll',  (e)=>this.handleScroll(e) )
    this.config.currentIndex=0
    this.setState(prevState => ({
      currentPanel: this.config.scrollItems[0] ,
      scrollItems: this.config.scrollItems,
      totalHeight: parseInt(this.config.container.style.height)
    }))

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', (e)=>this.handleScroll(e))
  }

  handlePanes = (e) =>{
    const {
      container ,
      children
    }=this.config
    const {
      currentPanel    ,
      currentIndex    ,
      direction       ,
      scrollItems     ,
      releasedPanels
    }=this.state

    let length = children.length-1

    //handle panel behavior while user scrolls DOWN the page
    if(direction==='down'){
      let scrollIndex=0
        scrollIndex=currentIndex
        if(
        scrollIndex < length &&
        scrollItems[scrollIndex] === currentPanel &&
        children[scrollIndex].getBoundingClientRect().bottom <= 0 ){
          scrollIndex+=1
          this.setState(prevState => ({
            currentIndex:scrollIndex                                      ,
            currentPanel:prevState.scrollItems[scrollIndex]               ,
            releasedPanels: [...prevState.releasedPanels, scrollIndex]
          }))
        }
    }
    //handle panel behavior while user scrolls UP the page
    if(direction==='up'){
      let scrollIndex=currentIndex
        if(
          scrollIndex > 0 &&
          currentIndex > 0 &&
          scrollItems[scrollIndex] === currentPanel &&
          children[scrollIndex - 1].getBoundingClientRect().bottom >= 0 ){
            scrollIndex-=1
            this.setState(prevState => ({
              currentIndex:scrollIndex                                                                  ,
              currentPanel:prevState.scrollItems[scrollIndex]                                           ,
              releasedPanels: prevState.releasedPanels.filter((_, i) => i !== prevState.currentIndex)
            }))
        }
    }
  }

  handleDirection = (e) =>{
    const scrollDistance=window.scrollY
    const {lastScrollTop}=this.config

    scrollDistance > lastScrollTop
      ? this.setState(prevState => ({direction:'down'}))
      : this.setState(prevState => ({direction:'up'}))

    this.config.lastScrollTop=scrollDistance
  }

  handleScroll(e){
    requestAnimationFrame((e)=>this.handleDirection(e))
    requestAnimationFrame((e)=>this.handlePanes(e))
  }

  createScrollSystem = (accumulator, node) => {
    this.config.scrollItems=[]
    const {scrollItems} = this.config
    let nodeHeight = null

    if(node){
      let children = node.children
      let prevHeight = 0
      let prevSpaceFromTop = 0
      for(let i=children.length-1; i>=0; i--){
        let height = Math.ceil( children[i].getBoundingClientRect().height )
        accumulator=accumulator+height+Math.ceil(window.innerHeight*.75 - (i*-100) )
        let spaceFromTop = Math.ceil(window.innerHeight*.55 - (i*-75) )
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
        <Patio
          currentPanel={this.state.currentPanel}/>
        <div ref={(node)=>this.createScrollSystem(0,node)}>
          {React.Children.map(this.props.children, (children, index) =>
              React.cloneElement(children, {
                  key: index ,
                  active: this.state.currentIndex === index ,
                  activate: handleClick ,
                  index: index ,
                  left: index*10 ,
                  rotate: 3 ,
                  totalHeight: this.state.totalHeight ,
                  config: this.config.scrollItems[index] ,
                  stick: this.state.currentIndex !== index && this.state.releasedPanels.includes(index),
                  position: this.state.releasedPanels.includes(index) ? 'relative' : 'fixed', 
                  top: this.state.scrollItems && this.state.scrollItems[index].spaceFromTop ,
                  zIndex: -index+10 ,
                  marginBottom: `${this.state.scrollItems && this.state.scrollItems[index].spaceFromTop}px`
              })
          )}
        </div>
      </div>
    )
  }
}
