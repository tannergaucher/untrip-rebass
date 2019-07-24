import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

export default function MyLink({ children }) {
  return (
    <Link
      style={{
        textDecoration: "none",
        color: "black",
      }}
    >
      {children}
    </Link>
  )
}
