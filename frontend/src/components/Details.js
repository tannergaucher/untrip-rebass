import React from "react"
import { navigate } from "@reach/router"
import { kebabCase } from "lodash"
import { Box, Anchor, Button, Heading, Text } from "grommet"
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

const Detail = props => (
  <Text
    {...props}
    style={{
      fontSize: "12px",
      textTransform: "uppercase",
    }}
  />
)

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
  <Box direction="row" justify="between">
    <Box>
      {type && (
        <Detail>
          <Button
            icon={<Organization size="small" color="dark-5" />}
            label={type}
            plain={true}
            onClick={() => navigate(`/business/${kebabCase(type)}`)}
          />
        </Detail>
      )}
      {neighborhood && (
        <Detail>
          <Anchor
            icon={<Location size="small" color="dark-5" />}
            label={neighborhood}
            onClick={() => navigate(`/${kebabCase(neighborhood)}`)}
          />
        </Detail>
      )}
      {open && (
        <Detail>
          <Anchor
            icon={<Clock size="small" color="dark-5" />}
            label={`${open} - ${close}`}
          />
        </Detail>
      )}
      {eventStarts && (
        <Detail>
          <Anchor
            icon={<Clock size="small" color="dark-5" />}
            label={`${eventStarts} - ${eventEnds}`}
          />
        </Detail>
      )}
      {caveats && (
        <Detail>
          <Anchor
            icon={<Calendar size="small" color="dark-5" />}
            label={caveats}
          />
        </Detail>
      )}
      {price && (
        <Detail>
          <Anchor
            icon={<Currency size="small" color="dark-5" />}
            label={price}
          />
        </Detail>
      )}
      {phone && (
        <Detail>
          <Anchor icon={<Phone size="small" color="dark-5" />} label={phone} />
        </Detail>
      )}
    </Box>
    <Box>
      {tickets && (
        <Detail>
          <Button
            icon={<Ticket size="small" color="black" />}
            href={tickets}
            plain={true}
          />
        </Detail>
      )}
      {facebook && (
        <Detail>
          <Button
            icon={<Facebook size="small" color="black" />}
            href={facebook}
            plain={true}
          />
        </Detail>
      )}
      {instagram && (
        <Detail>
          <Button
            icon={<Instagram size="small" color="black" />}
            href={instagram}
            plain={true}
          />
        </Detail>
      )}
      {website && (
        <Detail>
          <Button
            icon={<Domain size="small" color="black" />}
            href={website}
            plain={true}
          />
        </Detail>
      )}
    </Box>
  </Box>
)

export default Details
