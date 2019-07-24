import { graphql } from "gatsby"
// All contentful content type fragments here
// Unlike prisma type fragments, these fragments are available globally. Why?

export const EVENT_FRAGMENT = graphql`
  fragment ContentfulEventFragment on ContentfulEvent {
    # This is all changing after redoing the data modeling in contentful. Leave it for now.
    eventStarts(formatString: "h:mm A")
    eventEnds(formatString: "h:mm A")
    dateTimeCaveats
    price
    website
    facebook
    instagram
    ticketLink
    type {
      type
    }
    place {
      location {
        neighborhood
      }
    }
  }
`

export const PLACE_FRAGMENT = graphql`
  fragment ContentfulPlaceFragment on ContentfulPlace {
    id
    name
    description
    placeDetails {
      id
      # more here
    }
    carouselImages {
      ...CarouselImage
    }
    placeArticleText {
      childContentfulRichText {
        html
      }
    }
  }
`

export const POST_FRAGMENT = graphql`
  fragment ContentfulPostFragment on ContentfulPost {
    id
  }
`

export const SMALL_CARD_FRAGMENT = graphql`
  fragment SmallCardFragment on ContentfulPost {
    title
    slug
    introSentence
    cardImage {
      fluid {
        ...GatsbyContentfulFluid
      }
    }
  }
`
