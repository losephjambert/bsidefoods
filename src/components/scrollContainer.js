import React from 'react'
import {FlexColumn} from '../styleComponents/flex'
import FoodItem from './foodItem'
import DrinkItem from './drinkItem'
import BusinessInformation from './businessInformation'
import MenuSection from '../styleComponents/menuSection'

export default class ScrollContainer extends React.Component {

  constructor(props){
    super(props)

    this.config={
      lastScrollTop:0,
      direction: null,
      currentIndex: null,
      container: null,
      children: null,
      scrollItems:[],
      show: false
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.handleDirection = this.handleDirection.bind(this)
    this.createScrollSystem = this.createScrollSystem.bind(this)
    this.handlePanes = this.handlePanes.bind(this)
  }

  componentDidMount(){
    window.addEventListener('scroll',  (e)=>this.handleScroll(e) )

    this.config.currentIndex=0
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', (e)=>this.handleScroll(e))
  }

  render() {

    const {foods,drinks,businessInformation}=this.props

    return (
      <FlexColumn
        innerRef={(node)=>this.createScrollSystem(0,node)}
        justify={'flex-start'}
        align={'center'}>
          <MenuSection>
            { businessInformation.map(( {node}, i) => <BusinessInformation key={i} data={node} /> )}
          </MenuSection>
          <MenuSection>
            { foods.map(( {node}, i) => <FoodItem key={i} data={node} /> )}
          </MenuSection>
          <MenuSection>
            { drinks.map(( {node}, i) => <DrinkItem key={i} data={node} /> )}
          </MenuSection>
      </FlexColumn>
    )

  }

  handlePanes(){
    const {direction, currentIndex, container, children, scrollItems}=this.config
    const scrollDistance=window.scrollY
    let currentPanel = scrollItems[currentIndex].spaceFromTop + scrollItems[currentIndex].height
    console.log(children[0].style)
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
        this.config.scrollItems.push(scrollItem)
        children[i].style.paddingTop=`${scrollItem.spaceFromTop}px`
        children[i].style.zIndex=-i+10
        children[i].style.transform=`translate3d(${i*8}%,${0}%,${0})`
      }
      node.style.height=`${Math.ceil(scrollItems[scrollItems.length-1].scrollHeight+window.innerHeight)}px`
      this.config.container=node
      this.config.children=children
    }
  }

}