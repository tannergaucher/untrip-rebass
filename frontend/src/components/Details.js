import React from "react"
import { navigate } from "@reach/router"
import { kebabCase } from "lodash"
import { Box, Heading, Anchor, Ticket } from "grommet"

import {
  Facebook,
  Instagram,
  Domain,
  Location,
  MapLocation,
  Clock,
  Organization,
} from "grommet-icons"

const Detail = props => (
  <Heading
    {...props}
    style={{ fontSize: "12px", textTransform: "uppercase" }}
  />
)

const Details = ({
  name,
  open,
  close,
  caveats,
  website,
  facebook,
  instagram,
  phone,
  price,
  type,
  neighborhood,
}) => (
  <Box wrap pad="medium">
    <Detail margin="none">
      <Anchor
        icon={<Organization size="small" />}
        label={type}
        onClick={() => navigate(`/business/${kebabCase(type)}`)}
      />
    </Detail>
    <Detail margin="none">
      <Anchor
        icon={<Location size="small" />}
        label={neighborhood}
        onClick={() => navigate(`/${kebabCase(neighborhood)}`)}
      />
    </Detail>

    <Box direction="row" align="center">
      <Clock size="small" />
      <Detail margin={{ vertical: "none", left: "small" }}>
        {open} - {close}
      </Detail>
    </Box>

    {caveats && <Detail>{caveats}</Detail>}
    {price && <Detail>{price}</Detail>}
    {phone && <Detail>{phone}</Detail>}

    <Box direction="row" justify="start">
      <Anchor icon={<Facebook size="small" />} href={facebook} />
      <Anchor icon={<Instagram size="small" />} href={instagram} />
      <Anchor icon={<Domain size="small" />} href={website} />
      <Anchor
        icon={<MapLocation size="small" />}
        onClick={() => navigate(`/places/${kebabCase(name)}`)}
      />
    </Box>
  </Box>
)

export default Details
