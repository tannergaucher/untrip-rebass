import React from "react"
import { Box } from "rebass"

const Banner = props => (
  <Box
    p={4}
    bg="white"
    mt={[6]}
    flexDirection="column"
    alignItems={["flex-start"]}
    {...props}
    style={{
      borderTop: "1px solid black",
      borderRight: "2px solid black",
      borderBottom: "4px solid black",
      borderLeft: "2px solid black",
      borderRadius: "4px",
    }}
  />
)

export default Banner
