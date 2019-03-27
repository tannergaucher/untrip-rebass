import React from "react"

import { Calendar } from "grommet"

const MyCalendar = () => (
  <Calendar
    size="small"
    // date={new Date().toISOString()}
    dates={["2019-03-19", "2019-03-22", "2019-03-10", "2019-03-01"]}
    onSelect={date => {}}
    locale="en-MY"
    alignSelf="center"
    margin="medium"
  />
)

export default MyCalendar
