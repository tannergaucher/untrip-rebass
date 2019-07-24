import React from "react"
import gql from "graphql-tag"
import { Button } from "grommet"
import { Mutation } from "react-apollo"

import { CREATE_LIST_MUTATION } from "../apollo/graphql"

export default function CreateList({ title, placeId }) {
  return (
    <Mutation mutation={CREATE_LIST_MUTATION} variables={{ title, placeId }}>
      {createList => <Button label="Start new list" onClick={createList} />}
    </Mutation>
  )
}
