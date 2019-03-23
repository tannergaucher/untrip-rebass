import React from "react"
import { Text, Heading, Box } from "grommet"

import Details from "../components/Details"
import Carousel from "../components/Carousel"
import Add from "../components/Add"

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
    phone,
    address,
    type: { placeType },
    carouselImages,
    location: { city, neighborhood },
    placeArticleText: {
      childContentfulRichText: { html },
    },
  } = props

  return (
    <Box background="light-2" margin={{ vertical: "large" }}>
      <Heading level="3" margin="medium">
        {name}
      </Heading>
      <Heading level="6" margin="medium" color="dark-4">
        {description}
      </Heading>
      <Carousel images={carouselImages} />
      <Box>
        <Details
          name={name}
          open={openingHours}
          close={closingHours}
          caveats={dateTimeCaveats}
          price={price}
          type={placeType}
          city={city}
          neighborhood={neighborhood}
          address={address}
          phone={phone}
          website={website}
          facebook={facebook}
          instagram={instagram}
          phone="555 555 5555"
        />
        <Add name={name} />
        <Text
          dangerouslySetInnerHTML={{ __html: html }}
          margin="medium"
          size="14px"
        />
      </Box>
    </Box>
  )
}

export default Place
