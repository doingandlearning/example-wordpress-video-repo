const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
    {
      allWpPost{
        edges {
        node {
          title
          id
          slug
          title
          acf {
            video {
              localFile {
                id
              }
            }
          }
        }
      }
    }
  }
    `).then((result) => {
      result.data.allWpPost.edges.forEach(({ node }) => {
        const slug =
          node.slug === "home" || node.slug === "homepage" ? `/` : node.slug;
        createPage({
          path: slug,
          component: path.resolve(`./src/templates/Post.js`),
          context: {
            content: node.content,
            id: node.id,
            slug: node.slug,
            title: node.title,
            blocks: node.blocks,
          },
        });
      });
      resolve();
    });
  });
};