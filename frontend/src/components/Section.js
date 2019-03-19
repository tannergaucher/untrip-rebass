import React from "react"
import { Heading, Flex } from "rebass"
import { kebabCase } from "lodash"

import Brand from "../components/styles/Brand"
import Divider from "../components/styles/Divider"
import Link from "../components/styles/Link"

const Section = ({ title, children }) => (
  <Flex flexDirection="column">
    <Brand mt={[6]} fontSize={[3, 4]} style={{ textTransform: "uppercase" }}>
      {title}
    </Brand>
    <Divider />
    {children}
    <Heading
      my={[3]}
      fontSize={[1, 2]}
      fontWeight="900"
      style={{ textTransform: "uppercase" }}
    >
      <Link to={`/${kebabCase(title)}`}>More {title}</Link>
    </Heading>
  </Flex>
)

export default Section
