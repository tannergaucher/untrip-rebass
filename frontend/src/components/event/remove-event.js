import React from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"

import { Button } from "grommet"
import { CURRENT_USER_QUERY, REMOVE_EVENT_MUTATION } from "../apollo/graphql"

const update = (cache, payload) => {
  const data = cache.readQuery({ query: CURRENT_USER_QUERY })
  const payloadId = payload.data.removeEvent.eventId
  data.me.events = data.me.events.filter(event => event.eventId !== payloadId)
  cache.writeQuery({ query: CURRENT_USER_QUERY, data })
}

export default function RemoveEvent({ eventId }) {
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
