import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Wrapper from "../components/wrapper"
import SEO from "../components/seo"

const Div = styled.div`
  max-width: 2000px;
  margin-bottom: 1.45rem;
  background: lavenderblush;
`
const H1 = styled.h1`
  font-size: 1.5rem;
`

export default ({ data }) => {
  const { page } = data.postgres

  // Format date
  var d = new Date(page.createdAt)
  const createdDate = d.toDateString()


  return (
    <Layout>
      <Wrapper>
        <SEO title={page.title} />
        <h1>{page.title}</h1>
        { page.categoryId===9 && <p><small>Posted by {page.userByAuthorId.name} at {createdDate}</small></p>}
        <p>{page.body}</p>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query($pageId: Int!) {
    postgres {
      page: pageById(id: $pageId) {
        id
        nodeId
        categoryId
        title
        slug
        body
        createdAt
        userByAuthorId {
          id
          name
        }
      }
    }
  }
`
