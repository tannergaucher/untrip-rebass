import React, { useState } from "react"
import { Accordion, AccordionPanel, Heading, Layer, Box, Button } from "grommet"
import { Menu as MenuIcon, Close } from "grommet-icons"
import { graphql, StaticQuery } from "gatsby"
import { kebabCase } from "lodash"

import Link from "../components/styles/Link"
import Divider from "../components/styles/Divider"

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
                <Button onClick={handleClose} icon={<Close />} />

                <Box>
                  <Accordion>
                    {edges.map(edge => {
                      const { category, post_ } = edge.node

                      return (
                        <AccordionPanel
                          label={
                            <Heading margin="xsmall" level="2">
                              {category}
                            </Heading>
                          }
                          key={category}
                        >
                          <Heading level="4" margin="small">
                            <Link to={kebabCase(category)}>ALL</Link>
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
                                <Heading level="4" margin="small">
                                  {node.subcategory}
                                </Heading>
                              </Link>
                            ))
                          })}
                        </AccordionPanel>
                      )
                    })}
                    <Divider />
                    <Heading level="2" margin="xsmall">
                      <Link to="/my-events">Events</Link>
                    </Heading>
                    <Heading level="2" margin="xsmall">
                      <Link to="/my-lists">Lists</Link>
                    </Heading>
                    <Heading level="2" margin="xsmall">
                      <Link to="/profile">Profile</Link>
                    </Heading>
                    <Heading level="2" margin="xsmall">
                      <Link to="/signin"> Sign In </Link>
                    </Heading>
                  </Accordion>
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
