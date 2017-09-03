import React from 'react'
import {FlexColumn} from '../styleComponents/flex'

export default class ScrollContainer extends React.Component {

  constructor(props){
    super(props)
    this.state={
      activePanel: null
    }

    this.config={
      lastScrollTop:0,
      direction: null
    }

    this.scrollItems=[]

    this.handleScroll = this.handleScroll.bind(this)
    this.handleDirection = this.handleDirection.bind(this)
    this.createScrollSystem = this.createScrollSystem.bind(this)
    this.handlePanes = this.handlePanes.bind(this)
  }

  componentDidMount(){
    window.addEventListener('scroll',  (e)=>this.handleScroll(e) )
    this.setState({ activePanel: this.scrollItems.length-1 })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', (e)=>this.handleScroll(e))
  }

  render() {

    const { activePanel,direction }=this.state

    return (
      <FlexColumn
        innerRef={(node)=>this.createScrollSystem(0,node)}
        justify={'flex-start'}
        align={'center'}
        style={{backgroundColor:'salmon', boxShadow:'inset 0 0 0 15px white'}}>
          {this.props.children}
      </FlexColumn>
    )

  }

  handlePanes(){
    const {direction}=this.config
    const {activePanel}=this.state
    console.log(direction)
    // console.log(`active panel:`, this.state.children[this.state.activePanel])
    // console.log(this.state.children[this.state.activePanel].classList)
    // const {activePanel}=this.state
    // const {scrollItems}=this
    // let currentPanel = scrollItems[activePanel].spaceFromTop + scrollItems[activePanel].height
    
    // if(scrollDistance > currentPanel){
    //   console.log('release next panel, decrement activePanel by 1')
    //   this.setState((prevState) => {
    //     return {activePanel: prevState.activePanel - 1}
    //   })
    // }

    // console.log(`
    //   scroll distance:${scrollDistance}
    //   client height:${document.body.clientHeight - window.innerHeight}
    //   panel${activePanel}:${currentPanel}
    // `)

    // console.log( Math.ceil(scrollDistance) + window.innerHeight, Math.ceil( this.state.container.getBoundingClientRect().height ) )
  }

  handleDirection(e){
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

  createScrollSystem(accumulator, node) {
    console.log('createScrollSystem')
    const {scrollItems} = this
    if(node){
      let children = node.children
      for(let i=0; i<children.length; i++){
        let height = children[i].getBoundingClientRect().height
        accumulator=accumulator+height+Math.ceil(window.innerHeight*.5 - (i*-40) )
        let scrollItem = {
            height: Math.ceil(height)
          , scrollHeight: Math.ceil(accumulator)
          , spaceFromTop: Math.ceil(window.innerHeight*.5 - (i*-40) )
        }
        scrollItems.push(scrollItem)
        children[i].style.paddingTop=`${scrollItem.spaceFromTop}px`
        children[2].style.position='relative'
      }
      node.style.height=`${Math.ceil(scrollItems[scrollItems.length-1].scrollHeight+window.innerHeight)}px`
    }
  }

}