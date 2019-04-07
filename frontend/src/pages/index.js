import React from "react"

import Layout from "../components/layout"
import Container from "../components/styles/Container"
import Card from "../components/Card"
import FeaturedPosts from "../components/FeaturedPosts"

const IndexPage = ({ data }) => {
  const { edges } = data.allContentfulPost
  return (
    <Layout>
      <Container>
        <section>
          {edges.map(edge => {
            const { node } = edge
            return (
              <Card
                title={node.title}
                carouselImages={node.carouselImages}
                slug={node.slug}
                id={node.id}
                key={node.id}
              />
            )
          })}
        </section>
        <FeaturedPosts />
      </Container>
    </Layout>
  )
}

export default IndexPage

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
