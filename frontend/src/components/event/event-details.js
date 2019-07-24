import React from "react"
import { graphql } from "gatsby"
import { kebabCase } from "lodash"
import { navigate } from "@reach/router"
import { Box, Anchor, Button, Text } from "grommet"
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

import { Detail } from "../styles"

function EventDetails({ eventDetails }) {
  return (
    <Box direction="row" justify="between">
      <Box>
        {eventDetails.businessType && (
          <Detail>
            <Button
              plain={true}
              label={eventDetails.businessType}
              icon={<Organization size="small" color="dark-5" />}
              onClick={() =>
                navigate(`/business/${kebabCase(eventDetails.businessType)}`)
              }
            />
          </Detail>
        )}
        {eventDetails.neighborhood && (
          <Detail>
            <Anchor
              label={eventDetails.neighborhood}
              icon={<Location size="small" color="dark-5" />}
              onClick={() =>
                navigate(`/${kebabCase(eventDetails.neighborhood)}`)
              }
            />
          </Detail>
        )}
        {eventDetails.eventStarts && (
          <Detail>
            <Anchor
              label={`Starts: ${eventDetails.eventStarts}`}
              icon={<Clock size="small" color="dark-5" />}
            />
          </Detail>
        )}
        {eventDetails.eventEnds && (
          <Detail>
            <Anchor label={`Ends: ${eventDetails.eventEnds}`} />
          </Detail>
        )}
        {eventDetails.dateTimeCaveats && (
          <Detail>
            <Anchor
              label={eventDetails.dateTimeCaveats}
              icon={<Calendar size="small" color="dark-5" />}
            />
          </Detail>
        )}
        {eventDetails.price && (
          <Detail>
            <Anchor
              label={eventDetails.price}
              icon={<Currency size="small" color="dark-5" />}
            />
          </Detail>
        )}
        {eventDetails.phone && (
          <Detail>
            <Anchor
              label={eventDetails.phone}
              icon={<Phone size="small" color="dark-5" />}
            />
          </Detail>
        )}
      </Box>
      {/*  */}
      <Box>
        {eventDetails.ticketLink && (
          <Detail>
            <Button
              plain={true}
              href={eventDetails.ticketLink}
              icon={<Ticket size="small" color="black" />}
            />
          </Detail>
        )}
        {eventDetails.facebookLink && (
          <Detail>
            <Button
              plain={true}
              href={eventDetails.facebookLink}
              icon={<Facebook size="small" color="black" />}
            />
          </Detail>
        )}
        {eventDetails.instagramLink && (
          <Detail>
            <Button
              plain={true}
              href={eventDetails.instagramLink}
              icon={<Instagram size="small" color="black" />}
            />
          </Detail>
        )}
        {eventDetails.websiteLink && (
          <Detail>
            <Button
              plain={true}
              href={eventDetails.websiteLink}
              icon={<Domain size="small" color="black" />}
            />
          </Detail>
        )}
      </Box>
    </Box>
  )
}

export default EventDetails
