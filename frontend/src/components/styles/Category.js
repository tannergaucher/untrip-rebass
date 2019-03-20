import React from "react"
import { Heading } from "rebass"

const Category = props => (
  <Heading
    my={[3]}
    fontSize={[5]}
    letterSpacing=".5px"
    color="black"
    {...props}
    style={{ textTransform: "uppercase" }}
  />
)

export default Category
