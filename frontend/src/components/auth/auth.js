import React from "react"
import { Box, Tabs, Tab } from "grommet"

import { Signin, Signup } from "../user"

export default function Auth() {
  return (
    <Box alignSelf="center">
      <Tabs>
        <Tab title="Sign In">
          <Signin />
        </Tab>
        <Tab title="Sign Up">
          <Signup />
        </Tab>
      </Tabs>
    </Box>
  )
}
