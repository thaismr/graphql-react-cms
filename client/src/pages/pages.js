import React from "react"
import { graphql } from "gatsby"
import PagesList from "../components/pagesList"

const Pages = ({ data }) => (
  <div>
    <h1>Site Pages</h1>
    <PagesList pages={data.api.allFilms} />
  </div>
)

export default Pages

export const query = graphql`
  query PagesListQuery {
    api {
      allFilms(orderBy: createdAt_ASC) {
        director
        createdAt
        title
        id
      }
    }
  }
`
