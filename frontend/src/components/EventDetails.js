import React from "react"
import { navigate } from "@reach/router"
import { kebabCase } from "lodash"
import { Box, Anchor, Button, Text } from "grommet"
import { graphql } from "gatsby"

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

function EventDetails(props) {
  return (
    <Box direction="row" justify="between">
      <Box>
        {props.type && (
          <Detail>
            <Button
              icon={<Organization size="small" color="dark-5" />}
              label={props.type.type}
              plain={true}
              onClick={() =>
                navigate(`/business/${kebabCase(props.type.type)}`)
              }
            />
          </Detail>
        )}
        {props.neighborhood && (
          <Detail>
            <Anchor
              icon={<Location size="small" color="dark-5" />}
              label={props.neighborhood}
              onClick={() => navigate(`/${kebabCase(props.neighborhood)}`)}
            />
          </Detail>
        )}

        {props.eventStarts && (
          <Detail>
            <Anchor
              icon={<Clock size="small" color="dark-5" />}
              label={`${props.eventStarts} - ${props.eventEnds}`}
            />
          </Detail>
        )}
        {props.dateTimeCaveats && (
          <Detail>
            <Anchor
              icon={<Calendar size="small" color="dark-5" />}
              label={props.dateTimeCaveats}
            />
          </Detail>
        )}
        {props.price && (
          <Detail>
            <Anchor
              icon={<Currency size="small" color="dark-5" />}
              label={props.price}
            />
          </Detail>
        )}
        {props.phone && (
          <Detail>
            <Anchor
              icon={<Phone size="small" color="dark-5" />}
              label={props.phone}
            />
          </Detail>
        )}
      </Box>
      <Box>
        {props.ticketLink && (
          <Detail>
            <Button
              icon={<Ticket size="small" color="black" />}
              href={props.ticketLink}
              plain={true}
            />
          </Detail>
        )}
        {props.facebook && (
          <Detail>
            <Button
              icon={<Facebook size="small" color="black" />}
              href={props.facebook}
              plain={true}
            />
          </Detail>
        )}
        {props.instagram && (
          <Detail>
            <Button
              icon={<Instagram size="small" color="black" />}
              href={props.instagram}
              plain={true}
            />
          </Detail>
        )}
        {props.website && (
          <Detail>
            <Button
              icon={<Domain size="small" color="black" />}
              href={props.website}
              plain={true}
            />
          </Detail>
        )}
      </Box>
    </Box>
  )
}

export default EventDetails

export const eventDetailsQuery = graphql`
  fragment EventDetails on ContentfulEvent {
    eventStarts(formatString: "h:mm A")
    eventEnds(formatString: "h:mm A")
    dateTimeCaveats
    price
    website
    facebook
    instagram
    ticketLink
    type {
      type
    }
    place {
      location {
        neighborhood
      }
    }
  }
`
