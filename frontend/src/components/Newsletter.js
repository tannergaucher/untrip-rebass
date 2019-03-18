import React from "react"
import { Flex } from "rebass"

import Brand from "../components/styles/Brand"
import BrandButton from "../components/styles/BrandButton"
import Banner from "../components/styles/Banner"
import Input from "../components/styles/Input"

const Newsletter = () => (
  <Banner>
    <Brand>Sign Up For Our Newsletter</Brand>
    <Flex flexDirection="column" p={4} style={{ border: "none" }}>
      <Input placeholder="Email Address" />
      <BrandButton>Sign Up</BrandButton>
    </Flex>
  </Banner>
)

export default Newsletter
