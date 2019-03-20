import React, { useState } from "react"
import { Accordion, AccordionPanel, Grommet } from "grommet"
import { Menu as MenuIcon, Close } from "grommet-icons"
import { Heading } from "rebass"
import { graphql, StaticQuery } from "gatsby"

import MenuList from "./styles/MenuList"
import MenuButton from "./styles/MenuButton"
import CloseButton from "./styles/CloseButton"
import Category from "./styles/Category"
import Link from "../components/styles/Link"
import Layer from "../components/styles/Layer"
import { grommetTheme } from "../utils/theme"
import { kebabCase } from "lodash"

const MenuItem = props => (
  <Heading {...props} fontSize={[3]} fontWeight="500" my={[2]} color="black" />
)

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
          <Grommet theme={grommetTheme}>
            <MenuButton onClick={handleOpen}>
              <MenuIcon color="black" size="medium" />
            </MenuButton>
            {open && (
              <Layer onClickOutside={handleClose} onEsc={handleClose}>
                <CloseButton onClick={handleClose}>
                  <Close color="black" size="medium" />
                </CloseButton>
                <MenuList p={[3]}>
                  <Accordion>
                    {edges.map(edge => {
                      const { category, post_ } = edge.node

                      return (
                        <AccordionPanel
                          label={<Category>{category}</Category>}
                          key={category}
                        >
                          {post_.map(post => {
                            const { subcategory, id } = post
                            return subcategory.map(node => (
                              <Link
                                to={`/${kebabCase(category)}/${kebabCase(
                                  node.subcategory
                                )}`}
                                key={id}
                              >
                                <MenuItem>{node.subcategory}</MenuItem>
                              </Link>
                            ))
                          })}
                        </AccordionPanel>
                      )
                    })}
                    <Category>Culture</Category>
                    <Category>Newsletter</Category>
                    <Category>Get App</Category>
                    <Category>About Us</Category>
                  </Accordion>
                </MenuList>
              </Layer>
            )}
          </Grommet>
        )
      }}
    />
  )
}

export default Menu
