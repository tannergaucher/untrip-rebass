import React from "react"
import { Text, Button, Box, Heading, Card } from "rebass"
import { Carousel, Grommet } from "grommet"
import Image from "../components/styles/Image"
import SecondaryText from "../components/styles/SecondaryText"
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
      my={[4]}
      bg="white"
      p={[3]}
      borderRadius="4px"
      boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
    >
      <StickyHeading>{name}</StickyHeading>

      <Grommet>
        <Carousel>
          {carouselImages.map(image => (
            <Image
              fluid={image.fluid}
              style={{ height: "225px" }}
              my={[2]}
              key={id}
            />
          ))}
        </Carousel>
      </Grommet>

      <Text my={[2]}>
        <em>{description}</em>
      </Text>
      <AddToListModal />
      <SecondaryText dangerouslySetInnerHTML={{ __html: html }} />
    </Card>
  )
}

export default Place
