import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Header from '../components/header.js'

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="B-side Foods | Seattle"
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
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
