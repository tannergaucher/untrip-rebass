import React from "react"
import { graphql } from "gatsby"
import { Heading, Box, Text } from "grommet"

import { Carousel } from "../elements"
import { EventDetails, ToggleEventButton } from "."
import { useEvent } from "../gatsby-hooks"

// Fetch data by importing a useEvent hook here.
export default function Event() {
  const { event } = useEvent()

  return (
    <Box margin={{ vertical: "large" }}>
      <Heading level="2">{event.name}</Heading>
      <Carousel images={event.carouselImages} />
      <EventDetails details={event.details} />
      <ToggleEventButton eventId={event.id} name={event.name} />
      <Text
        size="small"
        margin={{ vertical: "medium" }}
        dangerouslySetInnerHTML={{ __html: event.html }}
      />
    </Box>
  )
}
