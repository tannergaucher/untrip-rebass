import React from "react"
import { Flex } from "rebass"
import { Grommet } from "grommet"
import styled from "styled-components"
import { space } from "styled-system"
import {
  Instagram,
  Facebook,
  Twitter,
  MapLocation,
  AddCircle,
} from "grommet-icons"

const InstagramIcon = styled(Instagram)`
  ${space}
  fill: #e1306c;
`

const FacebookIcon = styled(Facebook)`
  ${space}
  fill: #3b5998;
`

const TwitterIcon = styled(Twitter)`
  ${space}
  fill: #0084b4;
`

const LocationIcon = styled(MapLocation)`
  ${space}
`

const AddIcon = styled(AddCircle)`
  ${space}
`

const Social = () => (
  <Grommet>
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      pl={2}
    >
      <TwitterIcon size="medium" mb={[2]} />
      <FacebookIcon size="medium" mb={[2]} color="darkgrey" />
      <InstagramIcon size="medium" color="darkgrey" />
    </Flex>
  </Grommet>
)

export default Social
