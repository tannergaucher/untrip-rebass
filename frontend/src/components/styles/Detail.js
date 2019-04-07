import React from "react"
import { Text } from "grommet"

const Detail = props => (
  <Text
    {...props}
    style={{
      fontSize: "12px",
      textTransform: "uppercase",
    }}
  />
)

export default Detail
