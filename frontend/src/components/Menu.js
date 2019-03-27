import React, { useState } from "react"
import { Accordion, AccordionPanel, Heading, Layer, Box, Button } from "grommet"
import { Menu as MenuIcon, Close } from "grommet-icons"
import { graphql, StaticQuery } from "gatsby"
import { kebabCase } from "lodash"

import Link from "../components/styles/Link"
import User from "../containers/User"

const MenuCategory = ({ category }) => (
  <Heading margin="medium" level="3" color="black">
    {category}
  </Heading>
)

const MenuItem = ({ text }) => (
  <Heading level="4" margin="medium">
    {text}
  </Heading>
)

const Signin = () => (
  <Link to="/signin">
    <MenuCategory category="Signin" />
  </Link>
)

const Profile = () => (
  <Link to="profile">
    <MenuCategory category="Profile" />
  </Link>
)

function Menu() {
  let myId = 1

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
                  tags {
                    tag
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
                full="vertical"
                responsive={true}
                style={{ borderRadius: "0" }}
              >
                <Button
                  onClick={handleClose}
                  icon={<Close />}
                  alignSelf="end"
                />
                <Box pad="medium" align="center">
                  <Box margin="medium">
                    <Link to="/">
                      <Heading margin="none" color="black">
                        Untrip
                      </Heading>
                    </Link>
                    <Heading level="6" margin="none" color="light-6">
                      Your Inside Guide To KL
                    </Heading>
                  </Box>
                  <Accordion
                    margin={{ vertical: "medium" }}
                    alignSelf="stretch"
                  >
                    {edges.map(edge => {
                      const { category, post_ } = edge.node
                      return (
                        <AccordionPanel
                          label={<MenuCategory category={category} />}
                          key={myId}
                        >
                          <Box>
                            <Link to={kebabCase(category)}>
                              <MenuItem text="All" />
                            </Link>
                            {post_.map(post => {
                              const { tags } = post
                              return tags.map(post => {
                                myId++
                                return (
                                  <Link
                                    to={`/tags/${kebabCase(post.tag)}`}
                                    key={myId}
                                  >
                                    <MenuItem text={post.tag} />
                                  </Link>
                                )
                              })
                            })}
                          </Box>
                        </AccordionPanel>
                      )
                    })}

                    <br />

                    <Link to="/my-lists">
                      <MenuCategory category="My Lists" />
                    </Link>

                    <Link to="/my-events">
                      <MenuCategory category="My Events" />
                    </Link>

                    <User>
                      {({ data }) => {
                        const me = data ? data.me : null
                        return me ? <Profile /> : <Signin />
                      }}
                    </User>
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
