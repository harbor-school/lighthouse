module.exports = {
  siteMetadata: {
    title: `Gatsby Lighthouse Starter`,
    description: ``,
    author: `@ruucm`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `gatsby-lighthouse-starter`,
        short_name: `gatsby-lighthouse-starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      // it replace the StyletronProvider
      resolve: `gatsby-plugin-styletron`,
      options: {
        // You can pass options to Styletron.
        prefix: "_",
        debug: true,
      },
    },
  ],
}
