import React from "react"
import { Card } from "rebass"
import { Carousel, Text, Heading, Box } from "grommet"
import Image from "../components/styles/Image"
import AddToListModal from "../components/AddToListModal"

const StickyHeading = props => (
  <Heading
    fontSize={[3]}
    pt={[2]}
    textAlign="center"
    {...props}
    style={{ position: "sticky", top: 0, zIndex: 7 }}
  />
)

const Place = props => {
  const {
    id,
    name,
    description,
    // openingHours,
    // dateTimeCaveats,
    // website,
    // facebook,
    // instagram,
    // closingHours,
    // address: { lat, lon },
    type: { placeType },
    carouselImages,
    // location: { neighborhood },
    placeArticleText: {
      childContentfulRichText: { html },
    },
  } = props

  return (
    <Card
      borderRadius="4px"
      boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
      my={[4, 5, 6]}
    >
      <Heading level="2">{name}</Heading>
      <Carousel>
        {carouselImages.map(image => (
          <Image fluid={image.fluid} style={{ height: "225px" }} key={id} />
        ))}
      </Carousel>

      <Box margin="small">
        <Text>
          <em>{description}</em>
        </Text>
        <AddToListModal name={name} />
        <Text dangerouslySetInnerHTML={{ __html: html }} />
      </Box>
    </Card>
  )
}

export default Place
