import React from "react"
import { Mutation, ApolloConsumer } from "react-apollo"
import gql from "graphql-tag"
import { navigate } from "@reach/router"
import { Button, Form, FormField } from "grommet"
import Error from "../components/Error"
import { CURRENT_USER_QUERY } from "./User"
import Fieldset from "../components/styles/Fieldset"

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      token
      user {
        id
        name
        email
        events {
          eventId
        }
      }
    }
  }
`

class Signin extends React.Component {
  state = {
    email: "",
    password: "",
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <Mutation
        mutation={SIGNIN_MUTATION}
        variables={this.state}
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
                      onChange={this.handleChange}
                    />
                    <FormField
                      name="password"
                      type="password"
                      placeholder="password"
                      autoComplete="current-password"
                      value={this.state.password}
                      onChange={this.handleChange}
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
}

export default Signin
