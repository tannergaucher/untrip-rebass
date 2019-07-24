import React from "react"
import { graphql } from "gatsby"
import { Box, Heading } from "grommet"
import { kebabCase } from "lodash"

import { Layout } from "../components/elements"
import { User } from "../components/user"
import { PleaseSignin } from "../components/auth"
import { RemoveEvent } from "../components/event"
import { Container, Link } from "../components/styles"

// const myEvents = ({ data }) => {

export default function MyEventsPage({ data }) {
  const { edges: allEvents } = data.allContentfulEvent
  return (
    <Layout>
      <PleaseSignin>
        <User>
          {({ data, loading, error }) => {
            if (loading) return <p>loading...</p>
            if (error) return <p>{error.message}</p>
            const { events } = data.me
            // todo: clean this up
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
                <Heading textAlign="center">My Events</Heading>
                {going.map(event => {
                  const { id, name } = event[0].node
                  return (
                    <Box key={id} align="center">
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

// Make into hook useAllEvents
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
