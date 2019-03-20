import React from "react"
import { Query } from "react-apollo"
import { Flex } from "rebass"

import { CURRENT_USER_QUERY } from "./User"
import Signin from "./Signin"
import Signup from "./Signup"
import Loading from "../components/Loading"

const Auth = () => (
  <Flex justifyContent="center">
    <Signin />
    <Signup />
  </Flex>
)

const PleaseSignin = ({ children }) => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data: { me }, loading }) => {
      if (loading) return <Loading />

      return !me ? <Auth /> : children
    }}
  </Query>
)

export default PleaseSignin
