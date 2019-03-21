import React from "react"
import { Carousel, Text, Heading, Box } from "grommet"
import Image from "../components/styles/Image"
import AddToListModal from "../components/AddToListModal"

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
    <Box elevation="medium" round="medium" margin={{ vertical: "large" }}>
      <Heading
        level="2"
        textAlign="center"
        margin="medium"
        style={{ position: "sticky", top: 0, zIndex: 3 }}
      >
        {name}
      </Heading>
      <Carousel>
        {carouselImages.map(image => (
          <Image fluid={image.fluid} style={{ height: "225px" }} key={id} />
        ))}
      </Carousel>

      <Box margin="medium">
        <Heading level="5">
          <em>{description}</em>
        </Heading>
        {/* 
        TODO 

          <Info
            close={}
            caveats={}
            website={}
            facebook={}
            instagram={}
            address={}
            open={}
          /> 

           */}
        <AddToListModal name={name} />
        <Text
          dangerouslySetInnerHTML={{ __html: html }}
          margin={{ top: "small" }}
        />
      </Box>
    </Box>
  )
}

export default Place
