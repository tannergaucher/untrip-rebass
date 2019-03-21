import React from "react"
import { Flex, Box } from "rebass"
import { Heading, Grommet } from "grommet"
import Image from "../components/styles/Image"

const Avatar = ({ fluid, published, name, social }) => (
  <Grommet>
    <a href={social} style={{ textDecoration: "none" }}>
      <Flex my={[4]} bg="#fafafa" alignItems="center">
        <Image
          fluid={fluid}
          mr={[2]}
          style={{ height: "40px", width: "40px", borderRadius: "50%" }}
        />
        <Box flexDirection="column">
          <Heading level="6" margin="none" color="dark-3">
            {published}
          </Heading>
          <Heading level="6" margin="none" color="dark-3">
            {name}
          </Heading>
        </Box>
      </Flex>
    </a>
  </Grommet>
)

export default Avatar
