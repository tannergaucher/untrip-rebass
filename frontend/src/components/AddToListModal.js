import React, { useState } from "react"
import { Layer, Heading, Select, Form, FormField, Button, Box } from "grommet"

function CenterModal({ name }) {
  const [show, setShow] = useState()
  return (
    <>
      <Button label="Add To List" primary onClick={() => setShow(true)} />
      {show && (
        <Layer
          onEsc={() => setShow(false)}
          onClickOutside={() => setShow(false)}
          responsive={true}
        >
          <SelectList name={name} />
        </Layer>
      )}
    </>
  )
}

function SelectList({ name }) {
  const [list, setList] = useState("")

  return (
    <Box margin="medium">
      <Heading level="4">{`Add ${name} to your lists`}</Heading>
      <Select
        options={["Work Cafes", "Breakfast Spots"]}
        value={list}
        onChange={({ option }) => setList(option)}
      />
      <Heading level="4">Or start a new one</Heading>

      <Form>
        <FormField name="" />
        <Button type="submit" label="+ Create" />
      </Form>
    </Box>
  )
}

export default CenterModal
