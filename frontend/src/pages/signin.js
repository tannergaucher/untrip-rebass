import React from "react"
import { Box } from "grommet"

import Layout from "../components/layout"
import Auth from "../components/Auth"

const signin = () => (
  <Layout>
    <Box style={{ height: "calc(100vh - 200px)" }} justify="center">
      <Auth />
    </Box>
  </Layout>
)

export default signin
