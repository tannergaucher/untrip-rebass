import React from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import { navigate } from "@reach/router"
import { Button } from "rebass"

import Error from "../components/Error"
import Fieldset from "../components/styles/Fieldset"
import Input from "../components/styles/Input"
import Brand from "../components/styles/Brand"

import { CURRENT_USER_QUERY } from "./User"

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      token
      user {
        id
        name
        email
        events {
          postId
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
            <>
              <form
                onSubmit={async e => {
                  e.preventDefault()
                  await signin()
                  navigate(`/`)
                }}
              >
                <Fieldset disabled={loading} aria-busy={loading}>
                  <Brand mt={[4]}>Sign In</Brand>
                  <Error error={error} />
                  <Input
                    name="email"
                    type="email"
                    placeholder="email"
                    autoComplete="current-password"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />

                  <Input
                    name="password"
                    type="password"
                    placeholder="password"
                    autoComplete="current-password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />

                  <Button type="submit" bg="black" disabled={loading} my={[2]}>
                    Sign in
                  </Button>
                </Fieldset>
              </form>
            </>
          )
        }}
      </Mutation>
    )
  }
}

export default Signin
