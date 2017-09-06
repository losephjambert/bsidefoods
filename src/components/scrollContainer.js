import React from 'react'

export default class ScrollContainer extends React.Component {

  state={
    currentPanel: null ,
    currentIndex: 0    ,
    direction: null    ,
    scrollItems: null
  }

  config={
    lastScrollTop:0,
    direction: null,
    currentIndex: null,
    container: null,
    children: null,
    scrollItems:[],
    show: false
  }

  componentDidMount(){
    window.addEventListener('scroll',  (e)=>this.handleScroll(e) )
    this.config.currentIndex=0
    this.setState(prevState => ({
      currentPanel: this.config.scrollItems[0],
      scrollItems: this.config.scrollItems
    }))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', (e)=>this.handleScroll(e))
  }

  handlePanes = (e) =>{
    const {direction, currentIndex, container, children, scrollItems}=this.config
    const scrollDistance=window.scrollY
    let currentPanel = scrollItems[currentIndex].spaceFromTop + scrollItems[currentIndex].height

    children[0].style.position='relative'
    container.style.backgroundColor='dodgerblue'

    if(window.scrollY <= 0){
      container.style.backgroundColor='ghostwhite'
    }

    if(children[0].getBoundingClientRect().top){
        this.config.currentIndex=0
        container.style.backgroundColor='dodgerblue'
      }
    if(children[0].getBoundingClientRect().bottom <= 0){
      children[1].style.position='relative'
      container.style.backgroundColor='lightpink'
      this.config.currentIndex=1
      if(children[1].getBoundingClientRect().bottom <= 0){
        children[2].style.position='relative'
        container.style.backgroundColor='palegoldenrod'
        this.config.currentIndex=2
      }
    }
    if(children[2].getBoundingClientRect().top >= 0 && direction==='up'){
      children[2].style.position='fixed'
      if(children[1].getBoundingClientRect().top >= 0){
        children[1].style.position='fixed'
      }  
    }
    if(children[2].getBoundingClientRect().bottom <=0){
      this.config.show=!this.config.show
      container.style.backgroundColor='ghostwhite'
    } else{
      this.config.show=!this.config.show
    }

  }

  handleDirection = (e) =>{
    const scrollDistance=window.scrollY
    const {lastScrollTop}=this.config

    scrollDistance > lastScrollTop
      ? this.config.direction='down'
      :  this.config.direction='up'

    this.config.lastScrollTop=scrollDistance
  }

  handleScroll(e){
    requestAnimationFrame((e)=>this.handleDirection(e))
    requestAnimationFrame((e)=>this.handlePanes(e))
  }

  createScrollSystem = (accumulator, node) => {
    this.config.scrollItems=[]
    const {scrollItems} = this.config
    if(node){
      let children = node.children
      for(let i=children.length-1; i>=0; i--){
        let height = children[i].getBoundingClientRect().height
        accumulator=accumulator+height+Math.ceil(window.innerHeight*.75 - (i*-50) )
        let scrollItem = {
            height: Math.ceil(height)
          , scrollHeight: Math.ceil(accumulator)
          , spaceFromTop: Math.ceil(window.innerHeight*.75 - (-i*-50) )
        }
        scrollItems.push(scrollItem)
        children[i].style.marginBottom=`${scrollItem.spaceFromTop}px`
        children[i].style.top=`${scrollItem.spaceFromTop}px`
        children[i].style.zIndex=-i+10
      }

      this.config.container=node
      this.config.children=children
      node.style.height=`${Math.ceil(scrollItems[scrollItems.length-1].scrollHeight+window.innerHeight)}px`
    }
  }

  render() {
    return (
      <div ref={(node)=>this.createScrollSystem(0,node)}>
        {React.Children.map(this.props.children, (children, index) =>
            React.cloneElement(children, {
                key: index                                ,
                active: this.state.currentIndex === index ,
                style: {
                  marginBottom: `${this.state.scrollItems && this.state.scrollItems[this.state.currentIndex].spaceFromTop}px` ,
                  top: `${this.state.scrollItems && this.state.scrollItems[this.state.currentIndex].spaceFromTop}px`          ,
                  zIndex: -index+10
                }
            })
        )}
      </div>
    )
  }
}