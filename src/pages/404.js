import React from 'react'

export default class NotFoundPage extends React.Component{

  componentWillMount(){
    window.location.assign("http://staging.bside.cool")
  }

  render(){
    return(
      <div>
      </div>
    )
  }
}
