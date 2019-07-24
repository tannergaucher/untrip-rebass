import React from "react"
import { graphql } from "gatsby"
import { Text, Heading, Box } from "grommet"

import { Carousel } from "../elements"
import { usePlace } from "../gatsby-hooks"
import { PlaceDetails } from "."
import { AddToListModal } from "../list"

// all components fetch their own data, using hooks that return fragments
export default function Place() {
  const { place } = usePlace()
  return (
    <Box margin={{ vertical: "large" }}>
      <Heading level={2} margin={{ vertical: "medium" }}>
        {place.name}
      </Heading>
      <Carousel images={place.carouselImages} />
      <Box margin={{ vertical: "medium" }}>
        <PlaceDetails />
        <AddToListModal name={place.name} placeId={place.id} />
        <Text dangerouslySetInnerHTML={{ __html: place.html }} size="small" />
      </Box>
    </Box>
  )
}
