import React from "react"
import { Heading, Box } from "grommet"
import { graphql } from "gatsby"

import { Share } from "."
import { Carousel } from "../elements"
import Link from "../styles/Link"

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

export const cardQuery = graphql`
  fragment CardFragment on ContentfulPost {
    title
    slug
    carouselImages {
      ...CarouselImage
    }
  }
`
