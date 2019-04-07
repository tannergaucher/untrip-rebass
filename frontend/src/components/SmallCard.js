import React from "react"
import { Heading, Text, Box } from "grommet"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Link from "../components/styles/Link"

function SmallCard({ title, slug, introSentence, cardImage }) {
  return (
    <Link to={slug}>
      <Box direction="row" justify="between" margin={{ vertical: "medium" }}>
        <Box>
          <Heading level="3" margin="none">
            {title}
          </Heading>
          <Text margin="none">{introSentence}</Text>
        </Box>
        <Img
          fluid={cardImage.fluid}
          style={{ height: "90px", width: "90px" }}
        />
      </Box>
    </Link>
  )
}

export default SmallCard

export const query = graphql`
  fragment SmallCardFragment on ContentfulPost {
    title
    slug
    introSentence
    cardImage {
      fluid {
        ...GatsbyContentfulFluid
      }
    }
  }
`
