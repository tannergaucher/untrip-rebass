import React from "react"
import { Heading, Box } from "grommet"
import Image from "../components/styles/Image"

const Avatar = ({ fluid, published, name, social }) => (
  <a href={social} style={{ textDecoration: "none" }}>
    <Box direction="row" align="center">
      <Image
        fluid={fluid}
        style={{ height: "40px", width: "40px", borderRadius: "50%" }}
      />
      <Box margin={{ left: "small" }}>
        <Heading level="6" margin="none" color="dark-3">
          {published}
        </Heading>
        <Heading level="6" margin="none" color="dark-3">
          {name}
        </Heading>
      </Box>
    </Box>
  </a>
)

export default Avatar
