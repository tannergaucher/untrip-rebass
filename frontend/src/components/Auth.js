import React from "react"
import { Tabs, Tab } from "grommet"

import Container from "../components/styles/Container"
import Signin from "../containers/Signin"
import Signup from "../containers/Signup"

const Auth = () => (
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
)

export default Auth
