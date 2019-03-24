import React from "react"
import User from "../containers/User"
import AddEvent from "../containers/AddEvent"
import RemoveEvent from "../containers/RemoveEvent"

const ToggleEventButton = ({ eventId, name }) => {
  return (
    <User>
      {({ data, loading }) => {
        if (loading) return <p>loading...</p>
        if (!data) return null
        if (!data.me) return null

        const { events } = data.me
        const isGoing = events.filter(event => {
          return event.eventId === eventId
        })

        return data && data.me && isGoing.length > 0 ? (
          <RemoveEvent eventId={eventId} />
        ) : (
          <AddEvent eventId={eventId} name={name} />
        )
      }}
    </User>
  )
}

export default ToggleEventButton
