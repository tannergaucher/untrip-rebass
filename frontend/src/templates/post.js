import React from "react"
import { Box } from "rebass"

import Image from "../components/styles/Image"
import Layout from "../components/layout"
import Container from "../components/styles/Container"
import Event from "../components/Event"
import Place from "../components/Place"
import PostTitle from "../components/styles/PostTitle"
import Avatar from "../components/Avatar"
import MainText from "../components/styles/MainText"

const Post = ({ data }) => {
  const {
    title,
    published,
    author: {
      name,
      avatarImage: { fluid: avatarFluid },
    },
    carouselImages,
    childContentfulPostArticlePreTextNode,
    childContentfulPostArticleMainTextNode,
    childContentfulPostArticleAfterTextNode,
    events,
    places,
  } = data.post

  return (
    <Layout>
      <Container my={[4]} width={[1]}>
        <PostTitle my={[2]}>{title}</PostTitle>

        <Image fluid={carouselImages[0].fluid} my={[4]} />

        <Box as="article" bg="#fafafa">
          {childContentfulPostArticlePreTextNode && (
            <MainText
              as="section"
              fontSize={[1, 2]}
              dangerouslySetInnerHTML={{
                __html:
                  childContentfulPostArticlePreTextNode.childMarkdownRemark
                    .html,
              }}
            />
          )}

          {events && (
            <Box as="section" my={[4]} bg="lightgrey">
              {events.map(event => (
                <Event {...event} key={event.id} />
              ))}
            </Box>
          )}

          {childContentfulPostArticleMainTextNode && (
            <MainText
              as="section"
              fontSize={[1, 2]}
              dangerouslySetInnerHTML={{
                __html:
                  childContentfulPostArticleMainTextNode.childMarkdownRemark
                    .html,
              }}
            />
          )}

          {places && (
            <Box
              as="section"
              bg="#fafafa"
              py={[2]}
              style={{ borderRadius: "4px" }}
            >
              {places.map(place => (
                <Place {...place} key={place.id} />
              ))}
            </Box>
          )}

          {childContentfulPostArticleAfterTextNode && (
            <MainText
              as="section"
              fontSize={[1, 2]}
              dangerouslySetInnerHTML={{
                __html:
                  childContentfulPostArticleAfterTextNode.childMarkdownRemark
                    .html,
              }}
            />
          )}
        </Box>

        <Avatar name={name} published={published} fluid={avatarFluid} />
      </Container>
    </Layout>
  )
}

export default Post

export const postPageQuery = graphql`
  query($slug: String!, $containsEvent: Boolean!, $containsPlace: Boolean!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      published(formatString: "MM/DD/YYYY")
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
        id
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
            ...GatsbyContentfulFluid
          }
        }
      }
      places @include(if: $containsPlace) {
        id
        name
        description
        openingHours
        dateTimeCaveats
        website
        facebook
        instagram
        closingHours
        address {
          lat
          lon
        }
        type {
          placeType
        }
        carouselImages {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        location {
          country
          city
          neighborhood
        }
        placeArticleText {
          childContentfulRichText {
            html
          }
        }
      }
    }
  }
`
