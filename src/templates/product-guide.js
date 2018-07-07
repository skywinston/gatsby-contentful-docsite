import React from 'react'
import styled from "styled-components";
import Link from 'gatsby-link'

const ProductGuide = ({ pathContext: { data } }) => {
  return (
    <div>
      <h2>{data.product}</h2>
      <p>{data.description.description}</p>
      <br />
      <br />
      {data.topics.map(topic => {
        return (
          <TopicCard key={topic.title}>
            <h3>{topic.title}</h3>
            <hr />
            <ul>
              {topic.articles.map(article => <li key={article.id}><Link to={`/articles/${article.id}`}>{article.title}</Link></li>)}
            </ul>
          </TopicCard>
        )
      })}
    </div>
  )
}

export default ProductGuide

// Styled
const TopicCard = styled.div`
  width: 312px;
  height: 470px;
  margin-right: 40px;
  border: 1px solid black;
  padding: 20px;
  box-sizing: border-box;

  h3 {
    margin: 0 0 32px;
  }

  a {
    margin: 0 0 12px;
  }
`;