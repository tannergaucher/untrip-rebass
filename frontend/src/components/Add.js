import React, { useState } from "react"
import {
  Anchor,
  Form,
  FormField,
  Layer,
  Heading,
  Button,
  DropButton,
  Box,
} from "grommet"

import { Close, Add as AddIcon } from "grommet-icons"

// Todo: seperate into DropAdd and AddModal

function Add({ name }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <DropButton
        label={`${name} to My Untrip`}
        icon={<AddIcon size="small" />}
        plain={true}
        alignSelf="end"
        dropAlign={{ top: "bottom", right: "right" }}
        margin="medium"
        dropContent={
          <Box pad="medium">
            <Heading level="6">Good Work Cafes Near Bangsar</Heading>
            <Heading level="6">Secret Date Spots</Heading>
            <Heading level="6">Nasi Lemak is Life, Life is Nasi Lemak</Heading>
            <Heading level="6">
              <Anchor onClick={() => setShowModal(true)} icon={<Add />}>
                {name}
              </Anchor>
            </Heading>
          </Box>
        }
        style={{ fontSize: "12px" }}
      />

      {showModal && (
        <Layer
          onEsc={() => setShowModal(false)}
          onClickOutside={() => setShowModal(false)}
          responsive={true}
        >
          <Box pad="medium">
            <Button icon={<Close />} onClick={() => setShowModal(false)} />
            <Heading level="3">{`Add ${name} to a new list`}</Heading>
            <Form>
              <FormField name="name" label="List Name" />
              <Button
                type="submit"
                icon={<AddIcon />}
                label="Add"
                margin={{ vertical: "medium" }}
              />
            </Form>
          </Box>
        </Layer>
      )}
    </>
  )
}

export default Add
