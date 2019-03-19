import React from "react"
import { Text, Button, Box, Heading, Card } from "rebass"
import { Carousel, Grommet } from "grommet"
import Image from "../components/styles/Image"
import SecondaryText from "../components/styles/SecondaryText"

const Place = props => {
  const {
    id,
    name,
    description,
    openingHours,
    dateTimeCaveats,
    website,
    facebook,
    instagram,
    closingHours,
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
      mx={[4]}
      my={[4]}
      bg="white"
      p={[4]}
      borderRadius="4px"
      boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
      style={{ position: "sticky", top: 0, zIndex: 6 }}
    >
      <Heading>{name}</Heading>

      <Grommet>
        <Carousel>
          {carouselImages.map(image => (
            <Image fluid={image.fluid} style={{ height: "225px" }} my={[2]} />
          ))}
        </Carousel>
      </Grommet>

      <Text my={[2]}>
        <em>{description}</em>
      </Text>
      <Button bg="black" my={[2]}>
        Add to list
      </Button>
      <SecondaryText dangerouslySetInnerHTML={{ __html: html }} />
    </Card>
  )
}

export default Place
