import React, { Fragment } from 'react'
import Link from 'gatsby-link'

const ProductGuide = ({ data }) => {
  console.log(data)
  return (
    <div>
      <h1>Product Guides</h1>
      {data.allContentfulProductGuide.edges.map(({ node }) => (
        <div key={node.product}>
          <h2>{node.product}</h2>
          <hr />
          {node.topics.map(topic => <div key={topic.title}>{topic.title}</div>)}
        </div>
      ))}
    </div>
  );
}

export default ProductGuide

export const query = graphql`
  query GetProductGuides {
    allContentfulProductGuide(filter: { id: { regex: "/^((?!de-DE).)*$/" } }) {
      edges {
        node {
          id
          product
          description {
            description
          }
          topics {
            title
            articles {
              id
              title
            }
          }
        }
      }
    }
  }
`
