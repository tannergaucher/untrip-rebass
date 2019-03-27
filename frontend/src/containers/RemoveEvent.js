import React from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"

import { Button } from "grommet"
import { CURRENT_USER_QUERY } from "../containers/User"

const REMOVE_EVENT_MUTATION = gql`
  mutation REMOVE_EVENT_MUTATION($eventId: String!) {
    removeEvent(eventId: $eventId) {
      eventId
    }
  }
`

const update = (cache, payload) => {
  const data = cache.readQuery({ query: CURRENT_USER_QUERY })
  const payloadId = payload.data.removeEvent.eventId
  data.me.events = data.me.events.filter(event => event.eventId !== payloadId)
  cache.writeQuery({ query: CURRENT_USER_QUERY, data })
}

const RemoveEvent = ({ eventId }) => {
  return (
    <Mutation
      mutation={REMOVE_EVENT_MUTATION}
      variables={{ eventId }}
      update={update}
      optimisticResponse={{
        __typename: "Mutation",
        removeEvent: {
          __typename: "Event",
          eventId: eventId,
        },
      }}
    >
      {removeEvent => (
        <Button
          onClick={removeEvent}
          label="Going"
          color="black"
          style={{
            fontSize: "12px",
            fontFamily: "monospace",
          }}
        />
      )}
    </Mutation>
  )
}

export default RemoveEvent
