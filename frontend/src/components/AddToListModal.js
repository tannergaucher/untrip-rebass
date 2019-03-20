import React, { useState } from "react"
import { Flex, Box, Button, Heading, Text } from "rebass"
import { Grommet, Layer, Select } from "grommet"

function CenterModal() {
  const [show, setShow] = useState()
  return (
    <Grommet>
      <Button bg="black" color="white" mt={[2]} onClick={() => setShow(true)}>
        Add to List
      </Button>
      {show && (
        <Layer
          responsive={false}
          onEsc={() => setShow(false)}
          onClickOutside={() => setShow(false)}
        >
          <SelectList />
        </Layer>
      )}
    </Grommet>
  )
}

function SelectList() {
  const [list, setList] = useState("cafes")

  return (
    <Box p={2}>
      <Heading>Add to</Heading>
      <Select
        options={["cafes", "breakfast spots"]}
        value={list}
        onChange={({ option }) => setList(option)}
      />
      <Heading>Create new list</Heading>
      <Flex mt={[2]}>
        <input />
        <Button bg="black">+</Button>
      </Flex>
    </Box>
  )
}

export default CenterModal
