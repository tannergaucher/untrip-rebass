import React from "react"
import { Flex, Box, Card } from "rebass"
import Img from "gatsby-image"

import PostTitle from "./styles/PostTitle"
import PostSubtitle from "./styles/PostSubtitle"
import PostInfo from "./PostInfo"
import Social from "./Social"

const Post = ({ title, intro, category, neighborhood, date, fluid }) => {
  console.log(category)

  return (
    <Card
      flexDirection="column"
      mt={[4, 5]}
      mb={[4, 5]}
      boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
      borderRadius="2px"
    >
      <Img fluid={fluid} />
      <Flex justifyContent="space-between" alignItems="flex-end" p={3}>
        <Box>
          <PostInfo category={category} neighborhood={neighborhood} />
          <PostTitle>{title}</PostTitle>
          <PostSubtitle>{intro}</PostSubtitle>
          <PostSubtitle>{date}</PostSubtitle>
        </Box>
        <Social />
      </Flex>
    </Card>
  )
}

export default Post
