const path = require(`path`)

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsApprentice {
          edges {
            node {
              slug
            }
          }
        }
      }   
    `).then(result => {
      result.data.allDatoCmsApprentice.edges.map(edge => {
        createPage({
          path: `apprentices/${edge.node.slug}`,
          component: path.resolve(`./src/templates/apprentice.js`),
          context: {
            slug: edge.node.slug,
            // cat: edge.node.category.slug
          },
        })
      })      
      resolve()
    })
  })
}