import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Hero from "../components/hero"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Div = styled.div`
  max-width: 300px;
  margin-bottom: 1.45rem;
  background: lavenderblush;
`
const H1 = styled.h1`
  font-size: 1.5rem;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Ayvu - Gamified Language Learning App - Home" />
    <Div className={`image-wrapper`}>
      <Image path="gatsby-astronaut.png" />
    </Div>
    <Hero />
    <H1>Ay.vu - Gamified Language Learning</H1>
    <p>Ay.vu is an App to help learn new languages by playing games, currently under development.</p>
    <p>Explore a virtual world while meeting new people and characters to practice learning languages.</p>

    <Link to="/posts/">Posts</Link>
  </Layout>
)

export default IndexPage
