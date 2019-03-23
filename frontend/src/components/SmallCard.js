import React from "react"
import { Heading, Text, Box } from "grommet"
import Img from "gatsby-image"

import Link from "../components/styles/Link"

const SmallCard = ({ title, intro, fluid, slug }) => (
  <Link to={slug}>
    <Box direction="row" justify="between">
      <Box>
        <Heading level="3" margin="none">
          {title}
        </Heading>
        <Text margin="none">{intro}</Text>
      </Box>
      <Img fluid={fluid} style={{ height: "90px", width: "90px" }} />
    </Box>
  </Link>
)

export default SmallCard
