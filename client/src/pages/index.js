import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Hero from "../components/hero"

import Layout from "../components/layout"
import NavShadow from "../components/navshadow"
import Image from "../components/image"
import SEO from "../components/seo"

const Wrapper = styled.div`
  padding: 0 3rem 3rem 3rem;
`
const Div = styled.div`
  max-width: 2000px;
  margin-bottom: 1.45rem;
  background: lavenderblush;
`
const H1 = styled.h1`
  font-size: 1.5rem;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Div className={`image-wrapper`}>
      <Image path="ayvu-game-sample-bigger.jpg" />
      <NavShadow />
    </Div>
    <Wrapper>
      <Hero />
    </Wrapper>
  </Layout>
)

export default IndexPage
