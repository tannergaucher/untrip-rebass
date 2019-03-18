import React from "react"
import { Heading } from "rebass"

const Info = props => (
  <Heading
    fontSize={[1]}
    mr={[3]}
    style={{ textTransform: "uppercase" }}
    color="darkgrey"
    fontWeight="200"
    letterSpacing="1px"
    {...props}
  />
)

export default Info
