import React from "react"

import Layout from "../components/layout"
import Container from "../components/styles/Container"
import Post from "../components/Post"
import Section from "../components/Section"
import SmallPost from "../components/SmallPost"
import Newsletter from "../components/Newsletter"
import Download from "../components/Download"
import Link from "../components/styles/Link"

const IndexPage = ({ data }) => {
  const { edges: latest } = data.latest
  const { edges: featured } = data.featured

  return (
    <Layout>
      <Container width={[1]}>
        <section>
          {latest.map(edge => {
            const {
              title,
              introSentence,
              slug,
              id,
              published,
              cardImage: { fluid },
              category: { category },
            } = edge.node

            return (
              <Link to={slug} key={id}>
                <Post
                  title={title}
                  intro={introSentence}
                  category={category}
                  date={published}
                  fluid={fluid}
                />
              </Link>
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
              <Section title={category} key={id}>
                <Link to={slug}>
                  <SmallPost
                    title={title}
                    intro={introSentence}
                    fluid={fluid}
                  />
                </Link>
              </Section>
            )
          })}
        </div>

        <Download />
        <Newsletter />
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
          published
          category {
            category
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
