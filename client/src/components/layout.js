/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { useStaticQuery, Link, graphql } from "gatsby"

import Header from "./header"
//import "./layout.css"

const Div = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const Ul = styled.ul`
   list-style: none;
   float: right;
`

const Li = styled.li`
  display: inline-block;
  margin-right: 1rem;
`

const ListLink = props => (
  <Li className={`list-link-item`}>
    <Link to={props.to}>{props.children}</Link>
  </Li>
)

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Div className={`layout-wrapper`}>
        <main>{children}</main>
        <footer>
        <Ul className={`list-link`}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
        </Ul>
          © {new Date().getFullYear()}
        </footer>
      </Div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
