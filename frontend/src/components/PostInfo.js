import React from "react"
import { Flex } from "rebass"
import Info from "./styles/Info"

const PostInfo = ({ category, neighborhood }) => (
  <Flex>
    <Info>{category}</Info>
    {neighborhood && <Info>{neighborhood}</Info>}
  </Flex>
)

export default PostInfo
