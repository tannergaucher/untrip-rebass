import React from "react"
import { Flex } from "rebass"
import { Heading, Grommet } from "grommet"
import { kebabCase } from "lodash"

import Link from "../components/styles/Link"

const Section = ({ title, children }) => (
  <Grommet>
    <Flex flexDirection="column">
      <Heading level="3">{title}</Heading>
      {children}
      <Heading level="5">
        <Link to={`/${kebabCase(title)}`}>More {title}</Link>
      </Heading>
    </Flex>
  </Grommet>
)

export default Section
