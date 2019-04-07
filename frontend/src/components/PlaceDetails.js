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
} from "grommet-icons"

import Detail from "../components/styles/Detail"

function PlaceDetails(props) {
  return (
    <Box direction="row" justify="between">
      <Box>
        {props.placeType && (
          <Detail>
            <Button
              icon={<Organization size="small" color="dark-5" />}
              label={props.placeType}
              plain={true}
              onClick={() =>
                navigate(`/business/${kebabCase(props.placeType)}`)
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
        {props.openingHours && props.closingHours && (
          <Detail>
            <Anchor
              icon={<Clock size="small" color="dark-5" />}
              label={`${props.openingHours} - ${props.closingHours}`}
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

export default PlaceDetails

export const placeDetailsQuery = graphql`
  fragment PlaceDetails on ContentfulPlace {
    openingHours(formatString: "h:mm A")
    closingHours(formatString: "h:mm A")
    dateTimeCaveats
    website
    facebook
    instagram
    # TODO add phone

    type {
      placeType
    }
    location {
      neighborhood
    }
  }
`
