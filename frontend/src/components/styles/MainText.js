import React from "react"

import { Text } from "rebass"

const MainText = props => (
  <Text
    fontSize={[1, 2]}
    lineHeight="1.667"
    fontWeight="500"
    letterSpacing=".5px"
    my={[4, 5, 6]}
    {...props}
  />
)

export default MainText
