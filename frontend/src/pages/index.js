import React from "react"

import { Layout } from "../components/elements"
import { Container } from "../components/styles"
import { Card, FeaturedPosts } from "../components/post"

export default function IndexPage({ data }) {
  const { edges } = data.allContentfulPost
  return (
    <Layout>
      <Container>
        <section>
          {edges.map(edge => {
            const { node } = edge
            return (
              <Card
                id={node.id}
                key={node.id}
                slug={node.slug}
                title={node.title}
                carouselImages={node.carouselImages}
              />
            )
          })}
        </section>
        <FeaturedPosts />
      </Container>
    </Layout>
  )
}

// Make Into Hook.
export const INDEX_PAGE_QUERY = graphql`
  query INDEX_PAGE_QUERY {
    allContentfulPost {
      edges {
        node {
          postPlace {
            neighborhood
          }
          published(formatString: "MM/DD/YYYY")
          category {
            category
          }
          ...CardFragment
        }
      }
    }
  }
`
