import React from "react"
import { graphql } from "gatsby"
import { Heading, Box, Button } from "grommet"
import { Query } from "react-apollo"
import { kebabCase } from "lodash"
import gql from "graphql-tag"

import Card from "../components/Card"
import Container from "../components/styles/Container"
import Layout from "../components/layout"
import Link from "../components/styles/Link"

const SELECTED_TAGS_QUERY = gql`
  query {
    selectedTags @client
  }
`

const categoryPage = ({ data }) => {
  const { category, post_ } = data.contentfulCategory
  return (
    <Query query={SELECTED_TAGS_QUERY}>
      {({ data, client }) => (
        <Layout>
          <Container>
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
            <Box background="light-4" direction="row">
              {post_.map(post => {
                const { tags } = post
                return tags.map(tag => (
                  <Button
                    label={tag.tag}
                    plain={true}
                    margin="small"
                    active={data.selectedTags.includes(tag.tag)}
                    onClick={() => {
                      let data = client.readQuery({
                        query: SELECTED_TAGS_QUERY,
                      })
                      if (data.selectedTags.includes(tag.tag)) {
                        data.selectedTags = data.selectedTags.filter(
                          selectedTag => selectedTag !== tag.tag
                        )
                      } else {
                        data.selectedTags = [...data.selectedTags, tag.tag]
                      }
                      client.writeQuery({
                        query: SELECTED_TAGS_QUERY,
                        data,
                      })
                    }}
                  />
                ))
              })}
            </Box>
            {post_.map(post => {
              // Todo: display only currently filtered posts
              const { title, slug, carouselImages, tags } = post
              return (
                <Card
                  title={title}
                  slug={slug}
                  carouselImages={carouselImages}
                />
              )
            })}
          </Container>
        </Layout>
      )}
    </Query>
  )
}

export default categoryPage

export const categoryPageQuery = graphql`
  query($category: String!) {
    contentfulCategory(category: { eq: $category }) {
      category
      post_ {
        title
        slug
        carouselImages {
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
        tags {
          tag
        }
      }
    }
  }
`
