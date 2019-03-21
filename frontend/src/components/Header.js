import React from "react"
import { Flex } from "rebass"
import { Heading } from "grommet"

import Menu from "./Menu"
import Link from "../components/styles/Link"

const Header = ({ title }) => (
  <>
    <Flex
      justifyContent="space-between"
      alignItems="center"
      bg="white"
      style={{ position: "sticky", top: 0, zIndex: 1, opacity: ".97" }}
    >
      <Link to="/">
        <Heading level="3" margin="small">
          {title}
        </Heading>
      </Link>
      <Menu />
    </Flex>
  </>
)

export default Header
