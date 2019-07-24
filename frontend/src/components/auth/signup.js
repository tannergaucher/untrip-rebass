import React, { useState } from "react"
import gql from "graphql-tag"
import { navigate } from "@reach/router"
import { Mutation } from "react-apollo"
import { Button, Form, FormField } from "grommet"

import { Error } from "../elements"
import { Fieldset } from "../styles"
import { SIGNUP_MUTATION } from "../apollo/graphql"

export default function Signup() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  return (
    <Mutation mutation={SIGNUP_MUTATION} variables={{ name, email, password }}>
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
              name="email"
              type="email"
              placeholder="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <FormField
              name="password"
              type="password"
              placeholder="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <FormField
              name="name"
              type="text"
              placeholder="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Button type="submit" label="Sign Up" disabled={loading} primary />
          </Fieldset>
        </Form>
      )}
    </Mutation>
  )
}
