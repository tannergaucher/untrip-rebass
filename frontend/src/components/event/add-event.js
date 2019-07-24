import React from "react"
import gql from "graphql-tag"
import { Button } from "grommet"
import { Mutation } from "react-apollo"

import { CURRENT_USER_QUERY, ADD_EVENT_MUTATION } from "../apollo/graphql"

function update({ cache, payload }) {
  const data = cache.readQuery({ query: CURRENT_USER_QUERY })
  data.me.events = [...data.me.events, ...payload.data.addEvent]
  cache.writeQuery({ query: CURRENT_USER_QUERY, data })
  return
}

export default function AddEvent({ name, eventId }) {
  return (
    <Mutation
      mutation={ADD_EVENT_MUTATION}
      variables={{ eventId }}
      update={update}
      optimisticResponse={{
        __typename: "Mutation",
        addEvent: {
          __typename: "Event",
          id: new Date(),
          eventId,
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
}
