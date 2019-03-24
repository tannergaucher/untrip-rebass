import React from "react"
import { Heading, Box } from "grommet"

import Menu from "./Menu"
import Link from "../components/styles/Link"

const Header = ({ title }) => (
  <Box
    direction="row"
    justify="between"
    align="center"
    background={{ color: "white" }}
    style={{ position: "sticky", top: 0, zIndex: 2, opacity: ".97" }}
  >
    <Link to="/">
      <Heading level="4">{title}</Heading>
    </Link>
    <Menu />
  </Box>
)

export default Header
