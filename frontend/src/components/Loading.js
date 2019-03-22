import React from "react"
import { DoubleBounce } from "styled-spinkit"
import { Box } from "grommet"

const Loading = () => (
  <Box
    align="center"
    justify="center"
    fill="vertical"
    style={{ height: "calc(100vh -56px)" }}
  >
    <DoubleBounce />
  </Box>
)

export default Loading
