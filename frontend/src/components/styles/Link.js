import styled from "styled-components"
import Link from "gatsby-link"

import { color } from "styled-system"

const MyLink = styled(Link)`
  ${color};
  color: black;
  text-decoration: none;
`

export default MyLink
