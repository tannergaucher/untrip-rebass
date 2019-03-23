import React from "react"
import { navigate } from "@reach/router"
import { kebabCase } from "lodash"
import { Box, Anchor } from "grommet"
import {
  Location,
  Clock,
  Organization,
  Domain,
  Facebook,
  Instagram,
  Phone,
  Calendar,
} from "grommet-icons"

import Detail from "../components/styles/Detail"

const Details = ({
  open,
  close,
  caveats,
  price,
  type,
  neighborhood,
  name,
  website,
  facebook,
  instagram,
  phone,
}) => (
  <Box pad="medium" background="light-3" fill="horizontal">
    {type && (
      <Detail margin="none">
        <Anchor
          icon={<Organization size="small" />}
          label={type}
          margin="none"
          onClick={() => navigate(`/business/${kebabCase(type)}`)}
        />
      </Detail>
    )}
    {neighborhood && (
      <Detail margin="none">
        <Anchor
          icon={<Location size="small" />}
          label={neighborhood}
          onClick={() => navigate(`/${kebabCase(neighborhood)}`)}
        />
      </Detail>
    )}
    {open && (
      <Detail margin="none">
        <Anchor icon={<Clock size="small" />} label={open} />
      </Detail>
    )}
    {caveats && (
      <Detail margin="none">
        <Anchor icon={<Calendar size="small" />} label={caveats} />
      </Detail>
    )}
    {price && <Detail>$ {price}</Detail>}
    {facebook && (
      <Detail margin="none">
        <Anchor icon={<Facebook size="small" />} label="On Facebook" />
      </Detail>
    )}
    {instagram && (
      <Detail margin="none">
        <Anchor icon={<Instagram size="small" />} label="On Instagram" />
      </Detail>
    )}
    {website && (
      <Detail margin="none">
        <Anchor
          icon={<Domain size="small" />}
          label={`${name} website`}
          href={website}
        />
      </Detail>
    )}
    {phone && (
      <Detail margin="none">
        <Anchor icon={<Phone size="small" />} label={phone} />
      </Detail>
    )}
  </Box>
)

export default Details
