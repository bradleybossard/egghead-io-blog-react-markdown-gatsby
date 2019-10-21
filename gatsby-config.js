module.exports = {
  siteMetadata: {
    title: 'My Blog',
    description: 'My cool blog'
  },
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        options: {
          name: 'pages',
          path: `${_dirname}/src/pages`
        }
      }
    }
  ]
}
