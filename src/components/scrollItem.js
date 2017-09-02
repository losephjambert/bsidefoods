import React from 'react'

export default class ScrollItem extends React.Component {

  constructor(props){
    super(props)
    this.config = {
        height: null
      , scrollHeight: null
      , spaceFromTop: null

    }
  }

  render() {
    const { data } = this.props
    let content = null
    if(data){
      content = ( data.map((i,index)=>
          <ul key={index}>
            <li></li>
          </ul>
        )
      )
    }
    return (
     <div></div>
    )
  }
}