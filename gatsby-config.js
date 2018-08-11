const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: 'Gromsby Demo',
  },
  pathPrefix: '/gatsby-starter-grommet',
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'custom-sass-loader',
      options: {
        postCssPlugins: [
          autoprefixer({
            browsers: ['last 2 versions'],
          })
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}

