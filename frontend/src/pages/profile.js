import React from "react"
import Layout from "../components/layout"
import { ApolloConsumer } from "react-apollo"
import { Heading, Box } from "grommet"

import Signout from "../containers/Signout"
import PleaseSignin from "../containers/PleaseSignin"
import { CURRENT_USER_QUERY } from "../containers/User"

const profile = () => (
  <Layout>
    <PleaseSignin>
      <ApolloConsumer>
        {client => {
          const data = client.readQuery({ query: CURRENT_USER_QUERY })
          const { name, email } = data.me
          return (
            <Box fill="vertical" align="center" justify="center">
              <Heading level="1"> Hey, {name} 👋</Heading>
              <Heading level="5">{email}</Heading>
              <Signout />
            </Box>
          )
        }}
      </ApolloConsumer>
    </PleaseSignin>
  </Layout>
)

export default profile
