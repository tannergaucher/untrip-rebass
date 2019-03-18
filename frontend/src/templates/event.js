import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

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
  } = event

  const { name: placeName, openingHours, dateTimeCaveats } = event.place

  return (
    <Layout>
      <h1>{name}</h1>
      <h6>{description}</h6>
      <h6>{website}</h6>
      <h6>{facebook}</h6>
      <h6>{instagram}</h6>
      <h6>{price}</h6>
      <h6>{eventStarts}</h6>
      <h6>{eventEnds}</h6>

      <div className="event-place">
        <h6>{placeName}</h6>
        <h6>{openingHours}</h6>
        <h6>{dateTimeCaveats}</h6>
      </div>
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
        openingHours
        dateTimeCaveats
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
        fluid {
          sizes
        }
      }
    }
  }
`
