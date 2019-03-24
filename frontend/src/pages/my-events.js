import React from "react"
import { graphql } from "gatsby"
import { Box, Heading } from "grommet"
import { kebabCase } from "lodash"

import Layout from "../components/layout"
import User from "../containers/User"
import PleaseSignin from "../containers/PleaseSignin"
import RemoveEvent from "../containers/RemoveEvent"
import Container from "../components/styles/Container"
import Link from "../components/styles/Link"

const myEvents = ({ data }) => {
  const { edges: allEvents } = data.allContentfulEvent
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
                if (allEvent.node.id === event.eventId) {
                  goingNodes.push(allEvent)
                }
              })
              return goingNodes
            })
            return (
              <Container>
                <Heading>My Events</Heading>
                {going.map(event => {
                  const { id, name } = event[0].node
                  return (
                    <Box key={id}>
                      <Link to={`/events/${kebabCase(name)}`}>
                        <Heading level="3">{name}</Heading>
                      </Link>
                      <RemoveEvent eventId={id} />
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

export default myEvents
export const allEventsQuery = graphql`
  query allEventsQuery {
    allContentfulEvent {
      edges {
        node {
          name
          id
        }
      }
    }
  }
`
