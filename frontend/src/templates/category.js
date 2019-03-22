import React from "react"
import { graphql } from "gatsby"
import { Heading } from "grommet"
import { kebabCase } from "lodash"

import Container from "../components/styles/Container"
import Layout from "../components/layout"
import Subcategory from "../components/Subcategory"
import Link from "../components/styles/Link"

const categoryPage = ({ data }) => {
  const { category, post_ } = data.contentfulCategory

  return (
    <Layout>
      <Container width={1}>
        <Heading
          level="3"
          style={{
            position: "sticky",
            top: "0",
            zIndex: 3,
            textAlign: "center",
          }}
        >
          <Link to={kebabCase(category)}>{category}</Link>
        </Heading>

        {/* Todo: make a FilterLinks component
        1. Pull in categories, 
        2. Highlight active category, 
        3. Navigate to category on click  */}

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
