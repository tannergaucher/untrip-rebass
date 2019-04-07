import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Heading } from "grommet"
import SmallCard from "../components/SmallCard"

const FEATURED_POSTS_QUERY = graphql`
  query {
    allContentfulFeaturedPosts {
      edges {
        node {
          featuredPost {
            ...SmallCardFragment
          }
        }
      }
    }
  }
`

export default function FeaturedPosts() {
  const {
    allContentfulFeaturedPosts: { edges },
  } = useStaticQuery(FEATURED_POSTS_QUERY)

  return (
    <section>
      <Heading>Featured</Heading>
      {edges.map(edge => {
        const { node } = edge

        return (
          <SmallCard
            title={node.featuredPost[0].title}
            slug={node.featuredPost[0].slug}
            cardImage={node.featuredPost[0].cardImage}
            introSentence={node.featuredPost[0].introSentence}
          />
        )
      })}
    </section>
  )
}
