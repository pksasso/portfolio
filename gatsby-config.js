module.exports = {
  siteMetadata: {
    title: `Patrick Sasso | Front-end Developer`,
    siteUrl: `https://patricksasso.netlify.app/`,
    description: `Meu portifólio pessoal.`,
    social: {
      linkedin: 'patricksasso',
      github: 'pksasso',
      email: 'patricksasso.dev@gmail.com',
    },
  },

  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== 'production',
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://patricksasso.netlify.app`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-171518585-1',
        head: false,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto Condensed`,
            variants: [`300`, `500`, `700`],
            subsets: [`latin`],
          },
          {
            family: `Open Sans`,
            variants: [`300`, `500`, `700`],
            subsets: [`latin`],
          },
          {
            family: `Montserrat`,
            variants: [`200`, `300`, `400`, `500`, `600`, `600i`, `700`],
            subsets: [`latin`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Patrick Sasso`,
        short_name: `Patrick Sasso`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `static/images/icon.png`,
      },
    },
    //Always the last
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`],
      },
    },
  ],
}
