import React from "react";

const Article = ({ pathContext: { data } }) => {
  console.log("Article data: ", data)
  return (
    <div>
      <h1>{data.title}</h1>
      <h4>{data.overview.overview}</h4>
      <p>{data.body.body}</p>
    </div>
  )
}

export default Article;