import React from "react"
import { graphql } from "gatsby"

import { Map } from "../components/place"
import { Container, Detail } from "../components/styles"
import { Layout, Carousel } from "../components/elements"

export default function EventPage({ data }) {
  const { event } = data
  return (
    <Layout>
      <Container width={[1]}>
        <h1>{event.name}</h1>
        <Carousel images={event.carouselImages} />
        <Detail>{event.date}</Detail>
        <Detail>{event.startTime}</Detail>
        <Detail>{event.endTime}</Detail>
        <Detail>{event.description}</Detail>
        <Detail>{event.website}</Detail>
        <Detail>{event.facebookLink}</Detail>
        <Detail>{event.instagramLink}</Detail>
        <Detail>{event.price}</Detail>
        <Map
          name={event.place.name}
          title={event.place.name}
          lat={event.place.lat}
          lng={event.place.lon}
          style={{ height: "40%" }}
          zoom={15}
        />
      </Container>
    </Layout>
  )
}

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
        ...CarouselImage
      }
    }
  }
`
