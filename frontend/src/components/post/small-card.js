import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { Heading, Text, Box } from "grommet"

import { Link } from "../styles"

export default function SmallCard({ title, slug, introSentence, cardImage }) {
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
