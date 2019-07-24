import React from "react"
import styled from "styled-components"

export default function Fieldset({ children }) {
  return (
    <fieldset
      style={{
        border: "none",
        display: "flex",
        flexDirection: "column",
        paddingLeft: "none",
      }}
    >
      {children}
    </fieldset>
  )
}
