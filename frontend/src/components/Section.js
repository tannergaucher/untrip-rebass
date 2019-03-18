import React from "react"
import { Heading, Flex } from "rebass"

import Brand from "../components/styles/Brand"
import Divider from "../components/styles/Divider"

const Section = ({ title, children }) => (
  <Flex flexDirection="column">
    <Brand mt={[6]} fontSize={[3, 4]} style={{ textTransform: "uppercase" }}>
      {title}
    </Brand>
    <Divider />
    {children}
    <Heading
      fontSize={[1, 2]}
      fontWeight="900"
      color="grey"
      style={{ textTransform: "uppercase" }}
    >
      More {title}
    </Heading>
  </Flex>
)

export default Section
