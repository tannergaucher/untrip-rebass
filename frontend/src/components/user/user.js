import React from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import Proptypes from "prop-types"

import { CURRENT_USER_QUERY } from "../apollo/graphql"

const User = props => (
  <Query query={CURRENT_USER_QUERY}>{payload => props.children(payload)}</Query>
)

User.propTypes = {
  children: Proptypes.func.isRequired,
}

export default User
export { CURRENT_USER_QUERY }
