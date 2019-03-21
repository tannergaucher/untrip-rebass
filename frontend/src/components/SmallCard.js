import React from "react"
import { Heading, Text, Box } from "grommet"
import Img from "gatsby-image"

const SmallCard = ({ title, intro, fluid }) => (
  <Box direction="row" justify="between">
    <Box>
      <Heading level="3" margin="xsmall">
        {title}
      </Heading>
      <Text margin="xsmall">{intro}</Text>
    </Box>
    <Img fluid={fluid} style={{ height: "100px", width: "100px" }} />
  </Box>
)

export default SmallCard
