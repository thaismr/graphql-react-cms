import styled from 'styled-components'
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavTop from "./navtop"
import NavShadow from "./navshadow"
import navbarDetail from "../images/navbar-detail.png" // Tell Webpack this JS file uses this image
import navbarDetailFlip from "../images/navbar-detail-flip.png"

const TopHeader = styled.header`
  max-width: 1200px;
  margin: 0 auto;
`
const Div = styled.div`
  max-width: 1200px;
  height: 45px;
  margin: 0 auto;
  padding-top: .6rem;
  background: #faf6eb;
  border-radius: 50px 50px 0 0;
`
const H1 = styled.h1`
  margin: .25rem 2.5rem 0 1rem;
  float: left;
  font-size: 13pt;
  a  {
    color: #888c1b;
    text-transform: uppercase;
    &:hover {
        color: #c9d02a;
        transition: color .5s ease;
        border-bottom: 2px solid #c9d02a;
    }
  }
`
const Ul = styled.ul`
  font-size: 13pt;
   list-style: none;
   display: flex;
   justify-content: space-around;
`
const Li = styled.li`
  a  {
    color: #888c1b;
    font-weight: 600;
    text-transform: uppercase;
  }
  &:hover {
    a {
      color: #c9d02a;
      transition: color .5s ease;
      border-bottom: 2px solid #c9d02a;
    }
  }
`
const ImgLeft = styled.img`
  float: left;
  width: 16px;
  height: 20px;
  margin: 0 0 0 1rem;
`
const ImgRight = styled.img`
  float: right;
  width: 16px;
  height: 20px;
  margin: 0 0 0 1rem;
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
      <ImgLeft src={navbarDetail} alt="navbar detail" />
      <H1>
        <Link to="/">
          {siteTitle}
        </Link>
      </H1>
      <Ul className={`list-link`}>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/news/">News</ListLink>
        <ListLink to="/media/">Media</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
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

/*
&:hover {
  a[href*="about"] {
    color: white;
    margin: 10px;
    color: #888c1b;
    font-size: 18pt;
    text-decoration: overline;
  }
}

<ImgRight src={navbarDetailFlip} alt="navbar detail" />
*/

export default Header
