import React from "react"
import styled from "styled-components"
import { Layer as BaseLayer } from "grommet"
import { color, fontSize, space, fontWeight } from "styled-system"

const MyLayer = styled(BaseLayer)`
${color}
${fontSize}
${space}
${fontWeight}
`

const Layer = props => (
  <MyLayer
    modal
    position="right"
    animate={true}
    full="vertical"
    responsive={true}
    bg="white"
    style={{ borderRadius: "0" }}
    {...props}
  />
)

export default Layer
