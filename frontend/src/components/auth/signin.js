import React, { useState } from "react"
import gql from "graphql-tag"
import { navigate } from "@reach/router"
import { Button, Form, FormField } from "grommet"
import { Mutation, ApolloConsumer } from "react-apollo"

import { Error } from "../elements"
import { Fieldset } from "../styles"
import { CURRENT_USER_QUERY, SIGNIN_MUTATION } from "../apollo/graphql"

export default function Signin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <Mutation
      mutation={SIGNIN_MUTATION}
      variables={{ email, password }}
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    >
      {(signin, { loading, error }) => {
        return (
          <ApolloConsumer>
            {client => (
              <Form
                onSubmit={async e => {
                  e.preventDefault()
                  await signin()
                  navigate(`/`)
                  // reset store and write user data to the cache here
                }}
              >
                <Fieldset>
                  <Error error={error} />
                  <FormField
                    name="email"
                    type="email"
                    placeholder="email"
                    autoComplete="current-password"
                    value={this.state.email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <FormField
                    name="password"
                    type="password"
                    placeholder="password"
                    autoComplete="current-password"
                    value={this.state.password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <Button
                    type="submit"
                    label="Sign In"
                    disabled={loading}
                    primary
                  />
                </Fieldset>
              </Form>
            )}
          </ApolloConsumer>
        )
      }}
    </Mutation>
  )
}
