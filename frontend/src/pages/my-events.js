import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import User from "../containers/User"
import PleaseSignin from "../containers/PleaseSignin"
import Card from "../components/Card"
import Container from "../components/styles/Container"

const going = ({ data }) => {
  const { edges: allEvents } = data.allContentfulPost

  return (
    <Layout>
      <PleaseSignin>
        <User>
          {({ data, loading, error }) => {
            if (loading) return <p>loading...</p>
            if (error) return <p>{error.message}</p>
            const { events } = data.me

            const going = events.map(event => {
              const goingNodes = []
              allEvents.filter(allEvent => {
                if (allEvent.node.id === event.postId) {
                  goingNodes.push(allEvent)
                }
              })
              return goingNodes
            })

            return (
              <Container>
                {going.map(event => {
                  const {
                    id,
                    title,
                    introSentence,
                    category: { category },
                    carouselImages,
                  } = event[0].node

                  return (
                    <Card
                      title={title}
                      intro={introSentence}
                      category={category}
                      carouselImages={carouselImages}
                      key={id}
                    />
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

export default going

export const allEventsQuery = graphql`
  query allEventsQuery {
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
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          slug
        }
      }
    }
  }
`
