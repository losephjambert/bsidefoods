import React from 'react'
import Link from 'gatsby-link'
import Logo from '../assets/logo-full.png'
import BorderTop from '../assets/border.svg'
import BorderBottom from '../assets/border-bottom.svg'
import Patio from '../assets/patio.svg'
import Days from '../assets/days.svg'

const IndexPage = () =>
  <div className="container">
    <div 
      style={{backgroundImage: `url(${BorderTop})`}}
      className="border border-top"></div>
    <div 
      style={{backgroundImage: `url(${BorderBottom})`}}
      className="border border-bottom"></div>
    <div 
      style={{backgroundImage: `url(${Days})`}}
      className="standard-background-image top-left-animation"></div>
    <div 
      style={{backgroundImage: `url(${Patio})`}}
      className="standard-background-image bottom-right-animation"></div>
    <div 
      style={{backgroundImage: `url(${Logo})`}}
      className="standard-background-image logo"></div>
    {/* 
    Uncomment to show link to page 2
    <Link to="/page-2/">Go to page 2</Link>
    */ } 
  </div>

export default IndexPage
