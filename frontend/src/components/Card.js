import React from "react"
import { Heading, Box } from "grommet"
import { Location } from "grommet-icons"

import Carousel from "../components/Carousel"
import Social from "../components/Social"
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
      <Box direction="row" align="center" justify="between" margin="medium">
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

      <Carousel images={carouselImages} />

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
