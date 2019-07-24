import React from "react"
import Img from "gatsby-image"
import { Heading, Text, Box } from "grommet"

import { Event } from "../components/event"
import { Place } from "../components/place"
import { Share } from "../components/post"
import { Avatar } from "../components/user"
import { Layout, Container } from "../components/styles"

export default function Post({ data }) {
  const { post } = data

  return (
    <Layout>
      <Container>
        <Heading level={1}>{post.title}</Heading>
        <Img fluid={post.cardImage.fluid} />
        <Share />
        <Box as="article">
          {post.childContentfulPostArticlePreTextNode && (
            <Text
              margin={{ vertical: "medium" }}
              size="medium"
              dangerouslySetInnerHTML={{
                __html:
                  post.childContentfulPostArticlePreTextNode.childMarkdownRemark
                    .html,
              }}
            />
          )}
          {post.events && (
            <Box as="section">
              {post.events.map(event => (
                <Event {...event} key={event.id} />
              ))}
            </Box>
          )}
          {post.childContentfulPostArticleMainTextNode && (
            <Text
              dangerouslySetInnerHTML={{
                __html:
                  post.childContentfulPostArticleMainTextNode
                    .childMarkdownRemark.html,
              }}
            />
          )}
          {post.places && (
            <Box as="section">
              {post.places.map(place => (
                <Place {...place} key={place.id} />
              ))}
            </Box>
          )}
          {post.childContentfulPostArticleAfterTextNode && (
            <Text
              as="section"
              margin={{ vertical: "medium" }}
              dangerouslySetInnerHTML={{
                __html:
                  post.childContentfulPostArticleAfterTextNode
                    .childMarkdownRemark.html,
              }}
            />
          )}
        </Box>
        <Avatar authorAvatar={post.author} published={post.published} />
      </Container>
    </Layout>
  )
}

export const postPageQuery = graphql`
  query($slug: String!, $containsEvent: Boolean!, $containsPlace: Boolean!) {
    post: contentfulPost(slug: { eq: $slug }) {
      id
      title

      ...AuthorAvatar

      cardImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }

      childContentfulPostArticlePreTextNode {
        childMarkdownRemark {
          html
        }
      }

      childContentfulPostArticleMainTextNode {
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
        ...Event
      }

      places @include(if: $containsPlace) {
        ...Place
      }
    }
  }
`
