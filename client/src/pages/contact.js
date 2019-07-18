import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Wrapper from "../components/wrapper"
import NavShadow from "../components/navshadow"
import SEO from "../components/seo"

const Div = styled.div`
  max-width: 2000px;
  margin-bottom: 1.45rem;
  background: lavenderblush;
`
const H1 = styled.h1`
  font-size: 1.5rem;
`

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Wrapper>
      <h1>Contact Us</h1>
      <p>contact@ay.vu</p>
      <form method="post" action="send-contact.php">
        <label>
          Name
          <input type="text" name="name" id="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" id="email" />
        </label>
        <label>
          Subject
          <input type="text" name="subject" id="subject" />
        </label>
        <label>
          Message
          <textarea name="message" id="message" rows="5" />
        </label>
        <button type="submit">Send</button>
        <input type="reset" value="Clear" />
      </form>
    </Wrapper>
  </Layout>
)

export default ContactPage
