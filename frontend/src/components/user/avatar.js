import React from "react"
import { Text, Box } from "grommet"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const SmallText = ({ text }) => (
  <Text level="6" margin="none" color="dark-3" style={{ fontSize: "12px" }}>
    {text}
  </Text>
)

function Avatar({ authorAvatar, published }) {
  return (
    <a href={authorAvatar.socialLink} style={{ textDecoration: "none" }}>
      <Box
        direction="row"
        justify="end"
        align="center"
        margin={{ vertical: "medium" }}
      >
        <Img
          fixed={authorAvatar.avatarImage.fixed}
          style={{ borderRadius: "50%" }}
        />
        <Box margin={{ left: "small" }}>
          <SmallText text={published} />
          <SmallText text={authorAvatar.name} />
        </Box>
      </Box>
    </a>
  )
}

export default Avatar

export const query = graphql`
  fragment AuthorAvatar on ContentfulPost {
    published(formatString: "MM/DD/YYYY")
    author {
      name
      socialLink
      avatarImage {
        fixed(height: 50, width: 50) {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`
