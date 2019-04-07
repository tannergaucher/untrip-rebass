import React from "react"
import { Heading, Box, Text } from "grommet"
import { graphql } from "gatsby"

import Carousel from "../components/Carousel"
import EventDetails from "./EventDetails"
import ToggleEventButton from "../components/ToggleEventButton"

function Event(props) {
  return (
    <Box margin={{ vertical: "large" }}>
      <Heading level="2">{props.name}</Heading>
      <Carousel images={props.carouselImages} />
      <EventDetails
        eventStarts={props.eventStarts}
        eventEnds={props.eventEnds}
        dateTimeCaveats={props.dateTimeCaveats}
        price={props.price}
        website={props.website}
        facebook={props.facebook}
        instagram={props.instagram}
        ticketLink={props.ticketLink}
        type={props.type.type}
        neighborhood={props.place.location.neighborhood}
      />
      <ToggleEventButton eventId={props.id} name={props.name} />
      <Text
        size="small"
        dangerouslySetInnerHTML={{ __html: props.html }}
        margin={{ vertical: "medium" }}
      />
    </Box>
  )
}

export default Event

export const eventQuery = graphql`
  fragment Event on ContentfulEvent {
    id
    name
    description
    ...EventDetails

    articleText {
      childContentfulEventArticleTextEventArticleTextTextNode {
        childMarkdownRemark {
          html
        }
      }
    }

    carouselImages {
      ...CarouselImage
    }
  }
`
