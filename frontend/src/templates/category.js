import React from "react"
import { graphql } from "gatsby"

import Container from "../components/styles/Container"
import Layout from "../components/layout"
import Subcategory from "../components/Subcategory"

const categoryPage = ({ data }) => {
  const { category, post_ } = data.contentfulCategory

  return (
    <Layout>
      <Container width={1}>
        <h2>{category}</h2>
        {post_.map(post => {
          const { subcategory: subcategories } = post

          return subcategories.map(subcategory => {
            const {
              subcategory: title,
              subcategoryImage: { fluid },
            } = subcategory
            return (
              <Subcategory
                category={category}
                subcategory={title}
                fluid={fluid}
              />
            )
          })
        })}
      </Container>
    </Layout>
  )
}

export default categoryPage

export const categoryPageQuery = graphql`
  query($category: String!) {
    contentfulCategory(category: { eq: $category }) {
      category
      post_ {
        subcategory {
          subcategory
          subcategoryImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
