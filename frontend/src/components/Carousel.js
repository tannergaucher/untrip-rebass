import React from "react"
import { Carousel } from "grommet"
import styled from "styled-components"
import Img from "gatsby-image"

const Image = styled(Img)`
  height: 250px;

  @media (min-width: 768px) {
    height: 500px;
  }
`

const MyCarousel = ({ images }) => (
  <Carousel a11yTitl="image carousel" play="6000">
    {images.map(image => (
      <Image fluid={image.fluid} />
    ))}
  </Carousel>
)

export default MyCarousel
