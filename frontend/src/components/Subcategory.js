import React from "react"
import { Card, Heading } from "rebass"
import { kebabCase } from "lodash"

import Image from "../components/styles/Image"
import Link from "../components/styles/Link"

const Subcategory = ({ category, subcategory, fluid }) => (
  <Card style={{ position: "relative" }} my={[4]}>
    <Link to={`/${kebabCase(category)}/${kebabCase(subcategory)}`}>
      <Heading
        style={{ position: "absolute", top: "50%", right: "50%", zIndex: 1 }}
      >
        {subcategory}
      </Heading>
      <Image fluid={fluid} />
    </Link>
  </Card>
)

export default Subcategory
