import React from "react"
import { Box, Button } from "grommet"
import { Facebook, Instagram, Twitter } from "grommet-icons"

const SocialShare = () => (
  <Box direction="row" margin={{ vertical: "xsmall" }}>
    <Button icon={<Facebook color="dark-5" size="small" />} />
    <Button icon={<Instagram color="dark-5" size="small" />} />
    <Button icon={<Twitter color="dark-5" size="small" />} />
  </Box>
)

export default SocialShare
