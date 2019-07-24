import React from "react"
import { graphql } from "gatsby"
import { navigate } from "@reach/router"
import { kebabCase } from "lodash"
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
} from "grommet-icons"

import { Detail } from "../styles"

export default function PlaceDetails({ placeDetails }) {
  return (
    <Box direction="row" justify="between">
      <Box>
        {placeDetails.placeType && (
          <Detail>
            <Button
              icon={<Organization size="small" color="dark-5" />}
              label={placeDetails.placeType}
              plain={true}
              onClick={() =>
                navigate(`/business/${kebabCase(placeDetails.placeType)}`)
              }
            />
          </Detail>
        )}
        {placeDetails.neighborhood && (
          <Detail>
            <Anchor
              icon={<Location size="small" color="dark-5" />}
              label={placeDetails.neighborhood}
              onClick={() =>
                navigate(`/${kebabCase(placeDetails.neighborhood)}`)
              }
            />
          </Detail>
        )}
        {placeDetails.openingHours && (
          <Detail>
            <Anchor
              icon={<Clock size="small" color="dark-5" />}
              label={`Open: ${placeDetails.openingHours}`}
            />
          </Detail>
        )}

        {placeDetails.closingHours && (
          <Detail>
            <Anchor
              icon={<Clock size="small" color="dark-5" />}
              label={`Close: ${placeDetails.closingHours}`}
            />
          </Detail>
        )}
        {placeDetails.dateTimeCaveats && (
          <Detail>
            <Anchor
              icon={<Calendar size="small" color="dark-5" />}
              label={placeDetails.dateTimeCaveats}
            />
          </Detail>
        )}
        {placeDetails.phone && (
          <Detail>
            <Anchor
              icon={<Phone size="small" color="dark-5" />}
              label={placeDetails.phone}
            />
          </Detail>
        )}
      </Box>

      <Box>
        {placeDetails.facebookLink && (
          <Detail>
            <Button
              icon={<Facebook size="small" color="black" />}
              href={placeDetails.facebook}
              plain={true}
            />
          </Detail>
        )}
        {placeDetails.instagramLink && (
          <Detail>
            <Button
              icon={<Instagram size="small" color="black" />}
              href={placeDetails.instagram}
              plain={true}
            />
          </Detail>
        )}
        {placeDetails.websiteLink && (
          <Detail>
            <Button
              icon={<Domain size="small" color="black" />}
              href={placeDetails.website}
              plain={true}
            />
          </Detail>
        )}
      </Box>
    </Box>
  )
}

export const placeDetailsQuery = graphql`
  fragment PlaceDetails on ContentfulPlace {
    openingHours(formatString: "h:mm A")
    closingHours(formatString: "h:mm A")
    dateTimeCaveats
    website
    facebookLink
    instagramLink
    # TODO add phone
    type {
      placeType
    }
    location {
      neighborhood
    }
  }
`
