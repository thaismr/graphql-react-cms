import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Wrapper from "../components/wrapper"
import SEO from "../components/seo"

export default ({ data }) => {

  return (
    <Layout>
      <Wrapper>
        <SEO title="Site News" />
        <h1>Site News</h1>
        <table>
          <tbody>
            {data.postgres.allPagesList.map(news => {

              // Format date
              var d = new Date(news.createdAt)
              const createdDate = d.toDateString()
              var d2 = new Date(news.updatedAt)
              const updatedDate = d2.toDateString()

              var wasUpdated = news.createdAt !== news.updatedAt

              const slug = "/" + news.slug

              return (
                <tr key={news.nodeId}>
                  <td>
                    <h3><Link to={slug}>{news.title}</Link></h3>
                    <p><small>
                      Posted by {news.userByAuthorId.name} at {createdDate}
                      { wasUpdated===true && <i> (updated: {updatedDate})</i>}
                    </small></p>
                    <p>{news.bodySummary}</p>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query {
    postgres {
      allPagesList(condition: {categoryId: 9}, orderBy: UPDATED_AT_DESC) {
        createdAt
        updatedAt
        title
        slug
        id
        nodeId
        userByAuthorId {
          name
          id
        }
        bodySummary(maxLength: 500)
      }
    }
  }
`
