require("dotenv").config({ path: `.env` })

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.althausdigital.co.uk`,
    title: `Althaus Digital`,
    description: `Welcome to althaus digital - an alternative training provider who see the bigger picture.`,
    author: `@althausdigital`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `althaus-digital`,
        short_name: `althaus`,
        start_url: `/`,
        background_color: `#131739`,
        theme_color: `#131739`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `${process.env.DATOCMS_KEY}`,
      },
    },
  ],
}
