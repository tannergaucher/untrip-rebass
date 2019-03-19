import React from "react"
import { Heading } from "rebass"

const SecondaryText = props => (
  <Heading
    fontSize={[1, 2]}
    fontWeight="300"
    lineHeight="1.667"
    letterSpacing="1px"
    {...props}
  />
)

export default SecondaryText
