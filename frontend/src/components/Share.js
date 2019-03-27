import React from "react"
import { Box, Button } from "grommet"
import { FacebookOption, Instagram, Twitter } from "grommet-icons"

const SocialButton = ({ icon }) => (
  <Button
    icon={icon}
    plain={true}
    margin={{ left: "xsmall" }}
    style={{
      border: "2px solid black",
      padding: ".3em",
      borderRadius: "50%",
      background: "black",
    }}
  />
)

const Share = () => (
  <Box direction="row" justify="end" margin={{ vertical: "medium" }}>
    <SocialButton icon={<FacebookOption size="small" color="white" />} />
    <SocialButton icon={<Twitter color="white" size="small" />} />
    <SocialButton icon={<Instagram color="white" size="small" />} />
  </Box>
)

export default Share
