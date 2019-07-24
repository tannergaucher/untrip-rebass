import React from "react"
import { Heading, Box } from "grommet"
import { ApolloConsumer } from "react-apollo"

import { Layout } from "../components/elements"
import { CURRENT_USER_QUERY } from "../components/apollo/graphql"
import { Signout, PleaseSignin } from "../components/auth"

export default function ProfilePage() {
  return (
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
}
