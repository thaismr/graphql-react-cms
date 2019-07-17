import React from "react"
import styled from  "styled-components"
import { useStaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = styled(Img)`
  opacity: 1;
  transition: .5s ease;
    &:hover {
      opacity: .5;
    }
`
const ImageHover = styled(Img)`
  opacity: 0;
  transition: .5s ease;
    &:hover {
      opacity: 1;
    }
`

const NavTopWrapper = styled.div`
  margin: 2rem 1.4rem 0 auto;
  max-width: 750px;
  height: 59px;
`
const Ul = styled.ul`
   list-style: none;
   display: flex;
   justify-content: space-around;
  vertical-align: bottom;
`


const NavTop = props => {

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: {eq: "top-nav-selection.png"}) {
        childImageSharp {
          fixed(width: 150) {
          ...GatsbyImageSharpFixed
          }
        }
      }
      placeholderHover: file(relativePath: {eq: "top-nav-selected.png"}) {
        childImageSharp {
          fixed(width: 150) {
          ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const Li = styled.li`
    width: 150px;
    height: 59px;
    display: inline-block;
    background-image: url(${data.placeholderImage.childImageSharp.fixed.src});
      &:hover {
        filter: saturate(2);
        transition: filter 1s ease-in-out;
        background-image: url(${data.placeholderHover.childImageSharp.fixed.src});
        [title~=about] {
          color: white;
          margin: 10px;
          color: #888c1b;
          font-size: 18pt;
          text-decoration: overline;
        }
      }
    background-position: bottom;
    background-repeat: no-repeat;
  `

  return (
    <NavTopWrapper>
    <Ul className={`nav-top`}>
      <Li></Li>
      <Li></Li>
      <Li></Li>
      <Li></Li>
    </Ul>
    </NavTopWrapper>
  )
}

// <a href="/about/" title="about">About Ay.vu</a>

export default NavTop
