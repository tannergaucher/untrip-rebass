import React from "react"
import { Flex, Card } from "rebass"
import { Carousel, Heading } from "grommet"
import Image from "../components/styles/Image"

// import PostInfo from "./PostInfo" DELETE COMPONENT
import Link from "../components/styles/Link"

const Post = ({
  title,
  intro,
  category,
  neighborhood,
  date,
  carouselImages,
  slug,
}) => {
  return (
    <>
      <Card
        flexDirection="column"
        my={[4]}
        boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
        borderRadius="2px"
      >
        <Carousel>
          {carouselImages.map(image => (
            <Image fluid={image.fluid} style={{ height: "225px" }} />
          ))}
        </Carousel>

        <Flex flexDirection="column" justifyContent="space-between" p={3}>
          <Link to={slug}>
            <Heading level="4" margin="xsmall">
              {category}
            </Heading>
            <Heading level="4" margin="xsmall">
              {neighborhood}
            </Heading>
            <Heading margin="xsmall" level="2">
              {title}
            </Heading>
            <Heading level="4" margin="xsmall">
              {intro}
            </Heading>
          </Link>
        </Flex>
      </Card>
    </>
  )
}

export default Post
