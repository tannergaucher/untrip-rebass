import React from "react"
import { Box } from "grommet"

import { Auth } from "../components/auth"
import { Layout } from "../components/elements"

export default function SigninPage() {
  return (
    <Layout>
      <Box>
        <Auth />
      </Box>
    </Layout>
  )
}
