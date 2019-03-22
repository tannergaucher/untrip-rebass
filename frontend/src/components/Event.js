import React from "react"
import { Heading, Paragraph } from "grommet"

import Carousel from "../components/Carousel"
import AddEvent from "../containers/AddEvent"

const Event = props => {
  const {
    postId,
    name,
    description,
    website,
    facebook,
    instagram,
    price,
    eventStarts,
    eventEnds,
    carouselImages,
    articleText: {
      childContentfulEventArticleTextEventArticleTextTextNode: {
        childMarkdownRemark: { html },
      },
    },
  } = props

  return (
    <>
      <Heading level="1">{name}</Heading>
      <Carousel images={carouselImages} />
      <Heading level="3">{description}</Heading>
      <AddEvent postId={postId} />
      <Heading level="6">
        <a href={website}>Website</a>
      </Heading>
      <Heading level="6">
        <a href={instagram}>Instagram</a>
      </Heading>
      <Heading level="6">
        <a href={facebook}>Facebook</a>
      </Heading>
      <Heading level="6">{price}</Heading>
      <Heading level="6">
        {eventStarts} to {eventEnds}
      </Heading>
      <Paragraph dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}

export default Event
