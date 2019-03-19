import React from "react"
import { Box } from "rebass"
import Image from "../components/styles/Image"
import BrandSecondary from "../components/styles/BrandSecondary"

const Avatar = ({ fluid, published, name }) => (
  <Box my={[4]} bg="#fafafa">
    <Image
      fluid={fluid}
      mr={[2]}
      style={{ height: "40px", width: "40px", borderRadius: "50%" }}
    />
    <Box flexDirection="column">
      <BrandSecondary fontSize={[1]}>{published}</BrandSecondary>
      <BrandSecondary fontSize={[1]}>{name}</BrandSecondary>
    </Box>
  </Box>
)

export default Avatar
