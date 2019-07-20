import React from "react"
import { Box, Button } from "grommet"
import { FacebookOption, Instagram, Twitter } from "grommet-icons"

const SocialButton = ({ icon }) => (
  <Button icon={icon} plain={true} margin={{ left: "small" }} />
)

const Share = () => (
  <Box direction="row" justify="end" margin={{ vertical: "medium" }}>
    <SocialButton icon={<FacebookOption size="small" />} />
    <SocialButton icon={<Twitter size="small" />} />
    <SocialButton icon={<Instagram size="small" />} />
  </Box>
)

export default Share
