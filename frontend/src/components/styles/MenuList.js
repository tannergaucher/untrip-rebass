import React from "react"
import { Flex } from "rebass"

const MenuList = props => (
  <Flex
    flexDirection="column"
    alignItems="center"
    width="1"
    style={{ height: "100%" }}
    {...props}
  />
)

export default MenuList
