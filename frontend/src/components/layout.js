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
            subTitle
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Header
            title={data.site.siteMetadata.title}
            subTitle={data.site.siteMetadata.subTitle}
          />
          <Flex as="main" flexDirection="column" alignItems="center">
            {children}
          </Flex>
          {/* <Footer /> */}
        </>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
