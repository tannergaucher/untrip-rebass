import React from "react"
import PropTypes from "prop-types"
import { Box, Grommet } from "grommet"
import { StaticQuery, graphql } from "gatsby"

import { Header } from "."

const theme = {}

export default function Layout({ children }) {
  return (
    <Grommet theme={theme}>
      <Header />
      <Box as="main" align="center">
        {children}
      </Box>
    </Grommet>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
