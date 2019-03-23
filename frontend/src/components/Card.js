import React from "react"
import { Heading, Box, Button } from "grommet"
import { Location, Facebook, Instagram, Twitter } from "grommet-icons"
import { navigate } from "@reach/router"

import Carousel from "../components/Carousel"
import SocialShare from "../components/SocialShare"
import Link from "./styles/Link"

const Card = ({
  title,
  intro,
  category,
  neighborhood,
  // date,
  carouselImages,
  slug,
}) => {
  return (
    <Box
      margin={{ vertical: "large" }}
      style={{ position: "relative" }}
      pad={{ vertical: "large" }}
    >
      <Box>
        <Box direction="row" align="center">
          <Heading
            level="6"
            margin={{ right: "small", vertical: "none" }}
            style={{ textTransform: "uppercase" }}
            color="light-6"
          >
            {category}
          </Heading>
          <Box direction="row" align="center">
            <Location color="light-6" size="small" />
            <Heading
              level="6"
              margin={{ left: "small", vertical: "none" }}
              style={{ textTransform: "uppercase" }}
              color="light-6"
            >
              {neighborhood}
            </Heading>
          </Box>
        </Box>
        <Link to={slug}>
          <Heading level="1" margin={{ vertical: "xsmall" }}>
            {title}
          </Heading>
          <Heading level="6" margin={{ vertical: "xsmall" }}>
            {intro}
          </Heading>
        </Link>
      </Box>
      <Carousel images={carouselImages} />
      <Box alignSelf="end">
        <SocialShare />
      </Box>
      <Button
        label="Read"
        alignSelf="end"
        color="light-6"
        onClick={() => navigate(`${slug}`)}
        margin={{ top: "medium" }}
      />
      <Box />
    </Box>
  )
}

export default Card
