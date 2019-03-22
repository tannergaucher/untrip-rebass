import React from "react"
import { Text, Heading, Box } from "grommet"
import Details from "../components/Details"
import Carousel from "../components/Carousel"

const Place = props => {
  const {
    name,
    description,
    openingHours,
    closingHours,
    price,
    dateTimeCaveats,
    website,
    facebook,
    instagram,
    address,
    type: { placeType },
    carouselImages,
    location: { city, neighborhood },
    placeArticleText: {
      childContentfulRichText: { html },
    },
  } = props

  return (
    <Box background="light-3" margin={{ vertical: "medium" }}>
      <Box pad="medium">
        <Heading level="2" margin="none">
          {name}
        </Heading>
        <Heading level="6" margin={{ vertical: "medium" }}>
          {description}
        </Heading>
      </Box>

      <Carousel images={carouselImages} />

      <Box>
        <Details
          name={name}
          open={openingHours}
          close={closingHours}
          caveats={dateTimeCaveats}
          price={price}
          website={website}
          facebook={facebook}
          instagram={instagram}
          address={address}
          type={placeType}
          city={city}
          neighborhood={neighborhood}
        />

        <Text
          dangerouslySetInnerHTML={{ __html: html }}
          margin={{ horizontal: "medium" }}
        />
      </Box>
    </Box>
  )
}

export default Place
