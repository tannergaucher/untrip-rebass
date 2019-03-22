import React from "react"
import { Box, Heading } from "grommet"

import Layout from "../components/layout"
import Container from "../components/styles/Container"
import Card from "../components/Card"
import SmallCard from "../components/SmallCard"
import Link from "../components/styles/Link"

const IndexPage = ({ data }) => {
  const { edges: latest } = data.latest
  const { edges: featured } = data.featured
  return (
    <Layout>
      <Container>
        <section>
          {latest.map(edge => {
            const {
              title,
              introSentence,
              slug,
              id,
              published,
              carouselImages,
              postPlace: { neighborhood },
              category: { category },
            } = edge.node

            return (
              <Card
                title={title}
                intro={introSentence}
                category={category}
                date={published}
                neighborhood={neighborhood}
                carouselImages={carouselImages}
                slug={slug}
                id={id}
                key={id}
              />
            )
          })}
        </section>

        <div>
          {featured.map(edge => {
            const { category, id } = edge.node
            const {
              introSentence,
              slug,
              title,
              cardImage: { fluid },
            } = edge.node.post_[0]

            return (
              <Box key={id}>
                <Heading level="4">{category}</Heading>
                <Link to={slug}>
                  <SmallCard
                    title={title}
                    intro={introSentence}
                    fluid={fluid}
                  />
                </Link>
              </Box>
            )
          })}
        </div>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const INDEX_PAGE_QUERY = graphql`
  query INDEX_PAGE_QUERY {
    latest: allContentfulPost {
      edges {
        node {
          id
          title
          slug
          introSentence
          postPlace {
            neighborhood
          }
          published(formatString: "MM/DD/YYYY")
          category {
            category
          }
          carouselImages {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          cardImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    featured: allContentfulCategory {
      edges {
        node {
          id
          category
          post_ {
            slug
            title
            introSentence
            cardImage {
              fluid(maxWidth: 200) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  }
`
