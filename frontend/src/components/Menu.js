import React, { useState } from "react"
import { Accordion, AccordionPanel, Grommet } from "grommet"
import { Menu as MenuIcon, Close } from "grommet-icons"

import MenuList from "./styles/MenuList"
import MenuButton from "./styles/MenuButton"
import CloseButton from "./styles/CloseButton"
import Category from "./styles/Category"
import Subcategory from "./styles/Subcategory"
import Link from "../components/styles/Link"
import Layer from "../components/styles/Layer"
import { grommetTheme } from "../utils/theme"

function Menu() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

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
          <MenuList>
            <Accordion>
              <AccordionPanel label={<Category>Food & Drink</Category>}>
                <Link to="/restaurants">
                  <Subcategory>Restaurants</Subcategory>
                </Link>
                <Link to="/cafes">
                  <Subcategory>Cafes</Subcategory>
                </Link>
              </AccordionPanel>
              <Category>Music</Category>
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
}

export default Menu
