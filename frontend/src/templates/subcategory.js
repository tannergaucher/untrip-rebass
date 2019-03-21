import React from "react"
import { graphql } from "gatsby"
import { Heading } from "grommet"

import Container from "../components/styles/Container"
import Layout from "../components/layout"
import SmallCard from "../components/SmallCard"

const subcategoryPage = ({ data }) => {
  const { subcategory, post_ } = data.contentfulSubcategory
  return (
    <Layout>
      <Container width={1}>
        <Heading level="3">{subcategory}</Heading>

        {post_.map(post => {
          const {
            title,
            introSentence,
            cardImage: { fluid },
          } = post

          return <SmallCard title={title} intro={introSentence} fluid={fluid} />
        })}
      </Container>
    </Layout>
  )
}

export default subcategoryPage

export const subcategoryPageQuery = graphql`
  query($subcategory: String!) {
    contentfulSubcategory(subcategory: { eq: $subcategory }) {
      subcategory
      post_ {
        title
        slug
        introSentence
        cardImage {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
