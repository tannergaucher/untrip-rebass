import React from "react"
import { Carousel, Heading, Box } from "grommet"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const Image = styled(Img)`
  height: 250px;
  @media (min-width: 768px) {
    height: 500px;
  }
`

const MyCarousel = ({ images }) => {
  let id = 0
  return (
    <Carousel a11yTitl="image carousel">
      {images.map(image => {
        id++
        return (
          <Box style={{ position: "relative" }} key={image.id}>
            <Image fluid={image.image.fluid} />
            <Box
              style={{ position: "absolute", bottom: 50, right: 50 }}
              background="black"
              color="white"
              pad="xsmall"
            >
              {image.description && (
                <Heading margin="none" level="3">
                  {image.description}
                </Heading>
              )}
            </Box>
            {image.credit && image.sourceLink && (
              <Box style={{ position: "absolute", bottom: 5, right: 10 }}>
                <Heading
                  level="6"
                  margin="none"
                  style={{ fontFamily: "monospace", fontSize: "10px" }}
                >
                  <a href={image.sourceLink}>
                    {image.credit} / {image.source}
                  </a>
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

export const query = graphql`
  fragment CarouselImage on ContentfulCarouselImage {
    description
    credit
    source
    sourceLink
    image {
      fluid {
        ...GatsbyContentfulFluid
      }
    }
  }
`
