import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { rhythm } from "../utils/typography"

const H1 = styled.h1`
  display: inline-block;
  border-bottom: 1px solid;
`
const H3 = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`

const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      allMarkdownRemark(filter: {frontmatter: {title: {eq: "Hero"}}}) {
        nodes {
          id
          html
          frontmatter {
            title
          }
        }
      }
    }
  `)

  return (
    <>
      <div key={data.allMarkdownRemark.nodes[0].id}>
        <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.nodes[0].html }} />
      </div>
    </>
  )
}

export default Hero
