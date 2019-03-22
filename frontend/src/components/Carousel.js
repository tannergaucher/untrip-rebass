import React from "react"
import { Carousel } from "grommet"
import Img from "gatsby-image"

const MyCarousel = ({ images }) => (
  <Carousel>
    {images.map(image => (
      <Img fluid={image.fluid} style={{ height: "225px" }} />
    ))}
  </Carousel>
)

export default MyCarousel
