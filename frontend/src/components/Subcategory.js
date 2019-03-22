import React from "react"
import { Box, Heading } from "grommet"
import { kebabCase } from "lodash"
import Img from "gatsby-image"

import Link from "../components/styles/Link"

const Subcategory = ({ category, subcategory, fluid }) => (
  <Box
    margin={{ vertical: "large" }}
    style={{ position: "relative", borderRadius: "50px" }}
    elevation="large"
  >
    <Link to={`/${kebabCase(category)}/${kebabCase(subcategory)}`}>
      <Box
        pad="medium"
        background="rgba(0, 0, 0, .7)"
        style={{
          position: "absolute",
          top: "50%",
          right: "50%",
          zIndex: 1,
        }}
      >
        <Heading
          level="2"
          margin="none"
          style={{
            textTransform: "uppercase",
          }}
        >
          {subcategory}
        </Heading>
      </Box>
      <Img fluid={fluid} style={{ borderRadius: "50px" }} />
    </Link>
  </Box>
)

export default Subcategory
