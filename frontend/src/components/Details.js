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
  Ticket,
  Currency,
} from "grommet-icons"

import Detail from "../components/styles/Detail"

const Details = ({
  open,
  close,
  caveats,
  price,
  type,
  neighborhood,
  website,
  facebook,
  instagram,
  phone,
  eventStarts,
  eventEnds,
  tickets,
}) => (
  <Box pad="medium">
    {type && (
      <Detail>
        <Anchor
          icon={<Organization size="small" />}
          label={type}
          onClick={() => navigate(`/business/${kebabCase(type)}`)}
        />
      </Detail>
    )}
    {neighborhood && (
      <Detail>
        <Anchor
          icon={<Location size="small" />}
          label={neighborhood}
          onClick={() => navigate(`/${kebabCase(neighborhood)}`)}
        />
      </Detail>
    )}
    {open && (
      <Detail>
        <Anchor icon={<Clock size="small" />} label={`${open} - ${close}`} />
      </Detail>
    )}
    {eventStarts && (
      <Detail>
        <Anchor
          icon={<Clock size="small" />}
          label={`${eventStarts} - ${eventEnds}`}
        />
      </Detail>
    )}
    {caveats && (
      <Detail>
        <Anchor icon={<Calendar size="small" />} label={caveats} />
      </Detail>
    )}
    {price && (
      <Detail>
        <Anchor icon={<Currency size="small" />} label={price} />{" "}
      </Detail>
    )}
    <Box direction="row" wrap>
      {tickets && (
        <Detail>
          <Anchor icon={<Ticket size="small" />} />
        </Detail>
      )}
      {facebook && (
        <Detail>
          <Anchor icon={<Facebook size="small" />} href={facebook} />
        </Detail>
      )}
      {instagram && (
        <Detail>
          <Anchor icon={<Instagram size="small" />} href={instagram} />
        </Detail>
      )}
      {website && (
        <Detail>
          <Anchor icon={<Domain size="small" />} href={website} />
        </Detail>
      )}
      {phone && (
        <Detail>
          <Anchor icon={<Phone size="small" />} label={phone} />
        </Detail>
      )}
    </Box>
  </Box>
)

export default Details
