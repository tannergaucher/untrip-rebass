import React from "react"
import { ApolloProvider } from "react-apollo"
import { client } from "./src/components/apollo/client"

// Wrap in root element
export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)
