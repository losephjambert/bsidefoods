import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Styled from 'styled-components'
import Header from '../components/header.js'

const Container = Styled.div`

`

import 'normalize.css';

const TemplateWrapper = ({ children, data }) =>
  <Container>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'b-side foods. an every day breakfast and lunch place on capitol hill in seattle, washington' },
        { name: 'keywords', content: 'breakfast, lunch, eggs, food, seattle, capitol hill, bowls, snacks, coffee, neighborhood, sandwich, brunch' },
        { name: 'robots', content: 'index, follow' },
        { name: 'revisit-after', content: '1 month' },
        { name: 'msapplication-tap-highlight', content: 'no' },
        { name: 'theme-color', content: '#2F3BA2' },
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
  </Container>

export default TemplateWrapper

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`