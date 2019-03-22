import React from "react"
import { graphql } from "gatsby"
import { Button } from "grommet"

import Layout from "../components/layout"
import Map from "../components/Map"
import Carousel from "../components/Carousel"

import Container from "../components/styles/Container"
import Link from "../components/styles/Link"

const placePage = ({ data }) => {
  const {
    name,
    description,
    website,
    facebook,
    instagram,
    openingHours,
    closingHours,
    dateTimeCaveats,
    address: { lon, lat },
    type: { placeType },
    location: { city, neighborhood },
    post_,
    carouselImages,
  } = data.place

  return (
    <Layout>
      <Container width={[1]}>
        <Carousel images={carouselImages} />

        <h1>{name}</h1>
        <p>{description}</p>

        <Button label="Add To / Added to `list`" />

        <p>{website}</p>
        <p>{facebook}</p>
        <p>{instagram}</p>
        <p>{openingHours}</p>
        <p>{closingHours}</p>
        <p>{dateTimeCaveats}</p>
        <p>{placeType}</p>
        <p>{city}</p>
        <p>{neighborhood}</p>

        <h5>In these posts: </h5>
        {post_.map(post => (
          <>
            <Link to={post.slug}>
              <h4>{post.title}</h4>
            </Link>
          </>
        ))}

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

export default placePage

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
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
