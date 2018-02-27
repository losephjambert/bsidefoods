import React from 'react'
import Styled from 'styled-components'

import Colors from '../styleVariables/colors'
import Media from '../styleComponents/mediaQueries'

const {yellow, blue, pink, white, brandBlue} = Colors
const size = 600

const items = [
  {
    name: 'Help Docs' ,
    url: 'https://paper.dropbox.com/doc/So-you-want-to-add-content-to-the-bside-website-8SchBQrSoaT7Xksz2CnMN?_tk=share_copylink'
  } ,
  {
    name: 'Contentful Dashboard' ,
    url: 'https://app.contentful.com/spaces/0kswtu653u0m'
  }
]
const SectionContainer = Styled.div`
  margin: 250px 0 0;
  padding: 0 15px;
`
const Section = Styled.section`
  padding: 25px 15px 0;
  margin: 0 auto;
  background-color: ${pink};
  min-height: 650px;
  max-width: ${size}px;
  box-shadow: 0 -4px 6px -6px black;
`
const SectionTitle = Styled.h1`
  flex: 1 0 100%;
  margin: 0 0 35px;
  color: ${brandBlue};
  font-family:'Cornerstone';
  font-size: 2em;
  ${Media.forTabletPortraitUp`
    font-size: 3em;
  `}
`
const SectionItem = Styled.li`
  list-style: none;
  flex: 1 0 100%;
  margin-bottom: 25px;
  font-family:'Century';
  text-indent: 15px;
`
const LinkItem = Styled.a`
  color: ${brandBlue};
`

const listItems = items.map ((item, i)=>
  <SectionItem key={i}>
    <LinkItem href={item.url}>{item.name}</LinkItem>
  </SectionItem>
)

export default class HelpPage extends React.Component{

  render(){

    return(
      <SectionContainer>
        <Section>
          <SectionTitle>Helpful Links</SectionTitle>
          {listItems}
        </Section>
      </SectionContainer>
    )
  }
}
