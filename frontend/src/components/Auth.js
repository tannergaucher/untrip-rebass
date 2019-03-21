import React from "react"
import { Tabs, Tab, Grommet } from "grommet"

import Container from "../components/styles/Container"
import Signin from "../containers/Signin"
import Signup from "../containers/Signup"

const Auth = () => (
  <Grommet>
    <Container>
      <Tabs>
        <Tab title="Sign In">
          <Signin />
        </Tab>
        <Tab title="Sign Up">
          <Signup />
        </Tab>
      </Tabs>
    </Container>
  </Grommet>
)

export default Auth
