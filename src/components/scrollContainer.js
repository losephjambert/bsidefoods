import React from 'react'

export default class ScrollContainer extends React.Component {

  state={
    currentPanel: null    ,
    currentIndex: 0       ,
    direction: null       ,
    scrollItems: null     ,
    releasedPanels: [0]
  }

  config={
    scrollItems:[],
    container:null,
    children: null,
    lastScrollTop:0,
    direction: null
  }

  componentDidMount(){
    window.addEventListener('scroll',  (e)=>this.handleScroll(e) )
    this.setState(prevState => ({
      currentPanel: this.props.config.scrollItems[0] ,
      scrollItems: this.props.config.scrollItems
    }))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', (e)=>this.handleScroll(e))
  }

  handlePanes = (e) =>{
    const {
      container ,
      children
    }=this.props.config
    const {
      currentPanel ,
      currentIndex ,
      direction ,
      scrollItems ,
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
    

    scrollDistance > this.config.lastScrollTop
      ? this.setState(prevState => ({direction:'down'}))
      : this.setState(prevState => ({direction:'up'}))

    this.config.lastScrollTop=scrollDistance
  }

  handleScroll = (e) =>{
    requestAnimationFrame((e)=>this.handleDirection(e))
    requestAnimationFrame((e)=>this.handlePanes(e))
  }

  render() {
    const {className, config}=this.props

    return (
      <div>
        <div className={className} style={{height: `${config.height}px`}}>
          {React.Children.map(this.props.children, (children, index) =>
            React.cloneElement(children, {
              key: index ,
              active: this.state.currentIndex === index ,
              index: index ,
              left: index*10 ,
              config: this.props.config.scrollItems[index] ,
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
