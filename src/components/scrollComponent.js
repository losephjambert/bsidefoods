import React from 'react'

export default class ScrollComponent extends React.Component {

  constructor(props){
    super(props)
    this.state={
      height: null
    }
    this.scrollItems=[]
    this.newScrollHeight = this.newScrollHeight.bind(this)
    this.createScrollSystem = this.createScrollSystem.bind(this)
  }

  componentDidMount(){
    this.createScrollSystem(0,this.refs.node)
    console.log(this.scrollItems)
  }

  render() {

    return (
      <div ref='node'>
        {this.props.children}
      </div>
    )
  }

  newScrollHeight(newHeight){
    this.config.scrollHeight = newHeight
  }

  createScrollSystem(accumulator, node) {
    const scrollItems = this.scrollItems
    if(node){
      let children = node.children
      for(let i=0; i<children.length; i++){
        console.log(children[i])
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