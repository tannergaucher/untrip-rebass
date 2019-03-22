import React from "react"
import { Heading, Text, Box } from "grommet"

import Image from "../components/styles/Image"
import Layout from "../components/layout"
import Container from "../components/styles/Container"
import Event from "../components/Event"
import Place from "../components/Place"
import Avatar from "../components/Avatar"

const Post = ({ data }) => {
  const {
    id,
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
      <Container>
        <Heading level="1">{title}</Heading>
        <Image fluid={carouselImages[0].fluid} />
        <Box as="article">
          {childContentfulPostArticlePreTextNode && (
            <Text
              margin={{ vertical: "medium" }}
              dangerouslySetInnerHTML={{
                __html:
                  childContentfulPostArticlePreTextNode.childMarkdownRemark
                    .html,
              }}
            />
          )}

          {events && (
            <Box as="section">
              {events.map(event => (
                <Event {...event} key={event.id} postId={id} />
              ))}
            </Box>
          )}

          {childContentfulPostArticleMainTextNode && (
            <Text
              dangerouslySetInnerHTML={{
                __html:
                  childContentfulPostArticleMainTextNode.childMarkdownRemark
                    .html,
              }}
            />
          )}

          {places && (
            <Box as="section">
              {places.map(place => (
                <Place {...place} key={place.id} />
              ))}
            </Box>
          )}

          {childContentfulPostArticleAfterTextNode && (
            <Text
              as="section"
              margin={{ vertical: "medium" }}
              dangerouslySetInnerHTML={{
                __html:
                  childContentfulPostArticleAfterTextNode.childMarkdownRemark
                    .html,
              }}
            />
          )}
        </Box>

        <Avatar
          name={name}
          published={published}
          fluid={avatarFluid}
          social="http://www.twitter.com/tannergaucher"
        />
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
