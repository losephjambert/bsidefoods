import React from 'react'

if (typeof window === 'undefined') {
  global.window = {}
}

export default class NotFoundPage extends React.Component{

  componentWillMount(){
    if (window.location !== 'undefined'){
      window.location.assign("http://staging.bside.cool")
    }
  }

  render(){
    return(
      <div>
      </div>
    )
  }
}
