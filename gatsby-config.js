/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `The French Garden`,
    description: `Providing flowers for your events and celebrations.`,
    author: "Marta Sastre Haro",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/pages/img/`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
