import React from "react"
import { graphql } from "gatsby"
import { Heading } from "grommet"

import Layout from "../components/layout"
import User from "../containers/User"
import PleaseSignin from "../containers/PleaseSignin"
import Container from "../components/styles/Container"

const myEvents = ({ data }) => {
  return (
    <Layout>
      <PleaseSignin>
        <User>
          {({ data, loading, error }) => {
            if (loading) return <p>loading..</p>
            if (error) return <p>{error.message}</p>

            return (
              <Container>
                <Heading>My Lists</Heading>
                <ul>
                  <li>list 1</li>
                  <li>list 2</li>
                  <li>list 3</li>
                </ul>
              </Container>
            )
          }}
        </User>
      </PleaseSignin>
    </Layout>
  )
}

export default myEvents

// TODO: make fragment
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
