import React from "react"
import { Heading, Text, Box } from "grommet"
import Img from "gatsby-image"

const SmallCard = ({ title, intro, fluid }) => (
  <Box direction="row" justify="between">
    <Box>
      <Heading level="3" margin="none">
        {title}
      </Heading>
      <Text margin="none">{intro}</Text>
    </Box>
    <Img fluid={fluid} style={{ height: "90px", width: "90px" }} />
  </Box>
)

export default SmallCard
