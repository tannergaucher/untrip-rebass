import React from "react"
import { Heading, Text, Box } from "grommet"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Container from "../components/styles/Container"
import Event from "../components/Event"
import Place from "../components/Place"
import Avatar from "../components/Avatar"
import Share from "../components/Share"

function Post({ data: { post } }) {
  return (
    <Layout>
      <Container>
        <Heading level={1} margin={{ vertical: "medium" }}>
          {post.title}
        </Heading>
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

export default Post

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
