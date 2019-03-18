import React from "react"
import { Button } from "rebass"

const BrandButton = props => (
  <Button
    bg="white"
    color="black"
    mt={[2]}
    p={[3]}
    width={[1]}
    fontWeight="200"
    letterSpacing="3px"
    textAlign="right"
    fontSize={[1, 2]}
    borderTop="1px solid black"
    borderRight="2px solid black"
    borderBottom="4px solid black"
    borderLeft="2px solid black"
    borderRadius="4px"
    {...props}
    style={{ textTransform: "uppercase" }}
  />
)

export default BrandButton
