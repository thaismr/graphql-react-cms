import styled from 'styled-components'
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavTop from "./navtop"

const TopHeader = styled.header`
  max-width: 1200px;
  margin: 0 auto;
`
const NavShadow = styled.div`
  clear: both;
  height: 15px;
  background: #e7e3d8;
  box-shadow: 0 -2px 2px -2px grey;
`
const Div = styled.div`
  max-width: 1200px;
  height: 45px;
  margin: 0 auto;
  padding-top: .7rem;
  background: #faf6eb;
  border-radius: 50px 50px 0 0;
`
const H1 = styled.h1`
  margin: 0 0 0 4rem;
  float: left;
  font-size: 1.2rem;
  a  {
    color: #888c1b;
    text-decoration: none;
    text-transform: uppercase;
  }
`
const Ul = styled.ul`
   list-style: none;
   margin: 0 3rem 3rem;
   display: flex;
   justify-content: space-between;
`
const Li = styled.li`
  font-size: 1.1rem;
  a  {
    color: #888c1b;
    font-weight: 500;
    text-transform: uppercase;
  }
`

const ListLink = props => (
  <Li className={`list-link-item`}>
    <Link to={props.to}>{props.children}</Link>
  </Li>
)

const Header = ({ siteTitle }) => (
  <TopHeader>
    <NavTop />
    <Div>
      <H1>
        <Link to="/">
          {siteTitle}
        </Link>
      </H1>
      <Ul className={`list-link`}>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/">News</ListLink>
        <ListLink to="/">Media</ListLink>
        <ListLink to="/">Contact</ListLink>
      </Ul>
    </Div>
    <NavShadow />
  </TopHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
