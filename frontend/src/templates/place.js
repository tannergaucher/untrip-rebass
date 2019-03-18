import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Map from "../components/Map"

const placePage = ({ data }) => {
  const {
    name,
    id,
    address: { lat, lon },
    carouselImages,
  } = data.place

  return (
    <Layout>
      <>
        {carouselImages.map(image => (
          <Img
            fluid={image.fluid}
            style={{ height: "100px", width: "100px" }}
            key={id}
          />
        ))}
        <h1>{name}</h1>
        <Map
          name={name}
          title={name}
          lat={lat}
          lng={lon}
          style={{ height: "40%" }}
          zoom={15}
        />
      </>
    </Layout>
  )
}

export default placePage

export const placePageQuery = graphql`
  query($name: String!) {
    place: contentfulPlace(name: { eq: $name }) {
      name
      id
      address {
        lat
        lon
      }
      carouselImages {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
