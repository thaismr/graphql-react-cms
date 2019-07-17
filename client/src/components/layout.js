/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import NavShadow from "./navshadow"
import { useStaticQuery, Link, graphql } from "gatsby"

import Header from "./header"
//import "./layout.css"

const Main = styled.div`
  background: #faf6eb;
`
const Div = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
const Footer = styled.div`
  height: 55px;
  margin: 0 auto;
  background: #faf6eb;
  border-radius: 0 0 50px 50px;
`
const Copyright = styled.div`
  float: left;
  margin: .2rem 0 0 3rem;
`
const Ul = styled.ul`
  float: right;
   list-style: none;
   display: flex;
   align-content: space-around;
   margin: .2rem 3rem 0 0;
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
        <Main>{children}</Main>
        <Footer>
          <NavShadow />
          <Ul className={`list-link`}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/news/">News</ListLink>
            <ListLink to="/media/">Media</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
          </Ul>
          <Copyright>
            © {new Date().getFullYear()} Ay.vu
          </Copyright>
        </Footer>
      </Div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
