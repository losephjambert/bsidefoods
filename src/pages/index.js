import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () =>
  <div className="container">
    <div className="border border-top"></div>
    <div className="border border-bottom"></div>
    <div className="standard-background-image top-left-animation"></div>
    <div className="standard-background-image bottom-right-animation"></div>
    <div className="standard-background-image logo"></div>
    {/* 
    Uncomment to show link to page 2
    <Link to="/page-2/">Go to page 2</Link>
    */ } 
  </div>

export default IndexPage
