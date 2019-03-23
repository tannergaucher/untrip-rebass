import React from "react"
import { Heading, Box, Text } from "grommet"

import Carousel from "../components/Carousel"
import AddEvent from "../containers/AddEvent"
import Details from "./Details"

const Event = props => {
  const {
    id,
    name: eventName,
    description,
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
    <Box background="light-2" margin={{ vertical: "large" }}>
      <Heading level="3" margin="medium">
        {eventName}
      </Heading>
      <Heading level="3" margin="medium">
        {description}
      </Heading>
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
      <AddEvent eventId={id} />
      <Text
        margin="medium"
        size="14px"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Box>
  )
}

export default Event
