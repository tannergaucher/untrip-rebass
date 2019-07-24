import React from "react"
import { graphql } from "gatsby"
import { Button } from "grommet"

import { Map } from "../components/place"
import { Layout, Carousel } from "../components/elements"
import { Container, Link, Detail } from "../components/styles"

export default function PlacePage({ data }) {
  const { place } = data
  return (
    <Layout>
      <Container width={[1]}>
        <Carousel images={place.carouselImages} />
        <h1>{place.name}</h1>
        <h3>{place.description}</h3>
        <Button label="Add To / Added to `list`" />
        <Detail>{place.websiteLink}</Detail>
        <Detail>{place.facebookLink}</Detail>
        <Detail>{place.instagramLink}</Detail>
        <Detail>{place.openingHours}</Detail>
        <Detail>{place.closingHours}</Detail>
        <Detail>{place.dateTimeCaveats}</Detail>
        <Detail>{place.placeType}</Detail>
        <Detail>{place.location.city}</Detail>
        <Detail>{place.location.neighborhood}</Detail>
        <h5>In these posts: </h5>
        {/* TODO: Related posts components */}
        {post_.map(post => (
          <>
            <Link to={post.slug}>
              <h4>{post.title}</h4>
            </Link>
          </>
        ))}
        <Map
          name={place.name}
          title={place.name}
          lat={place.lat}
          lng={place.lon}
          style={{ height: "40%" }}
          zoom={15}
        />
      </Container>
    </Layout>
  )
}

export const placePageQuery = graphql`
  query($name: String!) {
    place: contentfulPlace(name: { eq: $name }) {
      name
      description
      website
      facebook
      instagram
      openingHours
      closingHours
      dateTimeCaveats
      address {
        lon
        lat
      }
      type {
        placeType
      }
      location {
        city
        neighborhood
      }
      post_ {
        title
        slug
      }
      carouselImages {
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
    }
  }
`
