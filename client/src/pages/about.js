import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Ayvu - Gamified Language Learning App - About" />
    <h1>About Ay.vu</h1>
    <p>Ay.vu is an App to help learn new languages by playing games, currently under development.</p>
    <p>Explore a virtual world while meeting new people and characters to practice learning languages.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/">Back to Home</Link>
  </Layout>
)

export default AboutPage
