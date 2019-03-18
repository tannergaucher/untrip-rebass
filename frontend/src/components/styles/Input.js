import React from "react"
import styled from "styled-components"
import { space, width, fontSize, fontWeight } from "styled-system"

const Input = styled.input`
  ${space};
  ${width};
  ${fontSize};
  ${fontWeight};
`

const MyInput = props => (
  <Input
    fontSize={[2, 3]}
    fontWeight="300"
    p={2}
    {...props}
    style={{
      border: "none",
    }}
  />
)

export default MyInput
