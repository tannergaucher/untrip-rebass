import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { space } from "styled-system"

const MyImage = styled(Img)`
  ${space}
`

const Image = props => <MyImage {...props} />

export default Image
