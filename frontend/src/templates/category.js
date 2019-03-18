import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Post from "../components/Post"

const categoryTemplate = ({ data }) => {
  const { category, post_ } = data.contentfulCategory

  return (
    <Layout>
      <h2>{category}</h2>

      {post_.map(post => {
        const {
          id,
          title,
          introSentence,
          cardImage: { fluid },
        } = post

        return (
          <Post title={title} intro={introSentence} fluid={fluid} key={id} />
        )
      })}
    </Layout>
  )
}

export default categoryTemplate

export const categoryTemplateQuery = graphql`
  query($category: String!) {
    contentfulCategory(category: { eq: $category }) {
      category
      post_ {
        id
        title
        published
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
