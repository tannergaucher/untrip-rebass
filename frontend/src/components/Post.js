import React from "react"
import { Flex, Box, Card } from "rebass"
import { Grommet, Carousel } from "grommet"
import Image from "../components/styles/Image"
import PostTitle from "./styles/PostTitle"
import PostSubtitle from "./styles/PostSubtitle"
import PostInfo from "./PostInfo"
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
    <Card
      flexDirection="column"
      my={[4]}
      boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
      borderRadius="2px"
    >
      <Grommet>
        <Carousel>
          {carouselImages.map(image => (
            <Image fluid={image.fluid} style={{ height: "225px" }} />
          ))}
        </Carousel>
      </Grommet>

      <Flex flexDirection="column" justifyContent="space-between" p={3}>
        <Link to={slug}>
          <PostInfo category={category} neighborhood={neighborhood} />
          <PostTitle fontSize={[3, 4, 5]}>{title}</PostTitle>
          <PostSubtitle>{intro}</PostSubtitle>
        </Link>
      </Flex>
    </Card>
  )
}

export default Post
