import React from "react"

import Layout from "../components/layout"
import Container from "../components/styles/Container"
import Link from "../components/styles/Link"
import Signin from "../containers/Signin"

const signin = () => (
  <Layout>
    <Container>
      <Link to="/signup">Sign up</Link>
      <Signin />
    </Container>
  </Layout>
)

export default signin
