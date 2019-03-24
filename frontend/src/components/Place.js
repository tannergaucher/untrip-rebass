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
    <Box margin={{ vertical: "large" }}>
      <Heading level={2} margin={{ vertical: "medium" }}>
        {name}
      </Heading>
      <Carousel images={carouselImages} />
      <Box margin={{ vertical: "medium" }}>
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
        <Text dangerouslySetInnerHTML={{ __html: html }} size="small" />
      </Box>
    </Box>
  )
}

export default Place
