// 'gatsby-plugin-offline',
module.exports = {
  siteMetadata: {
    title: 'Givhr'
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
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
    'gatsby-plugin-typescript',
    'gatsby-plugin-tslint',
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'https://b8f3c52f19b84be78d85f460f52c274d@sentry.io/1389647',
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: process.env.NODE_ENV,
        enabled: (() => ['production', 'stage'].indexOf(process.env.NODE_ENV) !== -1)()
      }
    }
  ]
};
