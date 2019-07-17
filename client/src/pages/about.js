import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Wrapper from "../components/wrapper"
import Image from "../components/image"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <Wrapper>
      <SEO title="About" />
      <h1>About Ay.vu</h1>
      <p>Ay.vu is an App to help learn new languages by playing games, currently under development.</p>
      <p>Explore a virtual world while meeting new people and characters to practice learning languages.</p>
      <div style={{ maxWidth: `2000px`, marginBottom: `1.45rem` }}>
      </div>
      We are working hard to bring Ay.vu to life! Meanwhile, you can check out our <Link to="/media">Media</Link> or get in <Link to="/contact">Contact</Link>.
    </Wrapper>
  </Layout>
)

export default AboutPage
