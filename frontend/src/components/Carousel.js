import React from "react"
import { Carousel, Heading, Box } from "grommet"
import styled from "styled-components"
import Img from "gatsby-image"
import Link from "../components/styles/Link"

const Image = styled(Img)`
  height: 250px;
  @media (min-width: 768px) {
    height: 500px;
  }
`

const MyCarousel = ({ images }) => {
  return (
    <Carousel a11yTitl="image carousel" play={6000}>
      {images.map(image => {
        const {
          credit,
          description,
          source,
          sourceLink,
          image: { fluid },
        } = image
        return (
          <Box style={{ position: "relative" }}>
            <Image fluid={fluid} />
            <Box
              style={{ position: "absolute", top: 15, left: 15 }}
              background="black"
              color="white"
              pad="xsmall"
            >
              {description && (
                <Heading
                  margin="none"
                  level="6"
                  style={{ fontFamily: "monospace" }}
                >
                  {description}
                </Heading>
              )}
            </Box>
            {credit && (
              <Box style={{ position: "absolute", bottom: 5, right: 10 }}>
                <Heading
                  level="6"
                  margin="none"
                  style={{ fontFamily: "monospace", fontSize: "10px" }}
                >
                  <Link to={sourceLink}>
                    {credit} / {source || ""}
                  </Link>
                </Heading>
              </Box>
            )}
          </Box>
        )
      })}
    </Carousel>
  )
}

export default MyCarousel
