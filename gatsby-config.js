/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteTitle: `Patricia Marcos - Data Analyst`,
    siteTitleAlt: `Patricia Marcos - Data Analyst - Portfolio`,
    siteHeadline: `Patricia Marcos - Data Analyst`,
    siteUrl: `https://github.com/patriciamromero`,
    siteDescription: `Portfolio of some project made by Patricia`,
    siteLanguage: `en`,
    author: `patriciamromero`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `patricia-marcos-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#FDF5E6`,
        theme_color: `#E67E22`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // Make sure this file exists
      },
    },
  ],
}
