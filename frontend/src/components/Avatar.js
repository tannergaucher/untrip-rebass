import React from "react"
import { Text, Box } from "grommet"
import Img from "gatsby-image"

const SmallText = ({ text }) => (
  <Text level="6" margin="none" color="dark-3" style={{ fontSize: "12px" }}>
    {text}
  </Text>
)

function Avatar({ fixed, published, name, social }) {
  return (
    <a href={social} style={{ textDecoration: "none" }}>
      <Box
        direction="row"
        justify="end"
        align="center"
        margin={{ vertical: "medium" }}
      >
        <Img fixed={fixed} style={{ borderRadius: "50%" }} />
        <Box margin={{ left: "small" }}>
          <SmallText text={published} />
          <SmallText text={name} />
        </Box>
      </Box>
    </a>
  )
}

export default Avatar
