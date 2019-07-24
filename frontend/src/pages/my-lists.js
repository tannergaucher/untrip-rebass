import React, { useState } from "react"
import { graphql } from "gatsby"
import { Heading, Text, Box, Button } from "grommet"

import { User } from "../components/user"
import { Layout } from "../components/elements"
import { Container } from "../components/styles"
import { PleaseSignin } from "../components/auth"

// This component queries the authed user's lists, and displays

export default function MyListsPage() {
  return (
    <Layout>
      <PleaseSignin>
        <User>
          {({ data, loading, error }) => {
            if (loading) return <p>loading..</p>
            if (error) return <p>{error.message}</p>

            return (
              <Container>
                <Heading margin="medium" textAlign="center">
                  My Lists
                </Heading>
                {data.me.lists.map(list => {
                  const { places } = list
                  return (
                    <Box>
                      <Heading level="3">{list.title}</Heading>
                      {places.map(place => {
                        return <p>{place.placeId}</p>
                      })}
                      <Button label="Delete list" plain={true} />
                    </Box>
                  )
                })}
              </Container>
            )
          }}
        </User>
      </PleaseSignin>
    </Layout>
  )
}

export const myListsQuery = graphql`
  query myListsQuery {
    allContentfulPost {
      edges {
        node {
          id
          title
          introSentence
          category {
            category
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
          slug
        }
      }
    }
  }
`
