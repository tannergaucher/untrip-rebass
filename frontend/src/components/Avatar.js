import React from "react"
import { Heading, Box } from "grommet"
import Image from "../components/styles/Image"

const Avatar = ({ fluid, published, name, social }) => (
  <a href={social} style={{ textDecoration: "none" }}>
    <Box direction="row" justify="end" margin="medium">
      <Image
        fluid={fluid}
        style={{ height: "40px", width: "40px", borderRadius: "50%" }}
      />
      <Box margin={{ left: "small" }}>
        <Heading
          level="6"
          margin="none"
          color="dark-3"
          style={{ fontSize: "12px" }}
        >
          {published}
        </Heading>
        <Heading
          level="6"
          margin="none"
          color="dark-3"
          style={{ fontSize: "12px" }}
        >
          {name}
        </Heading>
      </Box>
    </Box>
  </a>
)

export default Avatar
