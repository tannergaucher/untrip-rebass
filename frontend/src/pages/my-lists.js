import React, { useState } from "react"
import { graphql } from "gatsby"
import { Heading, Text, Box, Select } from "grommet"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

import Layout from "../components/layout"
import Share from "../components/Share"
import User from "../containers/User"
import PleaseSignin from "../containers/PleaseSignin"
import Container from "../components/styles/Container"

const fakePlaces = [
  {
    name: "VCR",
    neighborhood: "Bangsar",
    userSentence: "Solid coffee, outlets and fast internet.",
    id: 1,
  },
  {
    name: "Lokl",
    neighborhood: "KL",
    userSentence: "Try the coconut water coffee",
    id: 2,
  },
  {
    name: "Artisan",
    neighborhood: "Petaling Jaya",
    userSentence: "Good Juice",
    id: 3,
  },
]

const ListItem = ({ name, neighborhood, thumbnail, userSentence }) => (
  <Box margin="none" pad="medium" background="light-3">
    <Box direction="row" justify="between">
      <Heading level={3} margin="none">
        {name}
      </Heading>
      <Heading level={6} margin="none">
        {neighborhood}
      </Heading>
    </Box>
    <Text size="small">{userSentence}</Text>
  </Box>
)

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  return result
}

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  padding: ".5em",

  background: isDragging ? "lightgreen" : "",
  ...draggableStyle,
})

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "",
})

function myEvents({ data }) {
  const [value, setValue] = useState("Best Work Cafes")
  const [places, setPlaces] = useState(fakePlaces)

  const onDragEnd = result => {
    if (!result.destination) {
      return
    }
    const myPlaces = reorder(
      places,
      result.source.index,
      result.destination.index
    )
    setPlaces(myPlaces)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Layout>
        <PleaseSignin>
          <User>
            {({ data, loading, error }) => {
              if (loading) return <p>loading..</p>
              if (error) return <p>{error.message}</p>

              return (
                <Container>
                  <Heading margin="medium" textAlign="center">
                    My Lists
                  </Heading>
                  <Select
                    options={[
                      "Best Work Cafes",
                      "The trail of splendid nadsi lemak",
                      "Best breakfast sets for under 7RM",
                    ]}
                    value={value}
                    onChange={({ option }) => setValue(option)}
                    margin={{ vertical: "medium" }}
                  />
                  <Share />
                  <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}
                      >
                        {places.map((place, index) => {
                          const { name, neighborhood, userSentence, id } = place
                          return (
                            <Draggable key={id} draggableId={id} index={index}>
                              {(provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={getItemStyle(
                                    snapshot.isDragging,
                                    provided.draggableProps.style
                                  )}
                                >
                                  <ListItem
                                    name={name}
                                    neighborhood={neighborhood}
                                    userSentence={userSentence}
                                    id={id}
                                    key={id}
                                    index={index}
                                  />
                                </div>
                              )}
                            </Draggable>
                          )
                        })}
                      </div>
                    )}
                  </Droppable>
                </Container>
              )
            }}
          </User>
        </PleaseSignin>
      </Layout>
    </DragDropContext>
  )
}

export default myEvents

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
