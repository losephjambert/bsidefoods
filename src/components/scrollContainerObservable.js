import React from 'react'
import {observable} from 'mobx'
import {observer} from 'mobx-react'
import {FlexColumn} from '../styleComponents/flex'
import FoodItem from './foodItem'
import DrinkItem from './drinkItem'
import BusinessInformation from './businessInformation'
import MenuSection from '../styleComponents/menuSection'

export default @observer class scrollContainerObservable extends React.Component {
  @observable selection = null; /* MobX managed instance state */
  @observable scroll = null; /* MobX managed instance state */
  @observable items = []; /* MobX managed instance state */

  constructor(props, context) {
    super(props, context)
    this.selection = props.values[0]
  }

  componentDidMount(){
    // this.createScrollSystem(0,this.refs.node)
    // for(let i=0;i<this.items.length;i++){
    //   console.log(this.items[i])
    // }
    console.log('text list',this.textList)
  }
  
  render() {
    let UL = null
    return (
      <ul
        style={{position:'relative',zIndex:9999,overflow:'scroll',maxHeight:'50px',background:'salmon'}}
        onKeyDown={this.onKeyDown}
        tabIndex={0}
        onScroll={this.onScroll}
        ref={(List) => { this.textList = List }} >
        {this.props.values.map(value =>
          <li
            style={{height:'200px'}}
            className={value === this.selection ? 'selected' : ''}
            key={value}
            onClick={() => this.onSelect(value)}
          >
            {value}
          </li>
        )}  
      </ul>
    )
  }
  
  onSelect(value) {
    this.selection = value
    this.fireOnSelect()
  }

  onScroll = (e) => {
    if (typeof this.props.onScroll === "function")
      this.props.onScroll(this.scroll=e.target)
  }

  createScrollSystem(accumulator,node){
    console.log('createScrollSystem')
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
        this.items.push(scrollItem)
      }
    }
  }

  onKeyDown = (e) => {
    const {values} = this.props
    const idx = values.indexOf(this.selection)
    if (e.keyCode === 38 && idx > 0) { /* up */
      this.selection = values[idx - 1]
    } else if (e.keyCode === 40 && idx < values.length -1) { /* down */
      this.selection = values[idx + 1]
    }
    this.fireOnSelect()
  }
   
  fireOnSelect() {
    if (typeof this.props.onSelect === "function")
      this.props.onSelect(this.selection) /* solved! */
  }
}