module.exports = {
  siteMetadata: {
    title: `B~Side Foods | Seattle`
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `0kswtu653u0m`,
        accessToken: `f05698ad5ef43d41df517331205acf50ba500938b5dd6ca1354b3fb201713b76`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-76756414-3'
      },
    },
    `gatsby-plugin-react-helmet`,
     `gatsby-plugin-catch-links`,
     `gatsby-plugin-styled-components`,
     `gatsby-plugin-favicon`,
  ],
}
