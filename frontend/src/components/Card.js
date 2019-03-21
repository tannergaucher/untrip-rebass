import React from "react"
import { Carousel, Heading, Box } from "grommet"
import { Location } from "grommet-icons"

import Social from "../components/Social"
import Image from "./styles/Image"
import Link from "./styles/Link"

const Card = ({
  title,
  intro,
  category,
  neighborhood,
  date,
  carouselImages,
  slug,
}) => {
  return (
    <Box elevation="medium" round="medium" margin={{ vertical: "large" }}>
      <Box direction="row" align="center" justify="between" margin="small">
        <Box>
          <Heading level="6" margin="none">
            {category}
          </Heading>
          <Heading level="6" margin="none">
            {date}
          </Heading>
        </Box>

        <Box direction="row" align="center">
          <Location size="small" />
          <Heading level="6" margin={{ vertical: "small", left: "xsmall" }}>
            {neighborhood}
          </Heading>
        </Box>
      </Box>

      <Carousel>
        {carouselImages.map(image => (
          <Image fluid={image.fluid} style={{ height: "225px" }} />
        ))}
      </Carousel>

      <Box margin="small">
        <Social />
        <Link to={slug}>
          <Heading level="2" margin={{ vertical: "xsmall" }}>
            {title}
          </Heading>
          <Heading level="6" margin={{ vertical: "xsmall" }}>
            {intro}
          </Heading>
        </Link>
      </Box>
    </Box>
  )
}

export default Card
