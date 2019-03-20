import React from "react"
import { Text, Button, Heading } from "rebass"
import { Grommet, Carousel } from "grommet"
import Image from "../components/styles/Image"
import SecondaryText from "../components/styles/SecondaryText"
import AddEvent from "../containers/AddEvent"

// prettier-ignore
const Detail = props => <Heading fontSize={[1]} fontWeight="200"  {...props}/>

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
      <h1>{name}</h1>

      <Grommet>
        <Carousel>
          {carouselImages.map(image => (
            <Image fluid={image.fluid} style={{ height: "225px" }} />
          ))}
        </Carousel>
      </Grommet>

      <h4>{description}</h4>

      <AddEvent postId={postId} />

      <Detail>
        <a href={website}>Website</a>
      </Detail>
      <Detail>
        <a href={instagram}>Instagram</a>
      </Detail>
      <Detail>
        <a href={facebook}>Facebook</a>
      </Detail>
      <Detail>{price}</Detail>
      <Detail>
        {eventStarts} to {eventEnds}
      </Detail>
      <SecondaryText dangerouslySetInnerHTML={{ __html: html }} my={[4]} />
    </>
  )
}

export default Event
