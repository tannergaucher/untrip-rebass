import React from "react"
import { Query } from "react-apollo"

import Auth from "../components/Auth"
import { CURRENT_USER_QUERY } from "./User"
import Loading from "../components/Loading"

const PleaseSignin = ({ children }) => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data: { me }, loading }) => {
      if (loading) return <Loading />

      return !me ? <Auth /> : children
    }}
  </Query>
)

export default PleaseSignin
