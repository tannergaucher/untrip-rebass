import React from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import { CURRENT_USER_QUERY } from "../containers/User"
import { Button } from "grommet"
const ADD_EVENT_MUTATION = gql`
  mutation ADD_EVENT_MUTATION($eventId: String!) {
    addEvent(eventId: $eventId) {
      eventId
    }
  }
`

const update = (cache, payload) => {
  const data = cache.readQuery({ query: CURRENT_USER_QUERY })
  data.me.events = [...data.me.events, ...payload.data.addEvent]
  cache.writeQuery({ query: CURRENT_USER_QUERY, data })
}

const AddEvent = ({ eventId, name }) => (
  <Mutation
    mutation={ADD_EVENT_MUTATION}
    variables={{ eventId }}
    update={update}
    optimisticResponse={{
      __typename: "Mutation",
      addEvent: {
        __typename: "Event",
        eventId: eventId,
        id: new Date(),
      },
    }}
  >
    {addEvent => (
      <Button
        label={`Go to ${name}`}
        onClick={addEvent}
        color="black"
        primary
        alignSelf="end"
        style={{
          fontSize: "12px",
          fontFamily: "monospace",
        }}
      />
    )}
  </Mutation>
)

export default AddEvent
