import React from "react"
import { Calendar } from "grommet"

const MyCalendar = () => (
  <Calendar
    size="small"
    locale="en-MY"
    margin="medium"
    alignSelf="center"
    onSelect={date => {}}
    date={new Date().toISOString()}
  />
)

export default MyCalendar
