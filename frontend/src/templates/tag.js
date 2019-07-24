import React from "react"
import { graphql } from "gatsby"
import { Heading } from "grommet"

import { Layout } from "../components/elements"
import { Card } from "../components/post"
import { Container } from "../components/styles"

export default function TagPage({ data }) {
  const { tag, post_ } = data.contentfulTag
  return (
    <Layout>
      <Container>
        <Heading>{tag}</Heading>
        {post_.map(post => (
          <Card
            title={post.title}
            slug={post.slug}
            carouselImages={post.carouselImages}
            key={post.id}
          />
        ))}
      </Container>
    </Layout>
  )
}

export const tagPageQuery = graphql`
  query($tag: String!) {
    contentfulTag(tag: { eq: $tag }) {
      tag
      post_ {
        id
        ...CardFragment
      }
    }
  }
`
