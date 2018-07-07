const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const createProductGuidePages = new Promise((resolve, reject) => {
    graphql(`
    {
      allContentfulProductGuide(filter: {id: {regex: "/^((?!de-DE).)*$/"}}) {
        edges {
          node {
            id
            product
            description {
              description
            }
            topics {
              title
              id
              articles {
                title
                id
              }
            }
          }
        }
      }
    }
    `).then(result => {
      console.log(result)
      result.data.allContentfulProductGuide.edges.forEach(({ node }) => {
        console.log(node)
        const slug = node.product.split(" ").join("-").toLowerCase();
        createPage({
          path: `src/pages/${slug}`,
          component: path.resolve(`./src/templates/product-guide.js`),
          context: {
            data: node
          }
        })
      })
    })
    resolve()
  })

  const createArticlePages = new Promise((resolve, reject) => {
    graphql(`
    {
      allContentfulArticle {
        edges {
          node {
            id
            title
            overview {
              overview
            }
            body {
              body
            }
          }
        }
      }
    }
    `).then(result => {
      result.data.allContentfulArticle.edges.forEach(({ node }) => {
        console.log('article node', node)
        createPage({
          path: `src/pages/articles/${node.id}`,
          component: path.resolve("./src/templates/article.js"),
          context: {
            data: node
          }
        })
      })
      resolve()
    })
  })

  return Promise.all([createProductGuidePages, createArticlePages]).then(values => console.log(values))
}
