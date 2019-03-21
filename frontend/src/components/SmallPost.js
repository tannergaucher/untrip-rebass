import React from "react"
import { Flex, Box } from "rebass"
import { Grommet, Heading, Text } from "grommet"
import Img from "gatsby-image"

const SmallPost = ({ title, intro, fluid }) => (
  <Grommet>
    <Flex justifyContent="space-between" width={[1]}>
      <Box>
        <Heading level="3">{title}</Heading>
        <Text>{intro}</Text>
      </Box>
      <Img fluid={fluid} style={{ height: "100px", width: "100px" }} />
    </Flex>
  </Grommet>
)

export default SmallPost
