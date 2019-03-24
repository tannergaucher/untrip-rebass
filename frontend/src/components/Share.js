import React from "react"
import { Box, Button } from "grommet"
import { FacebookOption, Instagram, Twitter } from "grommet-icons"

const Share = () => (
  <Box direction="row" justify="end" margin={{ vertical: "medium" }}>
    <Button
      icon={<FacebookOption color="white" size="small" />}
      plain={true}
      margin={{ left: "xsmall" }}
      style={{
        border: "2px solid black",
        padding: ".3em",
        borderRadius: "50%",
        background: "black",
        boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
      }}
    />
    <Button
      icon={<Twitter color="white" size="small" />}
      plain={true}
      margin={{ left: "xsmall" }}
      style={{
        border: "2px solid black",
        padding: ".3em",
        borderRadius: "50%",
        background: "black",
        boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
      }}
    />
    <Button
      icon={<Instagram color="white" size="small" />}
      plain={true}
      margin={{ left: "xsmall" }}
      style={{
        border: "2px solid black",
        padding: ".3em",
        borderRadius: "50%",
        background: "black",
        boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
      }}
    />
  </Box>
)

export default Share
