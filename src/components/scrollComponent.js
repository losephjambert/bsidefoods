import React from 'react'
import {FlexColumn} from '../styleComponents/flex'

export default class ScrollComponent extends React.Component {

  constructor(props){
    super(props)

    this.scrollItems=[]
    this.createScrollSystem = this.createScrollSystem.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount(){
    this.createScrollSystem(0,this.refs.node)
    window.addEventListener('scroll',  (e)=>this.handleScroll(e,this.refs.node) )
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {

    return (
      <div
        ref='node'
        style={{backgroundColor:'salmon'}}>
        {this.props.children}
      </div>
    )

  }

  handleScroll(e,node){
    let scrollDistance = window.scrollY
    if(node){
      console.log( Math.ceil(scrollDistance) + window.innerHeight, Math.ceil( node.getBoundingClientRect().height ) )
    }
  }

  createScrollSystem(accumulator, node) {
    const scrollItems = this.scrollItems
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
      }
      node.style.height=`${Math.ceil(scrollItems[scrollItems.length-1].scrollHeight+window.innerHeight)}px`
    }
  }

}