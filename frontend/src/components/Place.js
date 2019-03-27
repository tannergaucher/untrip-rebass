import React from "react"
import { Text, Heading, Box } from "grommet"

import Details from "../components/Details"
import Carousel from "../components/Carousel"
import AddToListModal from "../components/AddToListModal"

const Place = props => {
  const {
    name,
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
        />
        <AddToListModal name={name} />
        <Text dangerouslySetInnerHTML={{ __html: html }} size="small" />
      </Box>
    </Box>
  )
}

export default Place
