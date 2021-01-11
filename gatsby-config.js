module.exports = {
  siteMetadata: {
    title: "VideoTest",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        quality: 70
      }
    },
    {
      resolve: "gatsby-source-wordpress-experimental",
      options: {
        url: "http://testsite.local/graphql",
      },
    },
    `gatsby-transformer-sharp`,
  ],
};
