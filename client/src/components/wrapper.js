import React from "react"
import styled from "styled-components"

const Div = styled.div`
  padding: 3rem;
`

const Wrapper = ({ children }) => (
  <Div>
    {children}
  </Div>
)


export default Wrapper
