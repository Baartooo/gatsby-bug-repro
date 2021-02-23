/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://deployment.live/avionautcms/graphql`,
        debug: {
          graphql: {
            showQueryVarsOnError: true,
          },
        },
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        failOnError: false,
      },
    },
  ],
}
