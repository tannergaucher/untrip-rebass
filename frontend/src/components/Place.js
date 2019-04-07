import React from "react"
import { Text, Heading, Box } from "grommet"
import { graphql } from "gatsby"

import Carousel from "../components/Carousel"
import AddToListModal from "../components/AddToListModal"
import PlaceDetails from "./PlaceDetails"

function Place(props) {
  return (
    <Box margin={{ vertical: "large" }}>
      <Heading level={2} margin={{ vertical: "medium" }}>
        {props.name}
      </Heading>
      <Carousel images={props.carouselImages} />
      <Box margin={{ vertical: "medium" }}>
        <PlaceDetails
          openingHours={props.openingHours}
          closingHours={props.closingHours}
          dateTimeCaveats={props.dateTimeCaveats}
          website={props.website}
          facebook={props.facebook}
          instagram={props.instagram}
          placeType={props.type.placeType}
          neighborhood={props.location.neighborhood}
        />
        <AddToListModal name={props.name} placeId={props.id} />
        <Text dangerouslySetInnerHTML={{ __html: props.html }} size="small" />
      </Box>
    </Box>
  )
}

export default Place

export const placeQuery = graphql`
  fragment Place on ContentfulPlace {
    id
    name
    description

    ...PlaceDetails

    carouselImages {
      ...CarouselImage
    }

    placeArticleText {
      childContentfulRichText {
        html
      }
    }
  }
`
