const path = require(`path`)

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsApprenticeship {
          edges {
            node {
              slug
            }
          }
        }
      }   
    `).then(result => {
      result.data.allDatoCmsApprenticeship.edges.map(edge => {
        createPage({
          path: `apprenticeships/${edge.node.slug}`,
          component: path.resolve(`./src/templates/apprenticeship.js`),
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