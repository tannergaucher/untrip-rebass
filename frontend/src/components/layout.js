import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { Flex } from "rebass"

import Header from "./Header"
import theme from "../utils/theme"
import GlobalStyles from "../utils/GlobalStyles"

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
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Header title={data.site.siteMetadata.title} />
          <Flex as="main" flexDirection="column" alignItems="center" p={[3]}>
            {children}
          </Flex>
        </>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
