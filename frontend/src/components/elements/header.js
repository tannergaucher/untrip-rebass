import React from "react"
import { Heading, Box } from "grommet"

import { Menu } from "."
import { Link } from "../styles"
import { useSiteMetadata } from "../gatsby-hooks"

export default function Header() {
  const { title } = useSiteMetadata()

  return (
    <Box
      direction="row"
      justify="between"
      align="center"
      style={{ position: "sticky", top: 0, zIndex: 2, opacity: ".97" }}
    >
      <Link to="/">
        <Heading level="4">{title}</Heading>
      </Link>
      <Menu />
    </Box>
  )
}
