import React from "react"
import gql from "graphql-tag"
import { Button } from "grommet"
import { Mutation } from "react-apollo"

import { CURRENT_USER_QUERY, SIGNOUT_MUTATION } from "../apollo/graphql"

export default function Signout() {
  return (
    <Mutation
      mutation={SIGNOUT_MUTATION}
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    >
      {signout => {
        return <Button onClick={signout} label="Sign Out" plain={true} />
      }}
    </Mutation>
  )
}
