import React from "react"

import Brand from "../components/styles/Brand"
import BrandSecondary from "../components/styles/BrandSecondary"
import BrandButton from "./styles/BrandButton"
import Banner from "../components/styles/Banner"

const Download = () => (
  <Banner>
    <Brand>Download Our App</Brand>
    <BrandSecondary>Get Access To Exclusive Deals</BrandSecondary>
    <BrandSecondary>We Curate Tour Trip With Local Knowledge</BrandSecondary>
    <ul>
      <BrandSecondary as="li">Actual speakeasies?</BrandSecondary>
      <BrandSecondary as="li">Secret menus?</BrandSecondary>
      <BrandSecondary as="li">
        Daily itinerary based on your interests?
      </BrandSecondary>
    </ul>
    <BrandButton>GET THE APP</BrandButton>
  </Banner>
)

export default Download
