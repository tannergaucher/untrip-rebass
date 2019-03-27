import React from "react"
import { Heading, Box, Text } from "grommet"

import Carousel from "../components/Carousel"
import Details from "./Details"
import ToggleEventButton from "../components/ToggleEventButton"

function Event(props) {
  const {
    id,
    name: eventName,
    eventStarts,
    eventEnds,
    dateTimeCateats,
    website,
    facebook,
    instagram,
    ticketLink,
    price,
    type,
    place: {
      name: placeName,
      location: { neighborhood },
    },
    carouselImages,
    articleText: {
      childContentfulEventArticleTextEventArticleTextTextNode: {
        childMarkdownRemark: { html },
      },
    },
  } = props

  return (
    <Box margin={{ vertical: "large" }}>
      <Heading level="2">{eventName}</Heading>
      <Carousel images={carouselImages} />
      <Details
        eventStarts={eventStarts}
        eventEnds={eventEnds}
        caveats={dateTimeCateats}
        price={price}
        website={website}
        facebook={facebook}
        instagram={instagram}
        tickets={ticketLink}
        type={type[0].type}
        place={placeName}
        neighborhood={neighborhood}
      />
      <ToggleEventButton eventId={id} name={eventName} />
      <Text
        size="14px"
        dangerouslySetInnerHTML={{ __html: html }}
        margin={{ vertical: "medium" }}
      />
    </Box>
  )
}

export default Event
