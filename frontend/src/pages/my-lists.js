import React from "react"
import { graphql } from "gatsby"
import { Heading, Text, Box, Button } from "grommet"

import Layout from "../components/layout"
import User from "../containers/User"
import PleaseSignin from "../containers/PleaseSignin"
import Container from "../components/styles/Container"

//1. query the users lists
//2. map lists to select

//3. map list places to draggable list items
//todo: save the list items index to db, to persist list item order

class MyLists extends React.Component {
  state = {
    list: "",
    places: "",
  }

  render() {
    return (
      <Layout>
        <PleaseSignin>
          <User>
            {({ data, loading, error }) => {
              if (loading) return <p>loading..</p>
              if (error) return <p>{error.message}</p>
              if (!data.me) return <p>no datame</p>

              console.log(data)

              return (
                <Container>
                  <Heading margin="medium" textAlign="center">
                    My Lists
                  </Heading>

                  {data.me.lists.map(list => {
                    const { places } = list
                    return (
                      <Box className="list">
                        <Heading level="3">{list.title}</Heading>
                        {places.map(place => {
                          return <p>{place.placeId}</p>
                        })}
                        <Button label="Delete list" plain={true} />
                      </Box>
                    )
                  })}
                </Container>
              )
            }}
          </User>
        </PleaseSignin>
      </Layout>
    )
  }
}

export default MyLists

// TODO: make fragment

export const myListsQuery = graphql`
  query myListsQuery {
    allContentfulPost {
      edges {
        node {
          id
          title
          introSentence
          category {
            category
          }
          carouselImages {
            description
            credit
            source
            sourceLink
            image {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
          slug
        }
      }
    }
  }
`
