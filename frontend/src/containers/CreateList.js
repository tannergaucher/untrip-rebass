import gql from "graphql-tag"
import React from "react"
import { Mutation } from "react-apollo"
import { Button } from "grommet"

const CREATE_LIST_MUTATION = gql`
  mutation($title: String!, $placeId: String!) {
    createList(title: $title, placeId: $placeId) {
      id
    }
  }
`

const CreateList = ({ title, placeId }) => (
  <Mutation mutation={CREATE_LIST_MUTATION} variables={{ title, placeId }}>
    {createList => <Button label="Start new list" onClick={createList} />}
  </Mutation>
)

export default CreateList
  