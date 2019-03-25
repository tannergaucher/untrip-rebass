import React from "react"
import { Box, Tabs, Tab } from "grommet"

import Signin from "../containers/Signin"
import Signup from "../containers/Signup"

const Auth = () => (
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

export default Auth
