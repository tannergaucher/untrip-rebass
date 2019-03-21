import React from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import { navigate } from "@reach/router"

import Error from "../components/Error"
import Fieldset from "../components/styles/Fieldset"
import { Button, Form, FormField } from "grommet"

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $password: String!
    $name: String!
  ) {
    signup(email: $email, password: $password, name: $name) {
      token
      user {
        name
        id
        email
        events {
          postId
        }
      }
    }
  }
`

class Signup extends React.Component {
  state = {
    email: "",
    password: "",
    name: "",
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <Mutation mutation={SIGNUP_MUTATION} variables={this.state}>
        {(signup, { loading, error }) => (
          <Form
            onSubmit={async e => {
              e.preventDefault()
              await signup()
              navigate("/")
            }}
          >
            <Fieldset disabled={loading} aria-busy={loading}>
              <Error error={error} />

              <FormField
                name="name"
                type="text"
                placeholder="name"
                value={this.state.name}
                onChange={this.handleChange}
              />

              <FormField
                name="email"
                type="email"
                placeholder="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <FormField
                name="password"
                type="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <Button
                type="submit"
                label="Sign Up"
                disabled={loading}
                primary
              />
            </Fieldset>
          </Form>
        )}
      </Mutation>
    )
  }
}

export default Signup
