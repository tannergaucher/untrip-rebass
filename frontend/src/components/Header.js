import React from "react"
import { Flex } from "rebass"

import Menu from "./Menu"
import Brand from "./styles/Brand"
import Link from "../components/styles/Link"

const Header = ({ title }) => (
  <Flex
    justifyContent="space-between"
    alignItems="center"
    bg="white"
    style={{ position: "sticky", top: 0, zIndex: 1, opacity: ".97" }}
  >
    <Link to="/">
      <Brand mt={[0]} fontSize={[1, 2, 3]} pl={[3]}>
        {title}
      </Brand>
    </Link>
    <Menu />
  </Flex>
)

export default Header
