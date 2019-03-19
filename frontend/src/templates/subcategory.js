import React from "react"
import { graphql } from "gatsby"

import Container from "../components/styles/Container"
import Layout from "../components/layout"
import SmallPost from "../components/SmallPost"

const subcategoryPage = ({ data }) => {
  const { subcategory, post_ } = data.contentfulSubcategory
  return (
    <Layout>
      <Container width={1}>
        <h2>{subcategory}</h2>

        {post_.map(post => {
          const {
            title,
            introSentence,
            cardImage: { fluid },
          } = post

          return <SmallPost title={title} intro={introSentence} fluid={fluid} />
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
