import React from "react"

import { User } from "../user"
import { AddEvent, RemoveEvent } from "."

export default function ToggleEventButton({ eventId, name }) {
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
        //  MAKE CLEANER
        return data && data.me && isGoing.length > 0 ? (
          <RemoveEvent eventId={eventId} />
        ) : (
          <AddEvent eventId={eventId} name={name} />
        )
      }}
    </User>
  )
}
