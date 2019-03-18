import React from "react"
import { Flex, Box, Heading, Text } from "rebass"
import Img from "gatsby-image"

const SmallPost = ({ title, intro, fluid }) => (
  <Flex justifyContent="space-between" alignItems="center" width={[1]}>
    <Box>
      <Heading
        fontSize={[3, 4]}
        letterSpacing="-1.7px"
        fontWeight="900"
        style={{ wordSpacing: "2px" }}
      >
        {title}
      </Heading>
      <Text mt={[0]} fontSize={[2]} fontWeight="300">
        {intro}
      </Text>
    </Box>
    <Img fluid={fluid} style={{ height: "100px", width: "100px" }} />
  </Flex>
)

export default SmallPost
