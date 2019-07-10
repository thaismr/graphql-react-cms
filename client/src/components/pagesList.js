import React from "react"

const PagesList = ({ pages }) => (
  <div>
    {pages.map((page, i) => (
      <div key={i}>
        <h2>{page.title}</h2>
      </div>
    ))}
  </div>
)

export default PagesList
