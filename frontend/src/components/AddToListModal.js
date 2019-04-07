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

import User from "../containers/User"
import CreateList from "../containers/CreateList"

const ListItem = ({ title }) => (
  <Heading level="6" margin="medium">
    {title}
  </Heading>
)

function AddToListModal({ name, placeId }) {
  const [showModal, setShowModal] = useState(false)
  const [listName, setListName] = useState("")

  const handleChange = e => {
    setListName({ [e.target.name]: e.target.value })
  }

  return (
    <>
      <User>
        {({ data, loading, error }) => {
          if (loading) return <p>loading..</p>
          if (error) return <p>{error.message}</p>
          const me = data ? data.me : null

          return (
            <DropButton
              label={`${name} to List`}
              color="accent-3"
              icon={<AddIcon size="small" />}
              dropAlign={{ top: "top", right: "right" }}
              margin={{ vertical: "medium" }}
              alignSelf="end"
              dropContent={
                <Box pad="medium">
                  <Button
                    label={<ListItem title="new list" />}
                    plain={true}
                    onClick={() => setShowModal(true)}
                  />
                  {me.lists.map(list => (
                    <ListItem title={list.title} />
                  ))}
                </Box>
              }
              style={{ fontSize: "12px" }}
            />
          )
        }}
      </User>

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
              <FormField
                name="name"
                label="List Name"
                value={listName}
                onChange={handleChange}
              />
              <CreateList title={listName.name} placeId={placeId} />
            </Form>
          </Box>
        </Layer>
      )}
    </>
  )
}

export default AddToListModal
