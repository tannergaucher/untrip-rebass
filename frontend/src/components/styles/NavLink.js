import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"
import { space, fontSize, color, fontWeight } from "styled-system"

const MyLink = styled(Link)`
  ${space};
  ${fontSize};
  ${fontWeight};
  ${color};
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const NavLink = props => (
  <MyLink color="inherit" fontSize={[2]} fontWeight="500" {...props} />
)

export default NavLink
