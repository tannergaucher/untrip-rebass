import React from "react"
import { graphql } from "gatsby"

import Container from "../components/styles/Container"
import Layout from "../components/layout"
import Map from "../components/Map"
import Carousel from "../components/Carousel"

const eventPage = ({ data }) => {
  const { event } = data
  const {
    name,
    description,
    website,
    facebook,
    instagram,
    price,
    eventStarts,
    eventEnds,
    carouselImages,
    place: {
      name: placename,
      address: { lat, lon },
      location: { city, neighborhood },
    },
  } = event

  return (
    <Layout>
      <Container width={[1]}>
        <h1>{name}</h1>
        <Carousel images={carouselImages} />
        <h6>{description}</h6>
        <h6>{website}</h6>
        <h6>{facebook}</h6>
        <h6>{instagram}</h6>
        <h6>{price}</h6>
        <h6>{eventStarts}</h6>
        <h6>{eventEnds}</h6>
        <h6>{city}</h6>
        <h6>{neighborhood}</h6>
        <h6>{placename}</h6>

        <Map
          name={name}
          title={name}
          lat={lat}
          lng={lon}
          style={{ height: "40%" }}
          zoom={15}
        />
      </Container>
    </Layout>
  )
}

export default eventPage

export const eventPageQuery = graphql`
  query($name: String!) {
    event: contentfulEvent(name: { eq: $name }) {
      name
      description
      website
      facebook
      instagram
      price
      eventStarts
      eventEnds
      place {
        name
        address {
          lon
          lat
        }
        location {
          country
          city
          neighborhood
        }
      }
      carouselImages {
        description
        credit
        sourceLink
        source
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
