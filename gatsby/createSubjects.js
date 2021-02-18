const path = require(`path`)

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsSubject {
          edges {
            node {
              slug
            }
          }
        }
      }   
    `).then(result => {
      result.data.allDatoCmsSubject.edges.map(edge => {
        createPage({
          path: `courses/${edge.node.slug}`,
          component: path.resolve(`./src/templates/subject.js`),
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