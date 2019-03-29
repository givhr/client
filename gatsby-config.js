// 'gatsby-plugin-offline',
module.exports = {
  siteMetadata: {
    title: 'Givhr'
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-tslint',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'givhr',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/logo_sm.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // This type will contain remote schema Query type
        typeName: 'GIVHR',
        // This is the field under which it's accessible
        fieldName: 'givhr',
        // URL to query from
        url: 'https://givhr-api.herokuapp.com/graphql'
      }
    }
  ]
};
