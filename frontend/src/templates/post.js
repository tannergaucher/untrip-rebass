import React from "react"
import { Box, Heading, Text } from "rebass"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Container from "../components/styles/Container"
import Event from "../components/Event"
import Place from "../components/Place"

const Post = ({ data, pageContext }) => {
  const { containsPlace, containsEvent } = pageContext
  const {
    title,
    published,
    introSentence,
    author: { name },
    carouselImages,
    childContentfulPostArticlePreTextNode,
    childContentfulPostArticleAfterTextNode,
    events,
    places,
  } = data.post

  return (
    <Layout>
      <Container mt={[4]}>
        <Img fluid={carouselImages[0].fluid} />
        <Heading mt={[4]}>{title}</Heading>
        <h6 mt={[4]} fontSize={[1]}>
          {introSentence}
        </h6>
        <h6>{published}</h6>
        <h6>{name}</h6>

        <Box as="article">
          <Text
            as="section"
            fontSize={[2, 3]}
            dangerouslySetInnerHTML={{
              __html: childContentfulPostArticlePreTextNode.html,
            }}
          />

          {containsEvent && (
            <Box as="section">
              {events.map(event => (
                <Event {...event} />
              ))}
            </Box>
          )}

          {containsPlace && (
            <Box as="section">
              {places.map(place => (
                <Place {...place} />
              ))}
            </Box>
          )}

          <Text
            as="section"
            fontSize={[2, 3]}
            dangerouslySetInnerHTML={{
              __html:
                childContentfulPostArticleAfterTextNode.childMarkdownRemark
                  .html,
            }}
          />
        </Box>
      </Container>
    </Layout>
  )
}

export default Post

export const postPageQuery = graphql`
  query($slug: String!, $containsEvent: Boolean!, $containsPlace: Boolean!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      published
      introSentence
      author {
        name
        avatarImage {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
      carouselImages {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      childContentfulPostArticlePreTextNode {
        childMarkdownRemark {
          html
        }
      }
      childContentfulPostArticleAfterTextNode {
        childMarkdownRemark {
          html
        }
      }
      events @include(if: $containsEvent) {
        name
        description
        website
        facebook
        instagram
        price
        eventStarts
        eventEnds
        articleText {
          childContentfulEventArticleTextEventArticleTextTextNode {
            childMarkdownRemark {
              html
            }
          }
        }
        carouselImages {
          fluid {
            sizes
          }
        }
      }
      places @include(if: $containsPlace) {
        name
        website
        description
        facebook
        instagram
        openingHours
        closingHours
      }
    }
  }
`
