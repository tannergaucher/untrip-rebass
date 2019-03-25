import React from "react"
import { Heading, Text, Box } from "grommet"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Container from "../components/styles/Container"
import Event from "../components/Event"
import Place from "../components/Place"
import Avatar from "../components/Avatar"
import Share from "../components/Share"

const Post = ({ data }) => {
  const {
    id,
    title,
    published,
    author: {
      name,
      socialLink,
      avatarImage: { fluid: avatarFluid },
    },
    cardImage: { fluid },
    childContentfulPostArticlePreTextNode,
    childContentfulPostArticleMainTextNode,
    childContentfulPostArticleAfterTextNode,
    events,
    places,
  } = data.post

  return (
    <Layout>
      <Container>
        <Heading level={1} margin={{ vertical: "medium" }}>
          {title}
        </Heading>
        <Img fluid={fluid} />
        <Share />
        <Box as="article">
          {childContentfulPostArticlePreTextNode && (
            <Text
              margin={{ vertical: "medium" }}
              size="medium"
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
                <Event {...event} key={event.id} />
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
          social={socialLink}
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
        socialLink
        avatarImage {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
      carouselImages {
        description
        credit
        source
        sourceLink
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
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
        id
        name
        description
        website
        facebook
        instagram
        ticketLink
        price
        eventStarts(formatString: "h:mm A")
        eventEnds(formatString: "h:mm A")
        dateTimeCaveats
        type {
          type
        }
        place {
          name
          location {
            neighborhood
          }
        }
        articleText {
          childContentfulEventArticleTextEventArticleTextTextNode {
            childMarkdownRemark {
              html
            }
          }
        }
        carouselImages {
          description
          credit
          source
          sourceLink
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
      places @include(if: $containsPlace) {
        id
        name
        description
        openingHours(formatString: "h:mm A")
        closingHours(formatString: "h:mm A")
        dateTimeCaveats
        website
        facebook
        instagram
        address {
          lat
          lon
        }
        type {
          placeType
        }
        carouselImages {
          description
          credit
          source
          sourceLink
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
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
