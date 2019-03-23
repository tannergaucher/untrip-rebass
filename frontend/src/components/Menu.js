import React, { useState } from "react"
import { Accordion, AccordionPanel, Heading, Layer, Box, Button } from "grommet"
import { Menu as MenuIcon, Close } from "grommet-icons"
import { graphql, StaticQuery } from "gatsby"
import { kebabCase } from "lodash"

import Link from "../components/styles/Link"

function Menu() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <StaticQuery
      query={graphql`
        query CategoriesQuery {
          allContentfulCategory {
            edges {
              node {
                category
                post_ {
                  id
                  subcategory {
                    subcategory
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { edges } = data.allContentfulCategory

        return (
          <>
            <Button onClick={handleOpen} icon={<MenuIcon />} />
            {open && (
              <Layer
                onClickOutside={handleClose}
                onEsc={handleClose}
                modal
                position="right"
                animate="true"
                full="vertical"
                responsive={true}
                style={{ borderRadius: "0" }}
              >
                <Button
                  onClick={handleClose}
                  icon={<Close />}
                  alignSelf="end"
                />
                <Box
                  pad="medium"
                  align="center"
                  justify="between"
                  height="100vh"
                >
                  <Box margin="medium">
                    <Heading margin="none">Untrip</Heading>
                    <Heading level="6" margin="none">
                      Your Inside Guide To KL
                    </Heading>
                  </Box>
                  <Accordion margin={{ vertical: "medium" }}>
                    {edges.map(edge => {
                      const { category, post_ } = edge.node
                      return (
                        <AccordionPanel
                          label={
                            <Heading margin="medium" level="3">
                              {category}
                            </Heading>
                          }
                          key={category}
                        >
                          <Heading level="4" margin="medium">
                            <Link to={kebabCase(category)}>All</Link>
                          </Heading>
                          {post_.map(post => {
                            const { subcategory, id } = post
                            return subcategory.map(node => (
                              <Link
                                to={`/${kebabCase(category)}/${kebabCase(
                                  node.subcategory
                                )}`}
                                key={id}
                              >
                                <Heading level="4" margin="medium">
                                  {node.subcategory}
                                </Heading>
                              </Link>
                            ))
                          })}
                        </AccordionPanel>
                      )
                    })}
                  </Accordion>
                  <Box align="end" alignSelf="end" pad="medium">
                    <Heading level="4" margin="xsmall">
                      <Link to="/me">My Untrip</Link>
                    </Heading>
                    <Heading level="4" margin="xsmall">
                      <Link to="/signin"> Sign In </Link>
                    </Heading>
                  </Box>
                </Box>
              </Layer>
            )}
          </>
        )
      }}
    />
  )
}

export default Menu
