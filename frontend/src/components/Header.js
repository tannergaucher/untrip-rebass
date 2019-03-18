import React from "react"
import { Flex } from "rebass"

import Menu from "./Menu"
import Brand from "./styles/Brand"

const Header = ({ title, subTitle }) => (
  <Flex
    justifyContent="space-between"
    p={1}
    bg="white"
    style={{ position: "sticky", top: 0, zIndex: 1 }}
  >
    <Flex flexDirection="column" justifyContent="center">
      <Brand mt={[0]} fontSize={[1, 2, 3]}>
        {title}
      </Brand>
    </Flex>

    <Menu />
  </Flex>
)

export default Header
