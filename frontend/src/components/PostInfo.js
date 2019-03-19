import React from "react"
import { Flex, Box } from "rebass"
import Info from "./styles/Info"
import Social from "../components/Social"

const PostInfo = ({ category, neighborhood }) => (
  <Flex justifyContent="space-between">
    <Box>
      <Info>{category}</Info>
      {neighborhood && <Info>{neighborhood}</Info>}
    </Box>
    <Social />
  </Flex>
)

export default PostInfo
