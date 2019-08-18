module.exports = {
  siteMetadata: {
    title: `Jon Thomann Development`,
    description: `My portfolio site`,
    author: `@jont`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `react-hot-loader/babel`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.DEPLOY_URL 
        ? 'https://myportfolio-strapi-gatsby.herokuapp.com'
        : 'http://localhost:1337',
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          'homepageproject',
          'user'
        ],
        queryLimit: 1000,
      },
    },
      {
    resolve: "gatsby-plugin-react-svg",
    options: {
      rule: {
        include: /images/
      },
    },
  },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
