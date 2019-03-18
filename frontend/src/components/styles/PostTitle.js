import React from "react"
import { Heading } from "rebass"

const PostTitle = props => (
  <Heading
    {...props}
    mt={[1, 2]}
    fontSize={[4, 5]}
    letterSpacing="-1.5px"
    fontWeight="900"
    lineHeight="1"
  />
)

export default PostTitle
