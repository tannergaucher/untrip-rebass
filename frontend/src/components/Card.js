import React from "react"
import { Heading, Box } from "grommet"

import Share from "../components/Share"
import Carousel from "../components/Carousel"
import Link from "./styles/Link"

const Card = ({ title, carouselImages, slug }) => {
  return (
    <Box
      margin={{ vertical: "medium" }}
      style={{ position: "relative" }}
      pad={{ vertical: "large" }}
    >
      <Link to={slug}>
        <Heading level="1" margin={{ vertical: "medium" }}>
          {title}
        </Heading>
      </Link>
      <Carousel images={carouselImages} />
      <Share />
    </Box>
  )
}

export default Card
