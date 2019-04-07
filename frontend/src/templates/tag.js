import React from "react"
import { graphql } from "gatsby"
import { Heading } from "grommet"

import Card from "../components/Card"
import Container from "../components/styles/Container"
import Layout from "../components/layout"

const tagPage = ({ data }) => {
  const { tag, post_ } = data.contentfulTag
  return (
    <Layout>
      <Container>
        <Heading>{tag}</Heading>
        {post_.map(post => {
          const { id, title, slug, carouselImages } = post
          return (
            <Card
              title={title}
              slug={slug}
              carouselImages={carouselImages}
              key={id}
            />
          )
        })}
      </Container>
    </Layout>
  )
}

export default tagPage

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
