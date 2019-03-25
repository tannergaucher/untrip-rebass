import React from "react"
import PropTypes from "prop-types"
import { Box, Grommet } from "grommet"
import { StaticQuery, graphql } from "gatsby"
import Header from "./Header"
import GlobalStyles from "../utils/GlobalStyles"

const theme = {
  global: {
    colors: {
      brand: "black",
    },
  },
  accordion: {
    border: {
      side: "bottom",
      color: "light-3",
    },
  },
  carousel: {
    icons: {
      color: "dark-1",
    },
  },
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Grommet theme={theme}>
        <>
          <GlobalStyles />
          <Header title={data.site.siteMetadata.title} />
          <Box as="main" align="center">
            {children}
          </Box>
        </>
      </Grommet>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
