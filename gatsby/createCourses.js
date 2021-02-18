const path = require(`path`)

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsCourse {
          edges {
            node {
              slug
              level
              subject {
                slug
              }
            }
          }
        }
      }   
    `).then(result => {
      result.data.allDatoCmsCourse.edges.map(edge => {
        createPage({
          path: `/courses/${edge.node.subject.slug }/${edge.node.slug}-level-${edge.node.level}`,
          component: path.resolve(`./src/templates/course.js`),
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