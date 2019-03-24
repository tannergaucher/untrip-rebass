import React from "react"
import { Heading } from "grommet"

const Detail = props => (
  <Heading
    {...props}
    style={{
      fontSize: "10px",
      textTransform: "uppercase",
      fontFamily: "monospace",
    }}
  />
)

export default Detail
