const path = require(`path`)

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsResourceCategory {
          edges {
            node {
              slug
            }
          }
        }
      }   
    `).then(result => {
      result.data.allDatoCmsResourceCategory.edges.map(edge => {
        createPage({
          path: `resources/${edge.node.slug}`,
          component: path.resolve(`./src/templates/resourceCategory.js`),
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