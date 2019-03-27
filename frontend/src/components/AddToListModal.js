import React, { useState } from "react"
import {
  Form,
  FormField,
  Layer,
  Heading,
  Button,
  DropButton,
  Box,
} from "grommet"

import { Close, Add as AddIcon } from "grommet-icons"

function AddToListModal({ name }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <DropButton
        label={`${name} to List`}
        color="accent-3"
        icon={<AddIcon size="small" />}
        dropAlign={{ top: "top", right: "right" }}
        margin={{ vertical: "medium" }}
        alignSelf="end"
        dropContent={
          <Box pad="medium">
            <Heading level="6" margin="medium">
              Good Work Cafes Near Bangsar
            </Heading>
            <Heading level="6" margin="medium">
              Secret Date Spots
            </Heading>
            <Heading level="6" margin="medium">
              Nasi Lemak is Life, Life is Nasi Lemak
            </Heading>
            <Button
              onClick={() => setShowModal(true)}
              margin="medium"
              label="Start new list"
            />
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

export default AddToListModal