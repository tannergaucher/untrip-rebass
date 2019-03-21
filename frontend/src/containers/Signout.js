import React from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import { Button } from "grommet"

import { CURRENT_USER_QUERY } from "../containers/User"

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`

const Signout = () => {
  return (
    <Mutation
      mutation={SIGN_OUT_MUTATION}
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      // update={() => {
      //   client.resetStore()
      // }}
    >
      {signout => {
        return <Button onClick={signout} label="Sign Out" />
      }}
    </Mutation>
  )
}

export default Signout
