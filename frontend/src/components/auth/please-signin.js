import React from "react"
import { Query } from "react-apollo"

import { Auth, Loading } from "../elements"
import { CURRENT_USER_QUERY } from "../apollo/graphql"

export default function PleaseSignin({ children }) {
  return (
    <Query query={CURRENT_USER_QUERY}>
      {({ data: { me }, loading }) => {
        if (loading) return <Loading />

        return !me ? <Auth /> : children
      }}
    </Query>
  )
}
