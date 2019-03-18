import React from "react"
import { Text } from "rebass"

const Event = ({
  name,
  description,
  website,
  facebook,
  instagram,
  price,
  eventStarts,
  eventEnds,
  articleText: {
    childContentfulEventArticleTextEventArticleTextTextNode: {
      childMarkdownRemark: { html: articleText },
    },
  },
}) => {
  return (
    <>
      <h1>{name}</h1>
      <h4>{description}</h4>
      <h6>{website}</h6>
      <h6>{instagram}</h6>
      <h6>{facebook}</h6>
      <h6>{price}</h6>
      <h6>{eventStarts}</h6>
      <h6>{eventEnds}</h6>
      <Text dangerouslySetInnerHTML={{ __html: articleText }} />
    </>
  )
}

export default Event
