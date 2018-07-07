import React from "react";

const Article = ({ pathContext: { data } }) => {
  console.log("Article data: ", data)
  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  )
}

export default Article;