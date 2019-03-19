import React from "react"
import { Flex, Box } from "rebass"

import Menu from "./Menu"
import Brand from "./styles/Brand"
import Link from "../components/styles/Link"

const Header = ({ title, subTitle }) => (
  <Flex
    justifyContent="space-between"
    p={1}
    bg="white"
    style={{ position: "sticky", top: 0, zIndex: 1, opacity: ".97", zIndex: 5 }}
  >
    <Link to="/">
      <Brand mt={[0]} fontSize={[1, 2, 3]}>
        {title}
      </Brand>
    </Link>

    {/* <Flex>
      <Link to="/food-&-drink">
        <Brand mt={[0]} fontSize={[1, 2, 3]}>
          Food & Drink
        </Brand>
      </Link>

      <Link to="/music">
        <Brand mt={[0]} fontSize={[1, 2, 3]}>
          Music
        </Brand>
      </Link>

      <Link to="/culture">
        <Brand mt={[0]} fontSize={[1, 2, 3]}>
          Culture
        </Brand>
      </Link>
    </Flex> */}

    <Menu />
  </Flex>
)

export default Header
