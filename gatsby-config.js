module.exports = {
  siteMetadata: {
    title: "VideoTest",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress-experimental",
      options: {
        url: "http://testsite.local/graphql",
      },
    },
  ],
};
