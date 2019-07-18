//const private = require('./private/private')

//const { POSTGRES_URI } = private

module.exports = {
  siteMetadata: {
    title: `Ay.vu - Gamified Language Learning`,
    description: `Learn new languages while playing games, exploring a virtual world and meeting new people and characters.`,
    author: `@thais.mendes.ramalho`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    /*
    {
      resolve: 'gatsby-source-pg',
      options: {
        connectionString: POSTGRES_URI,
        schema: 'app_public',
      },
    },
    */
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "API",
        // This is the field under which it's accessible
        fieldName: "api",
        // URL to query from
        url: "http://localhost:5000/graphiql",
        // refetch interval in seconds
        refetchInterval: 600,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        omitGoogleFont: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ayvu-website`,
        short_name: `ayvuweb`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
