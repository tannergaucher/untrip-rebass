import React from "react"
import { Tabs, Tab, Grommet } from "grommet"

import Layout from "../components/layout"
import Container from "../components/styles/Container"
import Auth from "../components/Auth"

const signin = () => (
  <Layout>
    <Container>
      <Auth />
    </Container>
  </Layout>
)

export default signin
